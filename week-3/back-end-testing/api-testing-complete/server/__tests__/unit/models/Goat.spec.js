const Goat = require('../../../models/Goat')
const db = require('../../../database/connect')

describe('Goat', () => {
  beforeEach(() => jest.clearAllMocks())

  afterAll(() => jest.resetAllMocks())

  describe ('getAll', () => {
    it('resolves with goats on successful', async () => {
      jest.spyOn(db, 'query')
        .mockResolvedValueOnce({
          rows: [{ name: 'g1', age: 1 }, { name: 'g2', age: 2 }, { name: 'g3', age: 3 }]
        })

      const goats = await Goat.getAll()
      
      expect(goats).toHaveLength(3)
      expect(goats[0]).toHaveProperty('id')
    })

    it('should throw an Error on db query error', async () => {
      jest.spyOn(db, 'query')
        .mockResolvedValueOnce({ rows: [] })

      try {
        await Goat.getAll()
      } catch (err) {
        expect(err).toBeDefined()
        expect(err.message).toBe("No goats available.")
      }
    })
  })

  describe ('findById', () => {
    it('resolves with goat on successful db query', async () => {
      let testGoat = { id: 1, name: 'goat', age: 22 }
      jest.spyOn(db, 'query')
        .mockResolvedValueOnce({ rows: [testGoat] })

      const result = await Goat.findById(1)
      
      expect(result).toBeInstanceOf(Goat)
      expect(result.name).toBe('goat')
      expect(result.id).toBe(1)
    })

    it('should throw an Error on db query error', async () => {
      jest.spyOn(db, 'query').mockRejectedValue()

      try {
        await Goat.findById('red')
      } catch (error) {
        expect(error).toBeTruthy()
        expect(error.message).toBe('This goat does not exist!')
      }
    })
  })

  describe('create', () => {
    it('resolves with goat on successful db query', async () => {
      let goatData = { name: 'plum', age: 99 }
      jest.spyOn(db, 'query')
        .mockResolvedValueOnce({ rows: [{ ...goatData, id: 1 }] });

      const result = await Goat.create(goatData);
      
      expect(result).toBeTruthy()
      expect(result).toHaveProperty('id')
      expect(result).toHaveProperty('name')
      expect(result).toHaveProperty('age')
    })

    it('should throw an Error on db query error', async () => {
      try {
        await Goat.create({ name: "plum" })
      } catch (error) {
        expect(error).toBeTruthy()
        expect(error.message).toBe('age is missing')
      }
    })
  })

  
  describe('update', () => {
    it('should return the updated goat', async () => {
      const goat = new Goat({ name: 'plum', age: 99 })
      jest.spyOn(db, 'query')
        .mockResolvedValueOnce({ rows: [{ id: 72, name: 'pear', age: 100 }] })

      const result = await goat.update({ name: 'pear', age: 100 })

      expect(result).toBeInstanceOf(Goat)
      expect(result.id).toBe(72)
      expect(result.name).toBe('pear')
      expect(result).not.toEqual(goat)
    })

    it('should throw an error if age is missing', async () => {
      try {
        const goat = new Goat({ name: 'plum', age: 99 })
        await goat.update({ name: 'puppet' });
      } catch (error) {
        expect(error).toBeTruthy()
        expect(error.message).toBe('age or name missing')
      }
    })
  })

  describe ('destroy', () => {
    it('should return the deleted goat', async () => {
      const goat = new Goat({})
      jest.spyOn(db, 'query')
        .mockResolvedValueOnce({ rows: [{ id: 72, name: 'plum', age: 72 }] })

      const result = await goat.destroy()

      expect(result).toBeInstanceOf(Goat)
      expect(result.id).toBe(72)
      expect(result).not.toEqual(goat)
    })

    it('should throw an error if we cannot locate the goat', async () => {
      jest.spyOn(db, 'query')
        .mockRejectedValue()
 
      try {
        const goat = new Goat({name: 'plum', age: 99 })
        await goat.destroy()
      } catch (error) {
        expect(error).toBeTruthy()
        expect(error.message).toContain('Cannot delete')
      }
    })
  })
})

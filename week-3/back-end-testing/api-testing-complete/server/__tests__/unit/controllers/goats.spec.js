const goatsController = require('../../../controllers/goats')
const Goat = require('../../../models/Goat')

const mockSend = jest.fn()
const mockJson = jest.fn()
const mockEnd = jest.fn()
// we are mocking .send(), .json() and .end()
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: mockEnd }))
const mockRes = { status: mockStatus }


describe('goats controller', () => {
  beforeEach(() => jest.clearAllMocks())

  afterAll(() => jest.resetAllMocks())


  describe('index', () => {
    it('should return goats with a status code 200', async () => {
      const testGoats = ['g1', 'g2']
      jest.spyOn(Goat, 'getAll')
        .mockResolvedValue(testGoats)

      await goatsController.index(null, mockRes)
      
      expect(Goat.getAll).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(200)
      expect(mockSend).toHaveBeenCalledWith({ data: testGoats })
    })

    it('sends an error upon fail', async () => {
      jest.spyOn(Goat, 'getAll')
        .mockRejectedValue(new Error('Something happened to your db'))

      await goatsController.index(null, mockRes)
      
      expect(Goat.getAll).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(500)
      expect(mockSend).toHaveBeenCalledWith({ error: 'Something happened to your db' })
    })
  })

  describe ('show', () => {
    let testGoat, mockReq
    beforeEach(() => {
      testGoat = { id: 1, name: 'Test goat', age: 22 }
      mockReq = { params: { id: 1 } }
    })

    it('return a goat with a 200 status code', async () => {
      jest.spyOn(Goat, 'findById')
        .mockResolvedValue(new Goat(testGoat))

      await goatsController.show(mockReq, mockRes)
      
      expect(Goat.findById).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(200)
      expect(mockSend).toHaveBeenCalledWith({ data: new Goat(testGoat) })
    })

    it('sends an error upon fail', async () => {
      jest.spyOn(Goat, 'findById')
        .mockRejectedValue(new Error('oh no'))

      await goatsController.show(mockReq, mockRes)
      
      expect(Goat.findById).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(404)
      expect(mockSend).toHaveBeenCalledWith({ error: 'oh no' })
    })
  })

  describe ('create', () => {
    it('it returns a new goat with a 201 status code', async () => {
      let testGoat = { name: 'Test Goat', age: 2 }
      const mockReq = { body: testGoat }

      jest.spyOn(Goat, 'create')
        .mockResolvedValue(new Goat(testGoat))

      await goatsController.create(mockReq, mockRes)
      
      expect(Goat.create).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(201)
      expect(mockSend).toHaveBeenCalledWith({ data: new Goat({ ...testGoat }) })
    })


    it('it returns an error', async () => {
      let testGoat = { name: 'Test Goat' }
      const mockReq = { body: testGoat }

      jest.spyOn(Goat, 'create')
        .mockRejectedValue(new Error('oh no'))

      await goatsController.create(mockReq, mockRes)
      
      expect(Goat.create).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(400)
      expect(mockSend).toHaveBeenCalledWith({ error: 'oh no' })
    })
  })

  describe ('update', () => {
    it('modifies a row in the database', async () => {
      const testGoat = { id: 22, name: 'Test goat', age: 22 }
      jest.spyOn(Goat, 'findById')
        .mockResolvedValue(new Goat(testGoat))

      const mockReq = { params: { id: 22 }, body: { name: 'plum', age: 22 } }

      jest.spyOn(Goat.prototype, 'update')
        .mockResolvedValue({ ...new Goat(testGoat), name: 'plum', age: 22 })

      await goatsController.update(mockReq, mockRes)


      expect(Goat.findById).toHaveBeenCalledTimes(1)
      expect(Goat.prototype.update).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(200)
      expect(mockSend).toHaveBeenCalledWith({ data: new Goat({ id: 22, name: 'plum', age: 22 }) })
    })

    it('calls goat.update()', async () => {
      const mockReq = { params: { id: 49 } }

      jest.spyOn(Goat, 'findById')
        .mockRejectedValue(new Error('goat not found'))

      await goatsController.update(mockReq, mockRes)

      expect(Goat.findById).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(400)
      expect(mockSend).toHaveBeenCalledWith({ error: 'goat not found' })
    })
  })

  describe ('destroy', () => {
    it('returns a 204 status code on successful deletion', async () => {
      const testGoat = { id: 1, name: 'Test goat', age: 22 }
      jest.spyOn(Goat, 'findById')
        .mockResolvedValue(new Goat(testGoat))

      jest.spyOn(Goat.prototype, 'destroy')
        .mockResolvedValue(new Goat(testGoat))

      const mockReq = { params: { id: 1 } }
      
      await goatsController.destroy(mockReq, mockRes)

      expect(Goat.findById).toHaveBeenCalledTimes(1)
      expect(Goat.prototype.destroy).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(204)
      expect(mockEnd).toHaveBeenCalledWith()
    })

    it('calls goat.destroy()', async () => {
      const mockReq = { params: { id: 49 } }

      jest.spyOn(Goat, 'findById')
        .mockRejectedValue(new Error('goat not found'))

      await goatsController.destroy(mockReq, mockRes)

      expect(Goat.findById).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(404)
      expect(mockSend).toHaveBeenCalledWith({ error: 'goat not found' })
    })
  })
})

// __tests__/unit
const Country = require('../../../models/Country');
const db = require('../../../database/connect');

describe('Country', () => {
  beforeEach(() => jest.clearAllMocks())

  afterAll(() => jest.resetAllMocks())

  describe('getAll', () => {
    it('resolves with countries on successful', async () => {
      jest.spyOn(db, 'query')
        .mockResolvedValueOnce({
          rows: [{ name: 'c1'}, { name: 'c2'}, { name: 'c3'}]
        })

      const countries = await Country.getAll()
      expect(countries).toHaveLength(3)
      expect(countries[0]).toHaveProperty('country_id')
    })

    it('should throw an Error on db query error', async () => {

      jest.spyOn(db, 'query')
        .mockResolvedValueOnce({ rows: [] })

      try {
        await Country.getAll()
      } catch (err) {
        expect(err).toBeDefined()
        expect(err.message).toBe("No countries available.")
      }
    })
  })

   describe('getOneByCountryName', () => {
    it('resolves with country on successful', async () => {
      jest.spyOn(db, 'query')
        .mockResolvedValueOnce({
          rows: [{ name: 'Mexico', country_id: 2}]
      })
    
      const country = await Country.getOneByCountryName()
      console.log("banana", country)
      expect(typeof country).toBe('object')
      expect(country.name).toBe('Mexico')
    })
     
    it('should throw an Error on db query error', async () => {

      jest.spyOn(db, 'query')
        .mockResolvedValueOnce({ rows: [] })

      try {
        await Country.getOneByCountryName()
      } catch (err) {
        expect(err).toBeDefined()
        expect(err.message).toBe("Unable to locate country.")
      }
    })
   })
  
  // describe('create', () => {
  //   it('resolves with successful creation', async () => {
  //     const country = await Country.create({ name: 'Mexico',  capital: 'Mexico City',  population: 12,  languages: 'Mexico'})
  //     console.log(country)
  //     expect(country instanceof Country).toBe(true)
  //     expect(country.name).toBe('Mexico')
  //   })

  //   it('resolves with successful creation', async () => {
  //     try {
  //       await Country.create()
  //     } catch (err) {
  //       expect(err).toBeDefined()
  //     }
  //   })
  // })
})

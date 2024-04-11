const countryControllers = require('../../../controllers/countries')
const Country = require('../../../models/Country');

const mockSend = jest.fn()

const mockJson = jest.fn()

const mockEnd = jest.fn()
// we are mocking .send(), .json() and .end()

const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: mockEnd }))

const mockRes = { status: mockStatus }
const mockReq = { params: { "name": ""}}

describe('countries controller', () => {
  // Clear all mock usage data
  beforeEach(() => jest.clearAllMocks())

  //A superset of clearAllMocks() and it also reset the mock function implementations with brand new jest.fn().
  afterAll(() => jest.resetAllMocks())

  describe('index', () => {
    it('should return countries with a status code 200', async () => {

      const testCountries = ["France", "Mexico"]

      jest.spyOn(Country, 'getAll')
        .mockResolvedValue(testCountries)

      await countryControllers.index(null, mockRes)

      expect(Country.getAll).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(200)
      expect(mockJson).toHaveBeenCalledWith(["France", "Mexico"])
    })


    it('sends an error upon fail', async () => {
      jest.spyOn(Country, 'getAll')
        .mockRejectedValue(new Error('Something happened to your db'))

      await countryControllers.index(null, mockRes)

      expect(Country.getAll).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(500)
      expect(mockJson).toHaveBeenCalledWith({error: 'Something happened to your db'})
    })
  })


  describe('show', () => {
    it('should return country with a status code 200', async () => {

      const testCountries = { name: 'Mexico'}

      jest.spyOn(Country, 'getOneByCountryName')
        .mockResolvedValue(testCountries)

      await countryControllers.show(mockReq, mockRes)

      expect(Country.getOneByCountryName).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(200)
      expect(mockJson).toHaveBeenCalledWith({ name: 'Mexico'})
    })

    it('sends an error upon fail', async () => {
      jest.spyOn(Country, 'getOneByCountryName')
        .mockRejectedValue(new Error('Something happened to your db'))

      await countryControllers.show(mockReq, mockRes)

      expect(Country.getOneByCountryName).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(404)
      expect(mockJson).toHaveBeenCalledWith({error: 'Something happened to your db'})
    })
  })

  describe('create', () => {
    it('should return country with a status code 200', async () => {

      const testCountries = { name: 'France'}

      jest.spyOn(Country, 'create')
        .mockResolvedValue(testCountries)

      await countryControllers.create(mockReq, mockRes)

      expect(Country.create).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(201)
      expect(mockJson).toHaveBeenCalledWith({ name: 'France'})
    })

    it('sends an error upon fail', async () => {
      jest.spyOn(Country, 'create')
        .mockRejectedValue(new Error('Something happened to your db'))

      await countryControllers.create(mockReq, mockRes)

      expect(Country.create).toHaveBeenCalledTimes(1)
      expect(mockStatus).toHaveBeenCalledWith(400)
      expect(mockJson).toHaveBeenCalledWith({error: 'Something happened to your db'})
    })
  })
})

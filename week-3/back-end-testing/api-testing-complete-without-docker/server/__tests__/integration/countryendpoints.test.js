const request = require('supertest')
const app = require('../../app')
const { resetTestDB } = require('./config')

describe('api server', () => {
  let api;

  beforeEach(async () => {
    await resetTestDB()
  })

  beforeAll(() => {
    api = app.listen(5000, () => {
      console.log('🌕Test server running in port 5000')
    })
  })

  afterAll((done) => {
    // console.log('Gracefully stopping the test server')
    api.close(done)
  })

  test('responds to GET /countries with status 200', (done) => {
    request(api)
      .get('/countries')
      .expect(200, done)
  })
    
  
  test('responds to GET /countries/:name with status 200', (done) => {
    request(api)
      .get('/countries/Brazil')
      .expect(200, done)
  })
    
  test('responds to a unknown country with a 404', (done) => {
    request(api)
      .get('/countries/France')
      .expect(404)
      .expect({error: 'Unable to locate country.'}, done)
  })
    
  test('responds to POST /countries with status 201', (done) => {
    const testData = {
      name: "France",
      capital: "Paris",
      population: 34,
      languages: "French"
    }

    request(api)
      .post('/countries')
      .send(testData)
      .set('Accept', 'application/json')
      .expect(201)
      .expect({ ...testData, country_id: 4, fun_fact: null, map_image_url: null }, done)
  })

})
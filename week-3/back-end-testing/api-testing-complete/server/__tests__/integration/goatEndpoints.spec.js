const request = require('supertest')
const app = require('../../app')
const { resetTestDB } = require('./config')

describe('api server', () => {
  let api

  beforeEach(async () => {
    await resetTestDB()
  })

  beforeAll(() => {
    api = app.listen(4000, () => {
      console.log('Test server running on port 4000')
    })
  })

  afterAll((done) => {
    console.log('Gracefully closing server')
    api.close(done)
  })

  // As a user I can access the API
  it('responds to GET / with a 200 status code', (done) => {
    request(api).get('/').expect(200, done)
  })

  it('responds to GET / with a message and a description', async () => {
    const response = await request(api).get('/')

    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe('welcome')
    expect(response.body.description).toBe('GOAT API')
  })

  // As a user I can see all the goats
  it('responds to GET /goats with a 200 status code', (done) => {
    request(api).get('/goats').expect(200, done)
  })

  it('GET /goats display 3 elements in the web browser', async () => {
    const response = await request(api).get('/goats')
    expect(response.body.data.length).toBe(3)
  })

  // As a user I can see one goat
  it('responds to GET /goats/:id with a 200', (done) => {
    request(api).get('/goats/3').expect(200, done)
  })

  it('responds to a unknown goat id with a 404 status code', (done) => {
    request(api)
      .get('/goats/42')
      .expect(404)
      .expect({ error: 'This goat does not exist!' }, done)
  })

  // As a user I can add a goat to the database
  it('responds to POST /goats with a 201 status code', (done) => {
    const testData = {
      name: "Steph Curry",
      age: new Date().getFullYear() - 1988
    }

    request(api)
      .post('/goats')
      .send(testData)
      .set('Accept', 'application/json')
      .expect(201)
      .expect({ data: { ...testData, id: 4 } }, done)
  })
  
  // As as user I cannot post to /
  it('responds to invalid method request with 405', (done) => {
    request(api).post('/').expect(405, done)
  })

  // As a user I can update the details for one goat
  it('responds to PATCH /goats/1 with status 200', (done) => {
    const testData = {
      name: "Steph Curry",
      age: new Date().getFullYear() - 1988
    }

    request(api)
      .patch('/goats/1')
      .send(testData)
      .set('Accept', 'application/json')
      .expect(200)
      .expect({ data: { ...testData, id: 1 } }, done)
  })

  // As a user I can delete a goat
  it('responds to DELETE /goats/:id with status 204', (done) => {
    request(api).delete('/goats/1').expect(204, done)
  })

  it('responds to DELETE with a 404 status code if the goat does not exist', (done) => {
    request(api).delete('/goats/9').expect(404, done)
  })

  it('responds to DELETE /goats/:id with status 204', async () => {
    const responseBeforeDeletion = await request(api).get('/goats')
    expect(responseBeforeDeletion.body.data.length).toBe(3)

    await request(api).delete('/goats/1').expect(204)

    const responseAfterDeletion = await request(api).get('/goats')
    expect(responseAfterDeletion.body.data.length).toBe(2)
  })
})

const request = require('supertest')
const server = require('../../src/app')
const agent = request.agent(server)

describe('Products Get', () => {
  it('Should return an array of products', () => {
    agent.get('/products')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, response) {
        const { body, statusCode } = response
        expect(statusCode).toBe(200)
        expect(body).toBeInstanceOf(Array)
        expect(body.length).toBeGreaterThan(0)
        body.forEach(item => {
          expect(item).toHaveProperty('id')
          expect(item).toHaveProperty('title')
          expect(item).toHaveProperty('description')
          expect(item).toHaveProperty('price')
        })
      })
  })

  it('Should return a product', async () => {

    agent.get('/products/get')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, response) {
        const { body, statusCode } = response
        expect(statusCode).toBe(200)
        expect(body).toBeInstanceOf(Object)
        expect(body).toHaveProperty('id')
        expect(body).toHaveProperty('title')
        expect(body).toHaveProperty('description')
        expect(body).toHaveProperty('price')
      })
  })
});
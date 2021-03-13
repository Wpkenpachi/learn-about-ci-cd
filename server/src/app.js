const express = require('express');
const server = express();

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

const faker = require('faker')

const productMaxNumber = 10

server.get('/', (_req, res) => {
  // Root path
  res.send('Hello!')
})

server.get('/products', (_req, res) => {
  const count = (_req.query['count'] && _req.query['count'] <= productMaxNumber) || productMaxNumber
  const productEmptyArr = Array.from({ length: Math.floor(Math.random() * count) })
  const products = productEmptyArr.map(() => {
    return {
      id: faker.random.uuid(),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.random.number(10000)
    }
  })
  res.json(products)
})

server.get('/products/get', (_req, res) => {
  res.json({
    id: faker.random.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.random.number(10000)
  })
})


module.exports = server
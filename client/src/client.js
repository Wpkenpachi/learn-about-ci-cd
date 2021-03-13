const axios = require('axios')

const { PORT } = process.env

const client = axios.create({
  baseUrl: 'http://localhost',
  port: PORT || 3000
})

client.get('/products')
  .then(response => {
    const { data } = response
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })

client.get('/products/get')
  .then(response => {
    const { data } = response
    console.log(data)
  })
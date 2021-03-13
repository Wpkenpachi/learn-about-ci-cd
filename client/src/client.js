const axios = require('axios')

const { SERVER_PORT: PORT, SERVER_HOST: BASE_HOST } = process.env

const client = axios.create({
  baseURL: `http://${BASE_HOST}:${PORT}`
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
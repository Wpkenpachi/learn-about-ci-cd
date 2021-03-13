const server = require('./app')
const { SERVER_PORT, SERVER_HOST } = process.env
server.listen(process.env.PORT || SERVER_PORT,
  SERVER_HOST || '0.0.0.0',
  () => console.log(`Running server on ${SERVER_PORT}`)
)
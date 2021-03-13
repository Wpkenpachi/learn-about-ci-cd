const server = require('./app')
const { SERVER_PORT: PORT, SERVER_HOST: HOST } = process.env
server.listen(PORT || 3000, HOST || '0.0.0.0', () => console.log(`Running server on ${PORT}`))
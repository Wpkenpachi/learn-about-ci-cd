const server = require('./app')
const { SERVER_PORT: PORT } = process.env
server.listen(PORT || 3000, () => console.log(`Running server on ${PORT}`))
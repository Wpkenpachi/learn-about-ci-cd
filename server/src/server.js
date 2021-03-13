const server = require('./app')
const { PORT } = process.env
server.listen(PORT || 3000, () => console.log(`Running server on ${PORT}`))
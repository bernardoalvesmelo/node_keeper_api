const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('/api', router)

const porta = process.env.PORT | 3000;

server.listen(3000, () => {
  console.log(`A API do NoteKeeper está rodando na porta ${porta}`)
})
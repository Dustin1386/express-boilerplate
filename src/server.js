const app = require('./app')
const { PORT } = require('./config')

const db = knex({
  client: 'pg',
  connection: DATABASE_URL
})

app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
import express from 'express'
import miiboRoutes from './route/miibo.routes.js'
import indexRoutes from './route/index.routes.js'

const app = express()

app.use(express.json())

app.use('/api', miiboRoutes)
app.use(indexRoutes)

app.listen(3000)
console.log('Server on port 3000')
import express from 'express'
import miiboRoutes from './route/miibo.routes.js'
import indexRoutes from './route/index.routes.js'
import userRoutes from './route/user.routes.js'

const app = express()

app.use(express.json())

app.use('/shop', miiboRoutes)
app.use(indexRoutes)
app.use(userRoutes)

app.listen(3000)
console.log('Server on port 3000')
import { Router } from "express"
import { getProductos, createProductos, updateProductos, deleteProductos, getProductosById } from '../route/controllers/miibo.controllers.js'

const router = Router()

router.get('/login', getProductos)

router.get('/login/:id', getProductosById)

router.post('/login', createProductos)

router.put('/login', updateProductos)

router.delete('/login/:id', deleteProductos)


export default router
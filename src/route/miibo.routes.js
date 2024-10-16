import { Router } from "express"

const router = Router()

router.get('/login', (req, res) => res.send ('Entrando...'))

router.post('/login', (req, res) => res.send ('Iniciando...'))

router.put('/login', (req, res) => res.send ('Cambiando datos'))

router.delete('/login', (req, res) => res.send ('Cerrando sesion...'))


export default router
import { Router } from "express"
import { pool } from '../dbConnection.js'

const router = Router()

router.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" as Result')
    res.json(result[0])
})

export default router
import { Router } from 'express'
const router = Router()

router.get('/api/server', (req, res) => {
    res.json({test:'test'})
})

export default router
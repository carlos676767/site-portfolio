import api from "express";
const router = api.Router()

router.get(`/test`,(req, res) => {
    res.send({message: 'API is running'})
})
export default router
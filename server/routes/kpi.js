import express from "express";

const router = express.Router();

router.get("/kpis", async (req, res) => {
    try{
        const kpis = await KPI.find();
        

    } catch (error) {
        res.status(404).json({ message: error.mesage })
    }
})

export default router;
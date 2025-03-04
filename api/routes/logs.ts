import { PrismaClient } from "@prisma/client"
import { Router } from "express"

const prisma = new PrismaClient()
const router = Router()

router.get("/", async (req, res) => {
  try {
    const logs = await prisma.log.findMany()
    return res.status(200).json(logs)
  } catch (error) {
    return res.status(400).json(error)
  }
})

export default router

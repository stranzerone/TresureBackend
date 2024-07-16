import express from "express"
import { Balance, deleteOne, getAllTransactions, newTransaction } from "../controller/TransactionController.js"


export const routes = express.Router()

routes.get("/start",Balance)

routes.post("/addTransaction",newTransaction)

routes.get("/allTransactions",getAllTransactions)

routes.post("/deleteTransaction/:TransactionId",deleteOne)


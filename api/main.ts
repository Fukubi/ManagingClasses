import * as dotenv from 'dotenv'
dotenv.config()

import express from "express"
import router from "./src/routes"

const app = express()

app.use(express.json())
app.use('/classes', router);

app.listen(process.env.PORT, () => {
    console.log(`Listening in port ${process.env.PORT}`)
})
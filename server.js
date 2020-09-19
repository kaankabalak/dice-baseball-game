import "dotenv/config"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(cors())
app.use(express.static("public"))

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}!`)
})

import "dotenv/config"
import path from "path"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
const port = process.env.PORT || 9000

// Middleware
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "browser/build")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "browser/build", "index.html"))
})

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${port}!`)
})

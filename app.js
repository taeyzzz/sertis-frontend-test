const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const cardRouter = require("./router/card")
let data = require("./mockData")

const app = express()

const corsOptions = {
  origin: function(origin, callback) {
    callback(null, true)
  },
  credentials: true
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan("dev"))

const updateDataFn = (updatedData) => {
  data = updatedData
}

const connectDataToRequest = (req, res, next) => {
  req.data = data
  req.updateDataFn = updateDataFn
  next()
}

app.use(connectDataToRequest)
app.use("/cards", cardRouter)

app.use("/", (req, res) => {
  res.json({
    msg: "Server sertis front end test is running."
  })
})

module.exports = app

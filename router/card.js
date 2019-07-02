const express = require("express")
const uuidv4 = require('uuid/v4');

const router = express.Router()

router.get("/", (req, res) => {
  res.json({
    data: req.data
  })
})

router.get("/:id", (req, res) => {
  const id = req.params.id
  const requestObject = req.data.find(obj => obj.id == id)
  if(requestObject){
    res.json({
      data: requestObject
    })
  }
  else {
    res.status(403).json({
      message: "Not found ID"
    })
  }
})

router.post("/", (req, res) => {
  const newData = Object.assign({}, req.body, {
    id: uuidv4()
  })
  const updatedData = [...req.data, newData]
  req.updateDataFn(updatedData)
  res.json({
    data: newData
  })
})

router.patch("/:id", (req, res) => {
  const id = req.params.id
  const newData = req.body
  const isValidTargetObject = req.data.find(obj => obj.id == id)
  if(!isValidTargetObject){
    res.status(403).json({
      message: "Not found ID"
    })
  }
  let updatedTargetObject
  const updatedData = req.data.map(obj => {
    if(obj.id == id){
      updatedTargetObject = Object.assign({}, obj, newData)
      return updatedTargetObject
    }
    return obj
  })
  req.updateDataFn(updatedData)
  res.json({
    data: updatedTargetObject
  })
})

router.delete("/:id", (req, res) => {
  const id = req.params.id
  const updatedData = req.data.filter(obj => obj.id != id)
  req.updateDataFn(updatedData)
  res.sendStatus(204)
})

module.exports = router

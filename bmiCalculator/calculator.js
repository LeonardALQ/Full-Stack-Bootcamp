const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.listen(3000)
app.use(bodyParser.urlencoded({ extneded: true }))
app.get('/', getWebsite)
app.post('/', calculate)

function getWebsite(req, res) {
  res.sendFile(__dirname + '/index.html')
}

function calculate(req, res) {
  let BMI = Number(req.body.weight / Math.pow(req.body.height, 2))
  let bmi_range
  switch (true) {
    case BMI < 18.5:
      alert("HIT")
      bmi_range = 'Under Weight'
      break
    case BMI < 24.9:
      bmi_range = 'Normal Weight'
      break
    case BMI < 29.9:
      bmi_range = 'Over Weight'
      break
    case BMI < 39.9:
      bmi_range = 'Obese'
      break
    case BMI < 40:
      bmi_range = 'The Cut is Going to be INSANE'
      break
  }
  res.send(
    'Your BMI is: ' +
      BMI +
      '<br>You are considered to be: <em>' +
      bmi_range +
      '<em>'
  )
}

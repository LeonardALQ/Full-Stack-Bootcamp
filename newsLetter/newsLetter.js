const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const https = require('https')
const app = express()
app.listen(3000, function () {
  console.log('Server is running.')
})

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html')
})

app.post('/', (req, res) => {
  const email = req.body.inputEmail
  const firstName = req.body.firstName
  const lastName = req.body.lastName

  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  }

  var jsonData = JSON.stringify(data)

  const url = 'https://usX.api.mailchimp.com/3.0/lists/4507ed5493'
  const opts = {
    method: 'POST',
    auth: 'auth:b08b92c63b8ab78f16f5607c26831c8a-us18',
  }

  let httpsRequest = https.request(url, opts, (res) => {
    res.on('data', (data) => {
      console.log(JSON.parse(data))
    })
  })

  httpsRequest.write(jsonData)
  httpsRequest.end()
})

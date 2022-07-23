const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + "/views")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))


//Get days:
let days = new Array(7)
days[0] = 'Sunday'
days[1] = 'Monday'
days[2] = 'Tuesday'
days[3] = 'Wednesday'
days[4] = 'Thursday'
days[5] = 'Friday'
days[6] = 'Saturday'

let tasks = []
let workTasks = []
app.listen(3000, () => {})

app.get('/', (req, res) => {
  currentDay = new Date().getDay()
  res.render('index', {listTitle: days[currentDay], task: tasks})
})

app.get('/work', (req, res) => {
  res.render('index', {listTitle: "Work List", task: workTasks})
})

app.post('/', (req, res) => {
  let newTask = req.body.task

  if (req.body.list === "Work") {
    workTasks.push(newTask)
    res.redirect('/work')
  } else { 
    tasks.push(newTask)
    res.redirect('/')
  }
})

const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  // console.log(req.body)
  const options = req.body
  const password = generatePassword(options)
  // console.log(`random password is:${generatePassword(options)}`)
  res.render('index', { password, options })
})
app.listen(port, () => {
  console.log('OK')
})
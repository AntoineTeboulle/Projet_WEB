const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

app.get('/',(request, response) => {
  response.sendFile(__dirname + '/public/Menu.html');
})

app.get('/Contact',(request, response) => {
  response.sendFile(__dirname + '/public/Contact.html');
})

app.get('/Questionnary',(request, response) => {
  response.sendFile(__dirname + '/public/Questionnary.html');
})

app.get('/Login',(request, response) => {
  response.sendFile(__dirname + '/public/Login.html');
})

app.get('/Register',(request, response) => {
  response.sendFile(__dirname + '/public/Register.html');
})

app.get('/Credits',(request, response) => {
  response.sendFile(__dirname + '/public/Credits.html');
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
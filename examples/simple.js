var http = require('http')
var router = require('../router')

// Create a http server and load the router
var data = {
  people: [{
    name: 'Nicola',
    surname: 'Greco'
  }, {
    name: 'Virginia',
    surname: 'Alonso Navarro'
  }, {
    name: 'Adam',
    surname: 'Yala'
  }]
}

var server = http.createServer(router(data))

// Lets start our server
var PORT = process.env.PORT || 8080
server.listen(PORT, function () {
  console.log('Server listening on: http://localhost:%s', PORT)
})

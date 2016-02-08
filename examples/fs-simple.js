var http = require('http')
var FsContainer = require('../fs')
var jsonpointerRouter = require('jsonpointer-http')

var store = FsContainer()
var router = jsonpointerRouter(store)
var server = http.createServer(router)

// Lets start our server
var PORT = process.env.PORT || 8080
server.listen(PORT, function () {
  console.log('Server listening on: http://localhost:%s', PORT)
})

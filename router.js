module.exports = router

var DataContainer = require('./')
var jsonpointerRouter = require('jsonpointer-http')

function router (data, opts) {
  var store = DataContainer(data, opts)
  return jsonpointerRouter(store)
}

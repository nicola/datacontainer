module.exports = DataContainer

var jsonpointer = require('jsonpointer')
var traverse = require('json-to-ldp').traverse

function DataContainer (data, opts) {
  if (!(this instanceof DataContainer)) return new DataContainer(data, opts)
  opts = opts || {}
  this.data = data || {}
  this.depth = opts.depth
}

DataContainer.prototype.get = function (url, cb) {
  var content = traverse(this.data, url, this.depth)
  cb(null, content)
}

DataContainer.prototype.set = function (url, content, cb) {
  cb(null, jsonpointer.set(this.data, url, content))
}

DataContainer.prototype.delete = function (url, cb) {
  cb(new Error('Delete is not implemented'))
}

module.exports = FsDataContainer

var fs = require('fs')

function FsDataContainer (data, opts) {
  if (!(this instanceof FsDataContainer)) return new FsDataContainer(data, opts)
  opts = opts || {}
  this.data = data || {}
  this.depth = opts.depth
}

FsDataContainer.prototype.get = function (url, cb) {
  var address = process.cwd() + url
  var contents = {}
  fs.stat(address, function (err, stat) {
    if (err) return cb(err)
    contents.mtime = stat.mtime
    if (stat.isDirectory()) {
      fs.readdir(address, function (err, contains) {
        if (err) return cb(err)
        contents.contains = contains
        cb(null, contents)
        return
      })
      return
    }
    cb(err, contents)
    return
  })
}

FsDataContainer.prototype.set = function (url, content, cb) {
  cb(new Error('Set is not implemented'))
}

FsDataContainer.prototype.delete = function (url, cb) {
  cb(new Error('Delete is not implemented'))
}

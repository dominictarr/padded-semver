
var semver = require('semver')
var zeros = '0000'

function pad (val) {
  var num = Number(val)
  if(!isNaN(num) && num >= 0)
    return zeros.substring(num.toString().length) + num.toString().substring(0, 5)
  return val
}

function unpad (val) {
  while(val[0] === '0' && val.length > 1)
    val = val.substring(1)
  return val
}

exports.pad = function (ver) {
  var ver = semver.parse(ver)
  ver[3] = ver[3] ? ver[3].replace(/-/g, '') : 0
  ver = ver.map(pad)
  ver[4] = (ver[4] ? '_' + (ver[4] || '') : '~')
  return ver.slice(0, 5).join('!') 
}

exports.unpad = function (ver) {  
  var parts = ver.split('!')
  var build = Number(unpad(parts[3]))
  var ver =
    parts.slice(0, 3).map(unpad).join('.')
    + ( build ? '-' + build : '' )
    + (parts[4] != '~' ? '' + parts[4].slice(1) : '')

  return ver
}

exports.range = function (r) {
  var range = semver.toComparators(r).shift()
  var obj = {}


  var first = range.shift()
  if('>=' == first.substring(0, 2))
    obj.start = exports.pad(
      first.substring(2), first = range.shift()
    )

  if(first && '<' == first.substring(1))
    obj.end = exports.pad(
      first.substring(2)
    )

  return obj
}

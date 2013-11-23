
var semver = require('semver')
var zeros = '0000'

function fixbuild (ver) {
  ver = ver.replace(/^v/, '')
  var m = /(?:\.[0-9]+|)([^0-9x]+)$/.exec(ver)
  if(!m || !m[1]) return ver
  ver = ver.replace(/[^0-9]+$/, '-' + m[1].replace(/^\+$/, 'plus'))
  return ver
}

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

exports.pad = function (_ver) {
  var ver = semver.parse(fixbuild(_ver), true)
  if(/^[0-9]+/.test(ver.prerelease[0]) && 'string' === typeof ver.prerelease[0]) {
    ver.prerelease = ver.prerelease[0].split(/-+/).map(function (e) {
      return !isNaN(e) ? parseInt(e) : e 
    })
  }

  if('number' == typeof ver.prerelease[0])
    ver.build.push(ver.prerelease.shift())

  var pre = String(ver.prerelease[0] || '').replace(/^-+/,'')
  return [
    pad(ver.major),
    pad(ver.minor),
    pad(ver.patch),
    pad(ver.build),
    pre ? '_' + pre : '~'
  ].join('!')
  return ver.slice(0, 5).join('!')
  ver[3] = ver[3] ? ver[3].replace(/-/g, '') : 0
  ver = ver.map(pad)
  ver[4] = (ver[4] ? '_' + (ver[4] || '') : '_')
  return ver.slice(0, 5).join('!')
}

exports.unpad = function (ver) {
  var parts = ver.split('!')
  var build = Number(unpad(parts[3]))
  ver =
    parts.slice(0, 3).map(unpad).join('.')
    + ( build ? '-' + build : '' )
    + (parts[4] != '~' ? '' + parts[4].slice(1) : '')

  return ver
}

function fixrange (r) {
  var m = /(?:[0-9])([A-Za-z]+\b)/.exec(r)
  if(!m) return r
  r = r.replace(/[A-Za-z]+\b/, '-'+m[1]).replace(/-+/, '-')
  return r
}

exports.range = function (r) {

 var range = semver.toComparators(fixrange(r), true).shift()

  var obj = {}

  var first = range.shift()
  if('>=' == first.substring(0, 2)) {
    obj.start = exports.pad(
      first.substring(2)
    ).replace(/~$/, '')
    first = range.shift()
  }
  else if('>' == first[0]) {
    obj.start = exports.pad(
      first.substring(1)
    ).replace(/~$/, '')
    first = range.shift()
  }
  else if (/^\d/.test(first)) { //exact!
    return {
      start: exports.pad(first), end: exports.pad(first)
    }

  }

  if(first && '<=' == first.substring(0, 2))
    obj.end = exports.pad(
      first.substring(2)
    )
  else if(first && '<' == first[0]) {
    obj.end = exports.pad(
      first.substring(1
    )).replace(/~$/, '')
  }
  return obj
}

var test = require("tape")
  , semver = require("../")

test("\nnegative range tests", function (t) {
// [range, version]
// version should not be included by range
; [ ["1.0.0 - 2.0.0", "2.2.3"]
  , ["1.0.0", "1.0.1"]
  , [">=1.0.0", "0.0.0"]
  , [">=1.0.0", "0.0.1"]
  , [">=1.0.0", "0.1.0"]
  , [">1.0.0", "0.0.1"]
  , [">1.0.0", "0.1.0"]
  , ["<=2.0.0", "3.0.0"]
  , ["<=2.0.0", "2.9999.9999"]
  , ["<=2.0.0", "2.2.9"]
  , ["<2.0.0", "2.9999.9999"]
  , ["<2.0.0", "2.2.9"]
  , [">=0.1.97", "v0.1.93"]
  , [">=0.1.97", "0.1.93"]
//  , ["0.1.20 || 1.2.4", "1.2.3"]
 // , [">=0.2.3 || <0.0.1", "0.0.3"]
 // , [">=0.2.3 || <0.0.1", "0.2.2"]
  , ["2.x.x", "1.1.3"]
  , ["2.x.x", "3.1.3"]
  , ["1.2.x", "1.3.3"]
 // , ["1.2.x || 2.x", "3.1.3"]
 // , ["1.2.x || 2.x", "1.1.3"]
  , ["2.*.*", "1.1.3"]
  , ["2.*.*", "3.1.3"]
  , ["1.2.*", "1.3.3"]
  //, ["1.2.* || 2.*", "3.1.3"]
  //, ["1.2.* || 2.*", "1.1.3"]
  , ["2", "1.1.2"]
  , ["2.3", "2.4.1"]
  , ["~2.4", "2.5.0"] // >=2.4.0 <2.5.0
  , ["~2.4", "2.3.9"]
  , ["~>3.2.1", "3.3.2"] // >=3.2.1 <3.3.0
  , ["~>3.2.1", "3.2.0"] // >=3.2.1 <3.3.0
  , ["~1", "0.2.3"] // >=1.0.0 <2.0.0
  , ["~>1", "2.2.3"]
  , ["~1.0", "1.1.0"] // >=1.0.0 <1.1.0
  , ["<1", "1.0.0"]
  , [">=1.2", "1.1.1"]
  , ["1", "2.0.0beta"]
  , ["~v0.5.4-beta", "0.5.4-alpha"]
  , ["<1", "1.0.0beta"]
  , ["< 1", "1.0.0beta"]
  , ["=0.7.x", "0.8.2"]
  , [">=0.7.x", "0.6.2"]
  , ["<=0.7.x", "0.7.2"]
  ].forEach(function (v) {

    var v1 = semver.pad(v[1])
    var range = semver.range(v[0].slice())

    console.log(range, v[0], v1)

    t.ok(
      !( 
        (!range.start || range.start <= v1)
      && 
        (!range.end || range.end >= v1)
      )
      , v1 + ' comes after ' + range.start)

//    t.ok(!satisfies(v[1], v[0]), v[0]+" not satisfied by "+v[1])
  })
  t.end()
})
//*/


var test = require("tape")
  , semver = require("../")

test("\ncomparison tests", function (t) {
// [version1, version2]
// version1 should be greater than version2
; [ ["0.0.0", "0.0.0foo"]
  , ["0.0.1", "0.0.0"]
  , ["1.0.0", "0.9.9"]
  , ["0.10.0", "0.9.0"]
  , ["0.99.0", "0.10.0"]
  , ["2.0.0", "1.2.3"]
  , ["v0.0.0", "0.0.0foo"]
  , ["v0.0.1", "0.0.0"]
  , ["v1.0.0", "0.9.9"]
  , ["v0.10.0", "0.9.0"]
  , ["v0.99.0", "0.10.0"]
  , ["v2.0.0", "1.2.3"]
  , ["0.0.0", "v0.0.0foo"]
  , ["0.0.1", "v0.0.0"]
  , ["1.0.0", "v0.9.9"]
  , ["0.10.0", "v0.9.0"]
  , ["0.99.0", "v0.10.0"]
  , ["2.0.0", "v1.2.3"]
  , ["1.2.3", "1.2.3-asdf"]
  , ["1.2.3-4", "1.2.3"]
  , ["1.2.3-4-foo", "1.2.3"]
  , ["1.2.3-5", "1.2.3-5-foo"]
  , ["1.2.3-5", "1.2.3-4"]
  , ["1.2.3-5-foo", "1.2.3-5-Foo"]
  , ["3.0.0", "2.7.2+"]
  ].forEach(function (v) {
    var v0 = semver.pad(v[0])
      , v1 = semver.pad(v[1])

    t.ok(v0 > v1, v0 + ' must be > than ' + v1)
    console.log(semver.unpad(v0))

    v0 = semver.pad(semver.unpad(v0))
    v1 = semver.pad(semver.unpad(v1))

    t.ok(v0 > v1, v0 + ' must be > than ' + v1)

  })
  t.end()
})


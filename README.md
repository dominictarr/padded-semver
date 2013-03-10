# padded-semver

Convert semver to strings that sort lexiographically,
in the same order as isaacs/semver compares versions.

## Stability

Experimental: Expect the unexpected. Please provide feedback on api and your use-case.

## Example

converts a regular semver version into a string that sorts the same.

``` js
var p = require('padded-semver')

p.pad('1.2.4-5-build')

=> '0001!0002!0003!0004!_build'
```

## TODO

* range - generate a range `{start:s, end:e}` pair
  that can be used to retrive all semvers that fit a range.


## License

MIT

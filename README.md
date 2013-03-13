# padded-semver

Convert semver to strings that sort lexiographically,
in the same order as isaacs/semver compares versions.

> note, if you want to use ALL the 'node-semver' features,
> this module has missing features, and bugs.
> but if you use 1.3.4, ~0.1.3 or 2.3.x ranges like a reasonable
> person it will be fine.

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

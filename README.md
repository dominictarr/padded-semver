# padded-semver

Convert semver to strings that sort lexiographically,
in the same order as isaacs/semver compares versions.

> note, if you want to use ALL the 'node-semver' features,
> this module has missing features, and bugs.
> but if you use 1.3.4, ~0.1.3 or 2.3.x ranges like a reasonable
> person it will be fine.

## Stability

Unstable: Expect patches and features, possible api changes.

## Example

converts a regular semver version into a string that sorts the same.

``` js
var p = require('padded-semver')

p.pad('1.2.4-5-build')

=> '0001!0002!0003!0004!_build'
```

## SemVer@2

This now supports semver2, including the ^ "compatible" range.
the compatible range is pretty silly.
I wish it was what everyone thought ~ did.
Instead it's another silly thing.

SemVer is too complicated.

## License

MIT

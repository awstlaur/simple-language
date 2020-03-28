# Simple Language
Simple [S-expression](https://en.wikipedia.org/wiki/S-expression) based language.
Currently only supports arithmetic.

## Setup
Instructions given with [Yarn](https://yarnpkg.com/), but their `npm` equivalents
should work fine

`git clone` this repo

`yarn install && yarn run build`

Then, to run the REPL, `yarn run repl`

## Semantics
Only integers are supported. The arithmetic of `+`, `-`, and `*` directly match
their JavaScript equivalents, while `/` returns the quotient via `Math.floor`.

## Examples
```
> 5
5

> (+ 3 4)
7

> (/ 9 2)
4

> (* (- 6 4) (+ 10 2))
24
```

## Development
Use `yarn run precommit` before committing changes. It will run the lint, build,
and unit tests

## Credit
Thanks to [s-expression](https://www.npmjs.com/package/s-expression) for the
framework for the parser.

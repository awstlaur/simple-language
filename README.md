# Simple Language
Simple [S-expression](https://en.wikipedia.org/wiki/S-expression) based language.
Currently only supports arithmetic.

## Setup
`git clone` this repo

`npm install && npm run build`

Then, to run the REPL, `npm run repl`. Enter expressions, then type `.exit`
to quit

## Semantics
Only integers are supported. The arithmetic of `+`, `-`, and `*` directly match
their JavaScript equivalents, while `/` returns the quotient via `Math.floor`.

## Examples
```
$ npm run repl

> @ repl C:\Users\stlau\repos\simple-language
> node ./dist/repl.js

> 5
5
> (+ 3 4)
7
> (/ 9 -2)
-5
> (* (- 6 4) (+ 10 2))
24
> (+ 4.5 0)
Error: 4.5 is not an integer
    at parseSExpr (C:\Users\stlau\repos\simple-language\dist\repl.js:59:19)
    ...
> .exit

```

## Development
- `npm run build` will compile the project
- `npm run lint` and `npm run lintfix` run `eslint` without and with the `--fix`
flag respectively
- `npm run test` will run the unit tests
- `npm run precommit` will run the aforementioned `build`, `lint` and `test` scripts

## Credit
Thanks to [s-expression](https://www.npmjs.com/package/s-expression) for the
framework for the parser.

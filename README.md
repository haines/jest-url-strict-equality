# Different URLs match with `toStrictEqual`

This repo reproduces a bug in Jest, where totally different URL objects are treated as the same in the `toStrictEqual` matcher.

If you run the tests, you should see a (spurious) failure.

```console
$ npm install
$ npm test
```

# Booler: Convert any values to Boolean.

Convert string/values to Boolean in JavaScript.

## Installing

```shell
$ npm i boolerjs --save
```

## Example

```js
const assert = require('assert');
const booler = require('boolerjs')

it('booler will be pass it to equal true', () => {
    assert.equal(true, booler(true));
})

it('booler will be pass it to equal True', () => {
    assert.equal(true, booler('True'));
})

it(`booler will be pass it to equal 'true'`, () => {
    assert.equal(true, booler('true'));
})

it(`booler will be pass it to equal 't'`, () => {
    assert.equal(true, booler('t'));
})

it(`booler will be pass it to equal '1'`, () => {
    assert.equal(true, booler('1'));
})

it('booler will be pass it to equal 1', () => {
    assert.equal(true, booler(1));
})

it('booler will be pass it to equal false', () => {
    assert.equal(false, booler(false));
})

it(`booler will be pass it to equal 'false'`, () => {
    assert.equal(false, booler('false'));
})

it(`booler will be pass it to equal 'f'`, () => {
    assert.equal(false, booler('f'));
})

it(`booler will be pass it to equal '0'`, () => {
    assert.equal(false, booler(0));
})

it('booler will be pass it to equal 0', () => {
    assert.equal(false, booler(0));
})

```

## Run Test

```shell
$ npm run test
```

## Contribution

if you any ideas or concepts, please kindly provide and support with us.

### Author

Name: <b>Sambo Chea</b> <br/>
Email: sombochea@cubetiqs.com

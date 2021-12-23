'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function whisper(chaine) {
    return '* '+ chaine.toLowerCase(0, chaine.length) + ' *';

}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper('aAA'), '* aaa *')
assert.strictEqual(whisper('baBabAbabaBababababA'), '* babababababababababa *')
assert.strictEqual(whisper('PouEt'), '* pouet *')
// End of tests */

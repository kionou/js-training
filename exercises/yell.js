'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
function yell(chaine) {
    return chaine.toUpperCase(0,chaine.length);
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof yell, "function")
assert.strictEqual(yell('bonjour'), 'BONJOUR')
assert.strictEqual(yell('comment vas tu'), 'COMMENT VAS TU')
assert.strictEqual(yell('STr'), 'STR')
assert.strictEqual(yell('zap zap'), 'ZAP ZAP')

// End of tests */

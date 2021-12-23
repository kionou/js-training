'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
// Your code :
function cutFirst(string){
    var first =string.substring(2,string.length);
    return first;
}

function cutLast(string){
    var cut = string.substring(0, string.length-2);
    return cut ;
}
function cutFirstLast(string){
    let m= cutFirst(string)
    let b= cutLast(m)
    return b ;
}




//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual( cutFirst.length, 1)
assert.strictEqual( cutLast.length, 1)
assert.strictEqual( cutFirstLast.length, 1)
assert.strictEqual( cutFirst('Salutmoi') , 'lutmoi')
assert.strictEqual( cutLast ('Salutmoi') , 'Salutm')
assert.strictEqual( cutFirstLast('Salutmoi') , 'lutm')

// End of tests */

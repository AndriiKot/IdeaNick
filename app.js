console.log('go Node.js')
let a;
a = '10';
console.log(a + 10) // '1010'

let test = 'var test'

// function test() {
// console.log('function test');
// }
// SyntaxError

function test_() {
  console.log('function test');
}

test_();  // 'function test'
console.log(test_());  // 'function test'; undefined
console.log(test_);    // [Finction: test_]
console.log(typeof(test_)) // function


# Node.js-lesson1
Node.js Lesson 1

```node
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

test_();                    // 'function test'
console.log(test_());       // 'function test'; undefined
console.log(test_);         // [Finction: test_]
console.log(typeof(test_) ) // function

function b(){
 console.log("Hello, Node.js")
}

const c = () => {
 console.log('Hi, Node.js')
}

b();c();                      // 'Hello, Node.js'; 'Hi, Node.js'

const myArray = [1,2,3,4]
console.log(myArray[3])      // 4
```











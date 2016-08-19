var Stack = require('../data-structure/Stack');

var stack = new Stack();

stack.push(10);
stack.push("blue");
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.toString());
console.log(stack.length());

console.log('delete: '+stack.pop());

console.log(stack.peek());
console.log(stack.toString());
stack.clear();
console.log(stack.peek());
console.log(stack.toString());


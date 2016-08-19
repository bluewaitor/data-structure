var List = require('../data-structure/List');

var list = new List();
list.append(10);
list.append(20);
list.append(30);
list.append(35);
list.append(130);
list.append(330);
list.append(120);

console.log(list.getElement());

list.moveTo(4);

console.log(list.getElement());

list.next();

console.log(list.getElement());

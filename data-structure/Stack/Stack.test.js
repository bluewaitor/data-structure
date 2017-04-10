var Stack = require('./Stack');

test('test stack', function(){
    var stack = new Stack();

    stack.push(10);
    expect(stack.size()).toBe(1);
    stack.push("blue");
    stack.push(20);
    stack.push(30);
    expect(stack.peak()).toBe(30);
    expect(stack.toString()).toEqual("10,blue,20,30");
    expect(stack.size()).toEqual(4);

    expect(stack.pop()).toBe(30);
    expect(stack.peak()).toBe(20);
    expect(stack.toString()).toEqual("10,blue,20");

    stack.clear();
    expect(stack.peak()).toBe(undefined);
    expect(stack.toString()).toEqual("");
})



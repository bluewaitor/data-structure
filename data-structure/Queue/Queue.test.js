var Queue = require('./Queue');

test('queue test', function(){
    var queue = new Queue();

    expect(queue.front()).toBe(undefined);
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.toString()).toBe('');

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front()).toBe(1);
    expect(queue.size()).toBe(3);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.toString()).toBe('1,2,3');

    expect(queue.dequeue()).toBe(1);

    expect(queue.front()).toBe(2);
    expect(queue.size()).toBe(2);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.toString()).toBe('2,3');

    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);

    expect(queue.front()).toBe(undefined);
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.toString()).toBe('');

})
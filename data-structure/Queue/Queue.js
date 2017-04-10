function Queue(){

    // 存储队列数据
    var elements = [];

    // 入队
    this.enqueue = function(element) {
        elements.push(element);
    }

    // 出队
    this.dequeue = function() {
        return elements.shift();
    }

    // 获取队列的第一个元素
    this.front = function() {
        return elements[0];
    }

    // 队列是否为空
    this.isEmpty = function() {
        return elements.length === 0;
    }

    // 队列长度
    this.size = function() {
        return elements.length;
    }

    // 将数组转为字符串
    this.toString = function() {
        return elements.toString();
    }

}

module.exports = Queue;
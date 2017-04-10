
function Stack() {

    // 存放数据
    var elements = [];

    // 栈顶添加元素
    this.push = function (element) {
        elements.push(element);
    };

    // 弹出栈顶元素
    this.pop = function () {
        return elements.pop();
    };

    // 查看栈顶元素
    this.peak = function () {
        return elements[elements.length - 1];
    };

    // 判断栈是否为空
    this.isEmpty = function() {
        return elements.length === 0;
    }

    // 栈的长度
    this.size = function () {
        return elements.length;
    };

    // 清除栈
    this.clear = function () {
        elements = [];
    };

    // 将数组转化为字符串
    this.toString = function () {
        return elements.toString();
    };
}

module.exports = Stack;
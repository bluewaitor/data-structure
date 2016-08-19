
function Stack() {
    var elements = [];
    var top = 0;

    this.push = function (element) {
        elements[top++] = element;
    };

    this.pop = function () {
        return elements.splice(--top, 1);
    };

    this.peek = function () {
        return elements[top - 1];
    };

    this.length = function () {
        return top;
    };

    this.clear = function () {
        top = 0;
    };

    this.toString = function () {
        return elements;
    };
}

module.exports = Stack;
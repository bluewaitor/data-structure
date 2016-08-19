/**
 * 列表类
 * @constructor
 */
function List() {
    var elements = [];
    var listSize = 0;
    var pos = 0; //当前位置

    /**
     * 添加元素
     * @param element 待添加的元素
     */
    this.append = function (element) {
        elements[listSize++] = element;
    };

    /**
     * 查看列表大小
     * @returns {number} 返回列表元素个数
     */
    this.length = function () {
        return listSize;
    };

    /**
     * 查找元素
     * @param element 要查找的元素
     * @returns {number} 返回下标
     */
    this.find = function (element) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i] == element) {
                return i;
            }
        }
        return -1;
    };

    /**
     * 删除元素
     * @param element 删除的元素
     * @returns {boolean} 删除成功返回true,失败返回false
     */
    this.remove = function (element) {
        var index = this.find(element);
        if (index > -1) {
            elements.splice(index, 1);
            --listSize;
            return true;
        }
        return false;
    };

    /**
     * 重写toString方法
     * @returns {Array}
     */
    this.toString = function () {
        return elements;
    };

    /**
     * 在after元素后插入element
     * @param element
     * @param after
     */
    this.insert = function (element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            elements.splice(insertPos + 1, 0, element);
            ++listSize;
            return true;
        }
        return false;
    };

    /**
     * 清除整个列表
     */
    this.clear = function () {
        console.log(delete elements);
        elements = [];
        listSize = pos = 0;
    };

    /**
     * 是否包含某个元素
     * @param element
     * @returns {boolean}
     */
    this.contains = function (element) {
        for (var i = 0; i < elements.length; i++){
            if (elements[i] == element) {
                return true;
            }
        }
        return false;
    };

    /**
     * 移动到第一个位置
     */
    this.front = function () {
        pos = 0;
    };

    /**
     * 移动到最后一个位置
     */
    this.end = function () {
        pos = listSize - 1;
    };

    /**
     * 向前移动一个位置
     */
    this.prev = function () {
        if (pos > 0) {
            --pos;
        }
    };

    /**
     * 向后移动一个位置
     */
    this.next = function () {
        if (pos < listSize -1) {
            ++pos;
        }
    };

    this.currentPos = function () {
        return pos;
    };
    
    this.moveTo = function (position) {
        if (position < 0) {
            this.front();
            return ;
        }
        if (position > elements.length - 1) {
            this.end();
            return ;
        }
        pos = position;
    };

    this.getElement = function () {
        return elements[pos];
    }

}

module.exports = List;
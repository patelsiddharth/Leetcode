
var MinStack = function() {
    this.obj = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let min = this.obj.length === 0 ? val : this.obj[this.obj.length - 1].min;
    this.obj.push({
        value: val,
        min: Math.min(val, min)
    });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.obj.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.obj[this.obj.length-1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.obj[this.obj.length-1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
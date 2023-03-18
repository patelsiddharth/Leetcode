/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.currentUrlIndex = 0;
    this.urlList = [homepage];
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    if(this.currentUrlIndex + 1 < this.urlList.length)
    {
        this.urlList.splice(this.currentUrlIndex + 1)    
    }
    this.urlList.push(url);
    this.currentUrlIndex = this.urlList.length - 1;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.currentUrlIndex = Math.max(0, this.currentUrlIndex - steps);
    return this.urlList[this.currentUrlIndex];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.currentUrlIndex = Math.min(this.urlList.length - 1, this.currentUrlIndex + steps);
    return this.urlList[this.currentUrlIndex];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
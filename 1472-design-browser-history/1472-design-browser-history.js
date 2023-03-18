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
    if((this.currentUrlIndex - steps) < 0)
    {
        steps = 0;
    }
    else
    {
        steps = this.currentUrlIndex - steps;
    }
    
    this.currentUrlIndex = steps;
    
    return this.urlList[steps];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    if((this.currentUrlIndex + steps) >= this.urlList.length)
    {
        steps = this.urlList.length - 1;
    }
    else
    {
        steps = this.currentUrlIndex + steps;
    }
    
    this.currentUrlIndex = steps;
    
    return this.urlList[steps];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
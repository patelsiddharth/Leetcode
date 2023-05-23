/**
 * @param {number} k
 * @param {number[]} nums
 */
class List {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var KthLargest = function(k, nums) {
    this.k = k;
    this.head = null;
    
    nums.sort((a,b) => b-a);
    
    if(nums.length > 0)
    {
        this.head = new List(nums[0]);
        let curr = this.head;
        for(let i = 1; i < nums.length; i++)
        {
            let node = new List(nums[i]);
            curr.next = node;
            curr = curr.next;
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let res = -1, 
        index = 0,
        added = false,
        node = new List(val);
    
    if(this.head === null)
    {
        this.head = node;
        return val;
    }
    else if(this.head.next === null)
    {
        if(val > this.head.val)
        {
            node.next = this.head
            this.head = node;
        }
        else
        {
            this.head.next = node;
        }
        
        return this.k === 1 ? this.head.val : val;
    }
    else if(this.head.val <= val)
    {
        node.next = this.head;
        this.head = node;
        added = true;
    }
    
    let curr = this.head, found = false;
    
    while(curr.next != null)
    {
        if(index === (this.k-1))
        {
            res = curr.val;
            found = true;
        }
        
        if(!added && curr.val >= val && curr.next.val < val)
        {
            node.next = curr.next;
            curr.next = node;
            added = true;
        }
        
        curr = curr.next;
        index++;
    }
    
    return found ? res : curr.val;
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
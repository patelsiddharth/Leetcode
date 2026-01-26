/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const merge = (h1, h2) => {
    let temp1 = h1, temp2 = h2, newHead = new ListNode(0);
    let temp = newHead;
    while(temp1 !== null && temp2 !== null) {
        if (temp1.val <= temp2.val) {
            temp.next = temp1;
            temp = temp1;
            temp1 = temp1.next;
        } else {
            temp.next = temp2;
            temp = temp2;
            temp2 = temp2.next;
        }
        temp.next = null;
    }
    if (temp1 !== null) {
        temp.next = temp1;
    } else if (temp2 !== null) {
        temp.next = temp2;
    }
    return newHead.next;
}

var mergeKLists = function(lists) {
    let len = lists.length;

    if (len === 0) return null;
    if (len === 1) return lists[0];

    for(let i = 1; i < len; i++) {
        lists[i] = merge(lists[i - 1], lists[i]);
    }
    
    return lists[len - 1];
};
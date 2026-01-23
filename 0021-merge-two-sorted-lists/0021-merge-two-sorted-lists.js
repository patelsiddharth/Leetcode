/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let temp1 = list1, temp2 = list2, newHead = new ListNode(0);
    let prev = newHead;

    const appendNode = (curr, val) => {
        const newNode = new ListNode(val);
        prev.next = newNode;
        prev = newNode;
        return curr.next;
    }

    while(temp1 !== null || temp2 !== null) {
        const val1 = temp1 !== null ? temp1.val : 101, 
              val2 = temp2 !== null ? temp2.val : 101;

        if (val1 === val2) {
            temp1 = appendNode(temp1, val1);
            temp2 = appendNode(temp2, val2);
        } else if(val1 > val2) {
            temp2 = appendNode(temp2, val2);
        } else {
            temp1 = appendNode(temp1, val1);
        }
    }
    
    return newHead.next;
};
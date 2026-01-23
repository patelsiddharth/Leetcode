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
    let temp1 = list1, temp2 = list2;
    const newHead = new ListNode(0);
    let prev = newHead;

    while(temp1 !== null || temp2 !== null) {
        const val1 = temp1 !== null ? temp1.val : 101, 
              val2 = temp2 !== null ? temp2.val : 101;

        if (val1 === val2) {
            temp1 = temp1.next;
            temp2 = temp2.next;
            const newNode1 = new ListNode(val1);
            const newNode2 = new ListNode(val2);
            newNode1.next = newNode2;
            prev.next = newNode1;
            prev = newNode2;
        } else if(val1 > val2) {
            const newNode2 = new ListNode(val2);
            prev.next = newNode2;
            prev = newNode2;
            temp2 = temp2.next;
        } else {
            const newNode1 = new ListNode(val1);
            prev.next = newNode1;
            prev = newNode1;
            temp1 = temp1.next;
        }
    }
    
    return newHead.next;
};
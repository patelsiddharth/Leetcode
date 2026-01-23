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
    let arr = [], temp1 = list1, temp2 = list2;
    while(temp1 !== null || temp2 !== null) {
        const val1 = temp1 !== null ? temp1.val : 101, 
              val2 = temp2 !== null ? temp2.val : 101;

        if (val1 === val2) {
            arr.push(val1);
            arr.push(val2);
            temp1 = temp1.next;
            temp2 = temp2.next;
        } else if(val1 > val2) {
            arr.push(val2);
            temp2 = temp2.next;
        } else {
            arr.push(val1);
            temp1 = temp1.next;
        }
    }
    
    const newHead = new ListNode(0);
    let prev = newHead;
    for(let i = 0; i < arr.length; i++) {
        const newNode = new ListNode(arr[i]);
        prev.next = newNode;
        prev = newNode;
    }
    return newHead.next;
};
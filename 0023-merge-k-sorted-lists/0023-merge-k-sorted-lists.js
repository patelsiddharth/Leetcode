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
var mergeKLists = function(lists) {
    let arr = [];
    for(let i = 0; i < lists.length; i++) {
        let temp = lists[i];
        while(temp !== null) {
            arr.push(temp.val);
            temp = temp.next;
        }
    }
    arr.sort((a,b) => a-b)
    let dummy = new ListNode(0);
    let temp = dummy;
    for(let i = 0; i < arr.length; i++) {
        let newNode = new ListNode(arr[i]);
        temp.next = newNode;
        temp = newNode;
    }
    return dummy.next;
};
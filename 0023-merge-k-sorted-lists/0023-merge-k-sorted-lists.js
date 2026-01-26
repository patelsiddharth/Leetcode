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
            arr.push(temp);
            temp = temp.next;
        }
    }
    arr.sort((a,b) => a.val - b.val)
    let dummy = new ListNode(0);
    let temp = dummy;
    for(let i = 0; i < arr.length; i++) {
        temp.next = arr[i];
        temp = arr[i];
    }
    return dummy.next;
};
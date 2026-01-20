/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let count = 0;
    let temp = head;
    while(temp !== null) {
        count++;
        temp = temp.next;
    }

    n = count - n;
    // if (n === 1 || head.next === null || head === null) return null;'
    if (n === 0) {
        temp = head;
        head = head.next;
        temp.next = null
        return head;
    }
    console.log(n)
    temp = head;
    count = 0;
    let prev = head;
    while(temp !== null) {
        if (count === n) {
            prev.next = temp.next;
            temp.next = null;
            break;
        }

        count++;
        prev = temp;
        temp = temp.next;
    }
    return head;
};
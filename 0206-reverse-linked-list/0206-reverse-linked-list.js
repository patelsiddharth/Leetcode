/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    const reverse = (head) => {
        if (head === null || head.next === null) return head;
        const newHead = reverse(head.next);
        let front = head.next;
        front.next = head;
        head.next = null;
        return newHead;
    }

    return reverse(head);
};
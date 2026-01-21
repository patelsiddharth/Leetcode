/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;
    
    let prev = null, slow = head, fast = head;
    while(fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const reverse = (head) => {
        let temp = head;
        while(temp != null) {
            let next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return prev;
    }
    const newHead = reverse(slow.next);

    let curr1 = head, curr2 = newHead;
    while (curr2 != null) {
        if (curr1.val !== curr2.val) {
            reverse(newHead);
            return false;
        }
        curr1 = curr1.next;
        curr2 = curr2.next;
    }
    reverse(newHead);
    return true;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var nodeLength = function(node) {
    let count = 0, temp = node;
    while(temp !== null)
    {
        count++;
        temp = temp.next;
    }
    return count;
}

var getIntersectionNode = function(headA, headB) {
    let tempA = headA, tempB = headB,
        l1 = nodeLength(headA), 
        l2 = nodeLength(headB);

    if(l1 > l2)
    {
        while(l1 > l2)
        {
            l1--;
            tempA = tempA.next;
        }
    }
    else
    {
        while(l2 > l1)
        {
            l2--;
            tempB = tempB.next;
        }
    }
    
    while(tempA !== tempB)
    {
        tempA = tempA.next;
        tempB = tempB.next;
    }
    
    return tempA;
};
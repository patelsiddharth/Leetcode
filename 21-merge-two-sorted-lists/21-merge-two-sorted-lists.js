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
    let dummy = new ListNode(0), temp = dummy;
    
    while(list1 || list2)
    {
        if(list1 === null)
        {
            temp.next = list2;
            break;
        }
        
        if(list2 === null)
        {
            temp.next = list1;
            break;
        }
        
        if(list1.val < list2.val)
        {
            temp.next = list1;
            list1 = list1.next;
        }
        else
        {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next
    }
    
    return dummy.next;
};
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution 
{
    public ListNode MiddleNode(ListNode head) 
    {
        if(head == null) return null;
        
        ListNode ptr1 = head;
        ListNode ptr2 = head;
        while(ptr2 != null && ptr2.next != null)
        {
            ptr1 = ptr1.next;
            ptr2 = ptr2.next.next;
        }
        return ptr1;
    }
}
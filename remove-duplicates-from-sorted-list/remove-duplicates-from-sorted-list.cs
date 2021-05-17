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
    public ListNode DeleteDuplicates(ListNode head) 
    {
         if(head == null) 
             return head;
        
        ListNode temp = head;
        ListNode prev = null;
        while(temp != null)
        {   
            if(prev != null && prev.val == temp.val)
            {
                prev.next = temp.next;
                temp = temp.next;
                continue;
            }
            
            prev = temp;
            temp = temp.next;
        }
        return head;
    }
}
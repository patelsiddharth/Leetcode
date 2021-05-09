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
    public int GetDecimalValue(ListNode head) 
    {
        int len = -1;
        int num = 0;
        ListNode temp = head;
        while(temp != null)
        {
            len++;
            temp = temp.next;
        }
        temp = head;
        while(temp != null)
        {
            num = num + temp.val*Convert.ToInt32(Math.Pow(2,len));
            len--;
            temp = temp.next;
        }
        return num;
    }
}
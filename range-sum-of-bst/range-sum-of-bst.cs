/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution 
{
    public int RangeSumBST(TreeNode root, int low, int high) 
    {
        int sum = 0;
        Queue q = new Queue();
        TreeNode temp = root;
        while(temp != null)
        {
            if(temp.val >= low && temp.val <= high)
                sum += temp.val;
            
            if(temp.left != null)
                q.Enqueue(temp.left);
            if(temp.right != null)
                q.Enqueue(temp.right);            
            
            if(q.Count > 0)
                temp = (TreeNode)q.Dequeue();
            else
                temp = null;
        }
        return sum;
    }
}
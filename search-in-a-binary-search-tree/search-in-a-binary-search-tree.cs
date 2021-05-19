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
public class Solution {
    public TreeNode SearchBST(TreeNode root, int val) 
    {
        if(root == null)
            return root;
        
        while(root != null)
        {
            if(root.val < val)
            {
                root = root.right;
            }
            else if(root.val > val)
            {
                root = root.left;
            }
            else
                return root;
        }
        return root;
    }
}
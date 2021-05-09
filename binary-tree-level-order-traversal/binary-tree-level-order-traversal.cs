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
    public IList<IList<int>> LevelOrder(TreeNode root) 
    {
        IList<IList<int>> res = new List<IList<int>>();
        
        if(root == null) 
        {
            return res;
        }   
        
        IList<int> resultInLevel = null;
        Queue q1 = new Queue();
        Queue q2 = new Queue();
        
        q1.Enqueue(root);
        
        while(q1.Count > 0 || q2.Count > 0)
        {
            resultInLevel = new List<int>();
            while(q1.Count > 0)
            {
                TreeNode temp = (TreeNode)q1.Dequeue();
                resultInLevel.Add(temp.val);

                if(temp.left != null)
                    q2.Enqueue(temp.left);
                if(temp.right != null)
                    q2.Enqueue(temp.right);
            }
            while(q2.Count > 0)
            {
                q1.Enqueue(q2.Dequeue());
            }
            res.Add(resultInLevel);
        }
        
        return res;
    }
}
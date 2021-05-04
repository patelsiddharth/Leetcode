public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        HashSet<int> list = new HashSet<int>();
        foreach(var x in nums)
        {
            if(list.Contains(x))
            {
                return true;
            }
            list.Add(x);
        }
        return false;
    }
}
public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) 
    {
        var dict = new Dictionary<int, int>();
        for(int i = 0; i < nums.Length; i++)
        {
            if(!dict.ContainsKey(nums[i]))
                dict.Add(nums[i], 1);
            else
                dict[nums[i]]++;
        }
        
        List<int> l = new List<int>();
        for(int i = 1; i <= nums.Length; i++)
        {
            if(!dict.ContainsKey(i))
                l.Add(i);
        }
        return l;
    }
}
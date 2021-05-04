public class Solution {
    public int MajorityElement(int[] nums) 
    {
        if(nums.Length == 1)
            return nums[0];
        int result = 0;
        int majorityLength = nums.Length/2;
        Dictionary<int,int> dict = new Dictionary<int,int>();
        foreach(var x in nums)
        {
            if(!dict.ContainsKey(x))
            {
                dict.Add(x,1);
            }
            else
            {
                dict[x]++;
                if(dict[x] > majorityLength)
                {
                    result = x;
                    break;
                }
            }   
        }
        return result;
    }
}
public class Solution {
    public int GetMinDistance(int[] nums, int target, int start) 
    {
        int min = nums.Length;
        for(int i =0; i<nums.Length; i++)
        {
            if(nums[i] == target && Math.Abs(i-start) < min)
            {
                min = Math.Abs(i-start);
            }
        }
        return min;
    }
}
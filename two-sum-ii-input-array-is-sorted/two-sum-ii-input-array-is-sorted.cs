public class Solution {
    public int[] TwoSum(int[] nums, int target) 
    {
        int start = 0, end = nums.Length-1;
        int[] result = new int[2];
        while(start < end)
        {
            if(nums[start] + nums[end] > target)
                end--;
            else if(nums[start] + nums[end] < target)
                start++;
            else
            {
                result[0] = start+1;
                result[1] = end+1;
                break;
            }
        }
        return result;
    }
}
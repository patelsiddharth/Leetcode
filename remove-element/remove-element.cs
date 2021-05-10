public class Solution {
    public int RemoveElement(int[] nums, int val) 
    {
        int end = nums.Length, i = 0;
        while(i < end)
        {
            if(nums[i] == val)
            {
                nums[i] = nums[end-1];
                end--;
            }
            else
            {
                i++;
            }
        }
        return end;
    }
}
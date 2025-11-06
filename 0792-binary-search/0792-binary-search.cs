public class Solution {
    public int Search(int[] nums, int target) 
    {
        int n = nums.Count();
        return bs(nums,0,n-1, target);
    }
    public int bs(int[] arr, int start, int end, int x)
    {
        if(start <= end)
        {
            int mid = (end + start)/2;
            if(arr[mid] == x)
                return mid;
            if(arr[mid] > x)
                return bs(arr, start, mid - 1, x);
            return bs(arr, mid + 1, end, x);
        }
        return -1;
    }
}
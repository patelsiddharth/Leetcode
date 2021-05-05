public class Solution {
    public int[] DecompressRLElist(int[] nums) {
        List<int> l = new List<int>();
        for(int i=0; i <= (nums.Length -1) / 2;i++)
        {
            int freq = nums[2*i];
            int val = nums[2*i + 1];
            for(int j =0;j<freq;j++)
                l.Add(val);
        }
        return l.ToArray();
    }
}
public class Solution {
    public int ArraySign(int[] nums) 
    {
        int minusCount = 0;
        foreach(var x in nums)
        {
            if(x == 0)
                return 0;
            else if(x < 0)
            {
                minusCount++;
            }
        }
        if(minusCount%2 != 0)
            return -1;
        else 
            return 1;
    }
}
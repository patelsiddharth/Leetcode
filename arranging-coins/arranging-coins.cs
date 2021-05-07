public class Solution {
    public int ArrangeCoins(int n) 
    {
        int step = 0;
        for(int i =1;i<=n;i++)
        {
            if(n < i)
                break;
            n = n - i;
            step++;
        }
        return step;
    }
}
public class Solution {
    public bool HasAlternatingBits(int n) 
    {
        int exp = -1;
        while(n > 0)
        {
            if(exp == -1)
            {
                exp = (n%2 == 0) ? 1 : 0;
                n/=2;
                continue;
            }
            int rem = n%2;
            if(rem != exp)
                return false;
            exp = exp == 1 ? 0 : 1;
            n /= 2;
        }
        return true;
    }
}
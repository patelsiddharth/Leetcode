public class Solution 
{
    public bool IsPalindrome(int x) 
    {
        if(x < 0)
            return false;
        
        int rev = 0, n = x;
        while(n > 0)
        {
            rev = rev*10 + n%10;
            n /= 10;
        }
        return rev == x;
    }
}
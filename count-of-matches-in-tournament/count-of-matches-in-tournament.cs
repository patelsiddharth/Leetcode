public class Solution {
    public int NumberOfMatches(int n) 
    {
        int match = 0;
        while(n > 1)
        {
            if(n%2 != 0)
            {
                match++;
                n = n-1;
            }
            n = n/2;
            match += n;
        }
        return match;
    }
}
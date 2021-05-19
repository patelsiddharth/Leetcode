public class Solution 
{
    public int FindComplement(int num) 
    {
        int res = 0;
        int index = 0;
        int n = 0;
        while(num > 0)
        {
            if(num % 2 == 0)
            {
                n += 1 * (int)Math.Pow(2,index);
            }
            index++;
            num /= 2;
        }
        return n;
    }
}
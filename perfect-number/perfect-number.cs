public class Solution 
{
    public bool CheckPerfectNumber(int num) 
    {
        if(num == 1) return false;
        
        int divisorSum = 1;
        for(int i = 2; i < num/2 + 1 ; i++)
        {
            if(num%i == 0)
            {
                divisorSum += i;   
            }
        }
        return divisorSum == num;
    }
}
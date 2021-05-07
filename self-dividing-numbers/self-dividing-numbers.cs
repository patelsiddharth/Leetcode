public class Solution 
{
    public IList<int> SelfDividingNumbers(int left, int right) 
    {
        List<int> result = new List<int>();
        for(int i = left;i<=right;i++)
        {
            if(IsSD(i))
                result.Add(i);
        }
        return result;
    }
    private bool IsSD(int x)
    {
        int temp = x;
        while(temp != 0)
        {
            int rem = temp%10;
            if(rem == 0 || x % rem != 0)
                return false;
            temp /= 10;
        }
        return true;
    }
}
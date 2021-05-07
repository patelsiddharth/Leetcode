public class Solution 
{
    public IList<int> SelfDividingNumbers(int left, int right) 
    {
        int i = left;
        List<int> result = new List<int>();
        while(i<=right)
        {
            if(IsSD(i))
                result.Add(i);
            i++;
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
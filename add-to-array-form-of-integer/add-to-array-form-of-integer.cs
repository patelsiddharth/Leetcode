public class Solution 
{
    public IList<int> AddToArrayForm(int[] num, int k) 
    {   
        int sum = 0, carry = 0;
        List<int> l = new List<int>();
        
        for(int i = num.Length - 1; i >= 0; i--)
        {
            if(k > 0)
            {
                sum = k % 10 + num[i] + carry;
                k /= 10;
            }
            else
            {
                sum = num[i] + carry;
            }
            
            if(sum > 9)
            {
                carry = 1;
                sum = sum%10;
            }
            else
            {
                carry = 0;
            }
            
            l.Insert(0,sum);
        }
        
        while(k > 0)
        {
            sum = carry + k%10;
            if(sum > 9)
            {
                carry = 1;
                sum = sum%10;
            }
            else
            {
                carry = 0;
            }
            l.Insert(0, sum);
            k /= 10;
        }
        
        if(carry == 1)
            l.Insert(0, 1);
        
        return l;
    }
}
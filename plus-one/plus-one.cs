public class Solution {
    public int[] PlusOne(int[] digits) 
    {
        int carry = 1, sum = 0;   
        for(int i = digits.Length-1;i >= 0; i--)
        {
            sum = digits[i] + carry;
            if(sum > 9)
            {
                carry = 1;
                sum = sum % 10;
            }
            else
            {
                carry = 0;
            }
            
            digits[i] = sum;
            
            if(carry == 0)
                break;
        }
        
        if(carry == 1)
        {
            List<int> l = digits.ToList();
            l.Insert(0,1);
            return l.ToArray();
        }
        
        return digits;
    }
}
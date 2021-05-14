public class Solution {
    public int Maximum69Number (int n) 
    {
        StringBuilder s = new StringBuilder(n.ToString());
        for(int i = 0; i < s.Length; i++)
        {
            if(s[i] == '6')
            {
                s[i] = '9';
                break;
            }
        }
        return Convert.ToInt32(s.ToString());
    }
}
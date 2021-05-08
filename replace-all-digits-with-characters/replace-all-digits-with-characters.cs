public class Solution {
    public string ReplaceDigits(string s) 
    {
        StringBuilder sb = new StringBuilder();
        for(int i =0;i< s.Length;i++) 
        {
            if(i%2 != 0)
            {
                sb.Append(Convert.ToChar(s[i-1]+ (s[i] - '0')));
            }
            else
                sb.Append(s[i]);
        }
        return sb.ToString();
    }
}
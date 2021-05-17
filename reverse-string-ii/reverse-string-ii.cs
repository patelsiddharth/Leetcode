public class Solution 
{
    public string ReverseStr(string s, int k) 
    {
        int count = 0;
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < s.Length; i++)
        {
            // if(s.Length < k)
            // {
            //     string newstr = s.Substring(i,s.Length);
            //     char[] charArray = newstr.ToCharArray();
            //     Array.Reverse( charArray );
            //     sb.Append( charArray );
            //     break;
            // }
            if(count == 0)
            {
                string newstr;
                if(k + i > s.Length)
                {
                    newstr = s.Substring(i,s.Length-i);
                }
                else 
                {
                    newstr = s.Substring(i,k);
                }
                char[] charArray = newstr.ToCharArray();
                Array.Reverse( charArray );
                sb.Append( charArray );
                if(s.Length < k)
                {
                   break; 
                }
                i += k-1;
                count += k-1;
            }
            else
            {
                sb.Append(s[i]);
                count++;
                if(count == 2*k - 1)
                    count = 0;
            }
        }
        return sb.ToString();
    }
}
public class Solution 
{
    public string FreqAlphabets(string s) 
    {
        StringBuilder sb = new StringBuilder();
        for(int i = s.Length - 1; i >= 0; i--)
        {
            if(s[i] == '#')
            {
                int y = (s[i-2] - '0')*10 + s[i-1] - '0';
                sb.Append((char)('a' + y - 1));
                i = i - 2; 
            }
            else
            {
                char x = (char)('a' + s[i] - '0' - 1);
                sb.Append(x);
            }
        }
        s = sb.ToString();
        char[] array = s.ToCharArray();
        Array.Reverse(array);
        return new String(array);
    }
}
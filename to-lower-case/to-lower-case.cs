public class Solution {
    public string ToLowerCase(string str) 
    {
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i< str.Length; i++)
        {
            if(str[i] >= 'A' && str[i] <= 'Z')
                sb.Append(Convert.ToChar(str[i] + 32));
            else
                sb.Append(str[i]);
        }
        return sb.ToString();
    }
}
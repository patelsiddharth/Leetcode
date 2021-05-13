public class Solution {
    public string TruncateSentence(string s, int k) 
    {
        int count = 0;
        var sb = new StringBuilder();
        foreach(var word in s.Split(" "))
        {
            if(count < k)
            {
                sb.Append(word);
                if(count != k-1)
                    sb.Append(" ");
                count++;
            }
            else
            {
                break;
            }
        }
        return sb.ToString();
    }
}
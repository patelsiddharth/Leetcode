public class Solution {
    public string MergeAlternately(string word1, string word2) 
    {
        StringBuilder sb = new StringBuilder();
        
        int len1 = word1.Length, len2 = word2.Length;
        
        int min = (len1 < len2) ? len1 : len2;
        
        for(int i = 0; i < min; i++)
        {
            sb.Append(word1[i]);
            sb.Append(word2[i]);
        }
        
        if(min == len1)
        {
            sb.Append(word2.Substring(min, len2-min));
        }
        else
        {
            sb.Append(word1.Substring(min, len1-min));
        }
        
        return sb.ToString();
    }
}
public class Solution {
    public string MergeAlternately(string word1, string word2) 
    {
        int len = word1.Length + word2.Length;
        bool selectOne = true;
        StringBuilder sb = new StringBuilder();
        
        int a = 0, b = 0;
        for(int i = 0; i < len; i++)
        {
            if(selectOne && a < word1.Length)
            {
                sb.Append(word1[a]);
                a++;
                if(b < word2.Length)
                {
                    selectOne = false;
                }
            }
            else if(!selectOne && b < word2.Length)
            {
                sb.Append(word2[b]);
                b++;
                if(a < word1.Length)
                {
                    selectOne = true;
                }
            }
        }
        return sb.ToString();
    }
}
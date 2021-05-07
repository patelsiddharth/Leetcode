public class Solution
{
    public char FindTheDifference(string s, string t) 
    {
        Dictionary<char, int> dict = new Dictionary<char, int>();
        for(int i =0;i<s.Length;i++)
        {
            if(!dict.ContainsKey(s[i]))
                dict.Add(s[i],1);
            else
                dict[s[i]]++;   
        }
        
        for(int i =0;i<t.Length;i++)
        {
            if(!dict.ContainsKey(t[i]) || (dict.ContainsKey(t[i]) && dict[t[i]] == 0))
                return t[i];
            else
            {
                 dict[t[i]]--;
            }
        }
        return t[0];
    }
}
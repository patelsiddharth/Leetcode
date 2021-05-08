public class Solution {
    public bool CheckIfPangram(string s) {
        Dictionary<char, int> dict = new Dictionary<char, int>();
        for(int i = 0; i<s.Length;i++)
        {
            if(!dict.ContainsKey(s[i]))
                dict.Add(s[i],1);
        }
        return dict.Count == 26;
    }
}
public class Solution 
{
    public string[] UncommonFromSentences(string A, string B) 
    {
        string ab = string.Concat(A, " ", B);
        List<string> res = new List<string>();
        Dictionary<string, int> dict = new Dictionary<string, int>();
        foreach(var word in ab.Split(" "))
        {
            if(dict.ContainsKey(word))
            {
                dict[word]++;
                res.Remove(word);
            }
            else
            {
                dict.Add(word,1);
                res.Add(word);
            }    
        }
        return res.ToArray();
    }
}
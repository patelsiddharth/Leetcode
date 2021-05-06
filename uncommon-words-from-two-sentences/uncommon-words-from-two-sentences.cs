public class Solution {
    public string[] UncommonFromSentences(string A, string B) {
        string[] sa = A.Split(" ");
        string[] sb = B.Split(" ");
        List<string> res = new List<string>();
        Dictionary<string, int> dictA = new Dictionary<string, int>();
        Dictionary<string, int> dictB = new Dictionary<string, int>();
        foreach(var a in sa)
        {
            if(dictA.ContainsKey(a))
               dictA[a]++;
            else
                dictA.Add(a,1);
        }
        
        foreach(var b in sb)
        {
            if(dictB.ContainsKey(b))
               dictB[b]++;
            else
                dictB.Add(b,1);
        }
        
        foreach(var dicA in dictA)
        {
            if(dicA.Value == 1 && !dictB.ContainsKey(dicA.Key))
            {
                res.Add(dicA.Key);
            }
        }
        
        foreach(var dicB in dictB)
        {
            if(dicB.Value == 1 && !dictA.ContainsKey(dicB.Key))
            {
                res.Add(dicB.Key);
            }
        }
        return res.ToArray();
    }
}
public class Solution 
{
    public string LongestCommonPrefix(string[] strs) 
    {
        string res = "";
        string r = "";
        foreach(var c in strs[0])
        {
            r += c;
            foreach(var str in strs)
            {
                if(!str.StartsWith(r))
                {
                   return res; 
                }
            }
            res += c;
        }
        return res;
    }
}
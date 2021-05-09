public class Solution 
{
    public string DestCity(IList<IList<string>> paths) 
    {
        string res = "";
        Dictionary<string, string> dict = new Dictionary<string, string>();
        foreach(var path in paths)
        {
            dict.Add(path[1], path[0]);
        }
        foreach(var dest in dict)
        {
            if(!dict.ContainsValue(dest.Key))
            {
                res = dest.Key;
                break;
            }
        }
        return res;
    }
}
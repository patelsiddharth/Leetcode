public class Solution {
    public bool UniqueOccurrences(int[] arr) 
    {
        Dictionary<int, int> dict = new Dictionary<int, int>();
        foreach(var x in arr)
        {
            if(!dict.ContainsKey(x))
            {
                dict.Add(x,1);
            }
            else
            {
                dict[x]++;
            }
        }
        List<int> l = new List<int>();
        foreach(var x in dict.Values)
        {
            if(!l.Contains(x))
                l.Add(x);
            else
                return false;
        }
        return true;
    }
}
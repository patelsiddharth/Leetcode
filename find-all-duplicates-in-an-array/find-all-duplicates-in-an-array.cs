public class Solution {
    public IList<int> FindDuplicates(int[] nums) 
    {
        var dict = new Dictionary<int, int>();
        foreach(var x in nums)
        {
            if(!dict.ContainsKey(x))
            {
                dict.Add(x, 1);
            }
            else
            {
                dict[x]++;
            }
        }
        
        return dict.Where(x => x.Value == 2).Select(x=>x.Key).ToList();
    }
}
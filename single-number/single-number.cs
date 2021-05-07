public class Solution {
    public int SingleNumber(int[] nums) {
        Dictionary<int, int> dict = new Dictionary<int, int>();
        foreach(var num in nums)
        {
            if(dict.ContainsKey(num))
                dict[num]++;
            else
                dict.Add(num, 1);
        }
        return dict.Where(x => x.Value == 1).Select(x => x.Key).FirstOrDefault();
    }
}

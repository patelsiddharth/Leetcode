public class Solution {
    public IList<int> FilterRestaurants(int[][] restaurants, int veganFriendly, int maxPrice, int maxDistance) {
        
        Dictionary<int, int> dict = new Dictionary<int, int>();
        foreach(var res in restaurants)
        {
            if(veganFriendly == 1)
            {
                if(res[2] == 1 && res[3] <= maxPrice && res[4] <= maxDistance)
                {
                    dict.Add(res[0], res[1]);
                }
            }
            else
            {
                if(res[3] <= maxPrice && res[4] <= maxDistance)
                {
                    dict.Add(res[0], res[1]);
                }
            }
        }
        var xx = dict.OrderByDescending(x => x.Value).ThenByDescending(x=>x.Key).ToDictionary(x=> x.Key, y => y.Value);
        List<int> l = new List<int>();
        foreach(var x in xx)
        {
            l.Add(x.Key);
            Console.Write(x.Key);
            Console.Write(" - ");
            Console.WriteLine(x.Value);
        }
        return l;
    }
}
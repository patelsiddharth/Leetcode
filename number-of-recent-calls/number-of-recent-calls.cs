public class RecentCounter 
{
    public List<int> l = null;
    public RecentCounter() 
    {
        l = new List<int>();
    }
    
    public int Ping(int t) 
    {
        int count = 0;
        foreach(var x in l)
        {
            if(t-3000 > x)
            {
                count++;
            }
        }
        l.Add(t);
        return l.Count-count;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter obj = new RecentCounter();
 * int param_1 = obj.Ping(t);
 */
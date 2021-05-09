public class Solution 
{
    public int CountConsistentStrings(string allowed, string[] words) 
    {
        Dictionary<char, int> dict = new Dictionary<char, int>();
        foreach(var x in allowed)
        {
            if(!dict.ContainsKey(x))
                dict.Add(x,1);
            else
                dict[x]++;
        }
        
        int count = 0;
        
        foreach(var word in words)
        {
            bool contain = false;
            foreach(var c in word)
            {
                if(!dict.ContainsKey(c))
                {
                    contain = false;
                    break;
                }    
                contain = true;
            }
            if(contain)
                count++;
        }
        return count;
    }
}
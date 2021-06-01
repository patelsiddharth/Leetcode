public class Solution {
    public int[] ShortestToChar(string s, char c) {
        var res = new int[s.Length];
        int index = 0;
        
        List<int> l = new List<int>();
        for(int i = 0; i < s.Length; i++)
        {
            if(s[i] == c)
            {
                l.Add(i);
            }
        }
        
        foreach(var sc in s)
        {
            if(sc == c)
            {
                res[index] = 0;
            }
            else
            {
                int min = s.Length;
                foreach(var x in l)
                {
                    int temp = x-index > 0 ? x-index : index - x;
                    if(temp < min)
                    {
                        min = temp;
                    }
                }
                res[index] = min;
            }
            index++;
        }
        return res; 
    }
}
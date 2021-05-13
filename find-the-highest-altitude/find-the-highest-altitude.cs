public class Solution {
    public int LargestAltitude(int[] gain) 
    {
        int max = gain[0] > 0 ? gain[0] : 0;
        int pt = gain[0];
        for(int i = 1; i < gain.Length; i++)
        {
            pt = gain[i] + pt;
            Console.WriteLine("Pt : "+ pt);
            if(pt > max)
                max = pt;
        }
        return max;
    }
}
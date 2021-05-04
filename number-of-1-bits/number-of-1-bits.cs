public class Solution {
    public int HammingWeight(uint n) 
    {
        int count = 0;
        uint mask = 1;
        for(int i =0;i<32;i++)
        {
            if((n & mask) != 0)
            {
                count++;
            }
            mask <<= 1;
        }
        //Console.WriteLine(n & mask);
        return count;
    }
}
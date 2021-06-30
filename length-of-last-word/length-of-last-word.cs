public class Solution 
{
    public int LengthOfLastWord(string s) 
    {
        s = s.Trim();
        if(s.Equals(""))
            return 0;
        
        var temp = s.Split(" ");
        string x = temp[temp.Length - 1];
        
        return x.Length;
    }
}
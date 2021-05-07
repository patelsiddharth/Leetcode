public class Solution 
{
    public bool ArrayStringsAreEqual(string[] word1, string[] word2) 
    {
        StringBuilder s1 = new StringBuilder();
        foreach(var x in word1)
        {
             s1.Append(x);   
        }
        
        StringBuilder s2 = new StringBuilder();
        foreach(var x in word2)
        {
             s2.Append(x);   
        }
        
        return s1.ToString() == s2.ToString();
    }
}
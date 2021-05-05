public class Solution {
    public string RestoreString(string s, int[] indices) 
    {
        char[] newStr = new char[s.Length];
        for(int i = 0; i< s.Length;i++)
        {
            newStr[indices[i]] = s[i];
        }
        return new String(newStr);
    }
}
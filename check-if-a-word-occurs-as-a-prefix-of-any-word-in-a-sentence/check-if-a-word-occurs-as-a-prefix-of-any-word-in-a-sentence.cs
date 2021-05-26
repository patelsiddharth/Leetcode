public class Solution {
    public int IsPrefixOfWord(string sentence, string searchWord) 
    {
        int index = 1;
        foreach(var word in sentence.Split(" "))
        {
            if(word.StartsWith(searchWord))
            {
                return index;
            }
            index++;
        }
        return -1;
    }
}
public class Solution 
{
    public int CountMatches(IList<IList<string>> items, string ruleKey, string ruleValue) 
    {
        int isMatched = 0;
        foreach(var item in items)
        {
            if(ruleKey == "type" && item[0] == ruleValue)
            {
                isMatched++;
            }
            else if(ruleKey == "color" && item[1] == ruleValue)
            {
                isMatched++;
            }
            else if(ruleKey == "name" && item[2] == ruleValue)
            {
                isMatched++;
            }
        }
        return isMatched;
    }
}
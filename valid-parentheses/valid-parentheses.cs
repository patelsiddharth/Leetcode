public class Solution 
{
    public bool IsValid(string str) 
    {
        if(str.Length % 2 != 0)
            return false;
        
        Stack<char> stk = new Stack<char>();
        foreach(var x in str)
        {
            if(x == '(' || x == '{' || x == '[')
            {
                stk.Push(x);
            }    
            else
            {
                if(stk.Count == 0)
                    return false;
                
                char popped = stk.Pop();
                
                if(x == ')' && popped != '(')
                    return false;
                
                if(x == '}' && popped != '{')
                    return false;
                
                if(x == ']' && popped != '[')
                    return false;
            }
        }
        
        if(stk.Count != 0)
            return false;
        
        return true;
    }
}
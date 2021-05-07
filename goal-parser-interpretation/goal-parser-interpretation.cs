public class Solution 
{
    public string Interpret(string cmd) 
    {
        StringBuilder sb = new StringBuilder();
        for(int i =0;i<cmd.Length;i++)
        {
            if(cmd[i] == 'G')
            {
                sb.Append('G');
            }
            else if(cmd[i] == '(' && cmd[i+1] == ')')
            {
                sb.Append('o');
                i++;
            }
            else if(cmd[i] == '(' && cmd[i+1] == 'a' && cmd[i+2] == 'l' && cmd[i+3] == ')')
            {
                sb.Append("al");
                i += 3;
            }
        }
        return sb.ToString();
    }
}
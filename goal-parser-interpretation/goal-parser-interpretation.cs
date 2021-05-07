public class Solution 
{
    public string Interpret(string cmd) 
    {
        string sb = "";
        for(int i =0;i<cmd.Length;i++)
        {
            if(cmd[i] == 'G')
            {
                sb += 'G';
            }
            else if(cmd[i] == '(' && cmd[i+1] == ')')
            {
                sb += 'o';
                i++;
            }
            else if(cmd[i] == '(' && cmd[i+1] == 'a' && cmd[i+2] == 'l' && cmd[i+3] == ')')
            {
                sb += "al";
                i += 3;
            }
        }
        return sb.ToString();
    }
}
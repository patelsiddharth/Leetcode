public class Solution {
    public int CountPrimes(int n) 
    {
        if(n == 0 || n == 1) return 0;
        
        int[] visited = new int[n+1];
        Array.Fill(visited, 1);
        
        for(int i = 2; i <= n/2; i++)
        {
            if(visited[i] == 1)
            {
                for(int j = 2; i * j < n; j++)
                {
                    visited[i*j] = 0;
                }
            }
        }
        
        int count = 0;
        for(int i = 2; i < n; i++)
        {
            if(visited[i] == 1)
                count++;
        }
        
        return count;
    }
}
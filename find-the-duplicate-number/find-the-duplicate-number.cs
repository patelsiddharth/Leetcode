public class Solution {
//     public int FindDuplicate(int[] nums) 
//     {
//         List<int> l = new List<int>();
//         foreach(var num in nums)
//         {
//             if(l.Contains(num))
//                 return num;
//             l.Add(num);
//         }
//         return nums[0];
//     }
    
    public int FindDuplicate(int[] nums) {
       Dictionary<int,int> dict = new Dictionary<int,int>();
        
        for(int i=0; i< nums.Length; i++)
        {
            if(dict.ContainsKey(nums[i]))
            {
                dict[nums[i]]++;
            }
            else
            {
                dict.Add(nums[i], 1);
            }
        }
        
        foreach(var d in dict)
        {
            if(d.Value > 1)
            {
                return d.Key;
            }
        }
        
        return 0;
    }
}


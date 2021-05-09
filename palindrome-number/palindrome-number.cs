public class Solution 
{
     public bool IsPalindrome(int x) {
        int newNumb = 0, y = x;
        while (y > 0) {
            newNumb = newNumb * 10 + y % 10;
            y /= 10;
        }
        return x < 0 ? false : newNumb == x;
    }
}
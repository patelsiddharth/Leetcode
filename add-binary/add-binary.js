/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    // return (a == "0" && b != "0") ? b : a;
    
    var al = a.length - 1, bl = b.length - 1;
    
    var sum = 0, carry = 0, result = "";
    while(al > -1 || bl > -1)
    {
        const tempA = a[al] ? parseInt(a[al]) : 0, 
              tempB = b[bl] ? parseInt(b[bl]) : 0;
        
        console.log(tempA, tempB);
        console.log(al, bl);
        if(tempA == 1 && tempB == 1)
        {
            sum = (carry == 1) ? 1 : 0;
            carry = 1;
        }
        else
        {
            if(tempA + tempB == 1)
            {
                if(carry == 1)
                {   
                    sum = 0;
                    carry = 1;
                }
                else
                {   
                    sum = 1;
                    carry = 0;
                }
            }
            else
            {
                sum = carry;
                carry = 0;
            }
        }
        
        result = sum.toString() + result;
        console.log(result, sum, carry)
        al--;
        bl--;
    }
    if(carry)
    {
       return carry.toString() + result;
    }
    return result;
    
//     let result = "", sum = 0, carry = 0;
//     a = parseInt(a);
//     b = parseInt(b);
    
//     while(a || b)
//     {
//         console.log(a, b);
//         let remA = a%10;
//         let remB = b%10;
//         console.log(remA, remB);
//         if(remA == 1 && remB == 1)
//         {
//             sum = (carry == 1) ? 1 : 0;
//             carry = 1;
//         }
//         else
//         {
//             if(remA + remB == 1)
//             {
//                 if(carry == 1)
//                 {   
//                     sum = 0;
//                     carry = 1;
//                 }
//                 else
//                 {   
//                     sum = 1;
//                     carry = 0;
//                 }
//             }
//             else
//             {
//                 sum = carry;
//                 carry = 0;
//             }
//         }
//         result = sum.toString() + result;
//         console.log(sum, carry, result);
//         console.log("---")
//         a = Math.floor(a/10);
//         b = Math.floor(b/10);
//     }
//     if(carry)
//     {
//        return carry.toString() + result;
//     }
//     return result;
};
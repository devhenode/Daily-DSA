/* You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

 

Example 1:

Input: num = 9669
Output: 9969
Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.
Example 2:

Input: num = 9996
Output: 9999
Explanation: Changing the last digit 6 to 9 results in the maximum number.
Example 3:

Input: num = 9999
Output: 9999
Explanation: It is better not to apply any change.
*/

// Solution 1 - Most optimum,  Memory 52.75mb
var maximum69Number  = function(num) {
    
    return parseInt(num.toString().replace('6', '9'));
};

// 0(1) - Memory 53.40mb
var maximum69Number  = function(num) {
    
    // let num_str = num.toString(
    for (let i = 0; i < num.toString().length; i++) { 

        if (num.toString()[i] === '6') {
            return parseInt(num.toString().substring(0, i) + '9' + num.toString().substring(i + 1))
        }
    }
    return num;
};


// Solution 2 - 0(1) - Memory 54.30mb
var maximum69Number  = function(num) {
    
    let num_str = num.toString()
    for (let i = 0; i < num_str.length; i++) { 
        
        if (num_str[i] === '6') {
            return parseInt(num_str.substring(0, i) + '9' + num_str.substring(i + 1))
        }
    }
    return num;
};
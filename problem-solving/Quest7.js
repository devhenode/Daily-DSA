/*
217. Contains Duplicate
Solved
Easy
Topics
premium lock icon
Companies
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.
*/

// My Correct code - thanks to neetcode hints, Memory: 70 MB, Time: 14ms
// Time complexity O(n) - linear time
// Space complexity O(n) - linear time

var containsDuplicate = function(nums) {
    const unique_num = new Set(nums);
    return unique_num.size !== nums.length
};

// my incorrect code
/*
    let nums_check = []
    let num_overall = 0
  for (let i = 0; i < nums.length; i++) {
    let prev_num = nums[i];
    nums_check = nums[i];
    for (let j = 1; j < nums.length + 1; j++) {
        let next_num = nums[j];
        
        if (prev_num == next_num) {
            return true
        }
        else {
            return false
        }
       
    }   
console.log(nums_check)
  */
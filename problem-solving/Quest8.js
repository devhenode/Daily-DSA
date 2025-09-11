/*
347. Top K Frequent Elements
Solved
Medium
Topics
premium lock icon
Companies
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2

Output: [1,2]

Example 2:

Input: nums = [1], k = 1

Output: [1]

Example 3:

Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

Output: [1,2]

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let freqNum = {}
    for (let num of nums) {
        freqNum[num] = (freqNum[num] || 0) + 1;
    }    

    const buckets = Array(nums.length + 1).fill().map(() => []);
    for (let num in freqNum) {
        buckets[freqNum[num]].push(Number(num));  
    }

    const result = []
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);
        }
    }
    
    return result.slice(0, k)
};
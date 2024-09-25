# Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

# Specifically, ans is the concatenation of two nums arrays.

# Return the array ans.

# My Best Approach so far

class Solution:
  def getConcatenation(self, nums: List[int]) -> List[int]:
    ans = nums + nums

    return ans

# My Best Approach so far

# This approach takes 67milliseconds, and beats 78% people
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        ans = []

        for i in nums:
           ans.append(i)

        return ans + ans
# This approach takes 67milliseconds


# Fastest Approach 
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        return nums*2
        
# Fastest Approach 

        


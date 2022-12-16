class Solution(object):
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        ans = 0
        for i in range(len(nums)):
            if (nums[i] == target):
                return i
            elif (nums[i] < target):
                ans = i
                if (i + 1 == len(nums)):
                    return ans + 1
            elif (nums[i] > target):
                if (i == 0):
                    return ans
                return ans + 1
        return ans
int searchInsert(int* nums, int numsSize, int target){
    int ans = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == target) {
            return i;
        } else if (nums[i] < target) {
            ans = i;
            if (i +  1 == numsSize) return ans + 1;
        } else if (nums[i] > target) {
            if (i == 0) return ans;
            return ans + 1;
        }
    }
    return ans;
}

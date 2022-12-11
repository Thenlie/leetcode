int removeElement(int* nums, int numsSize, int val) {
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == val) {
            for (int j = i; j < numsSize; j++) {
                if (j + 1 == numsSize) {
                    nums[j] = 0;
                    break;
                }
                nums[j] = nums[j+1];
            }
            i--;
            numsSize--;
        }
    }
    return numsSize;
}

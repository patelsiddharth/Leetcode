/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let low = 0, high = nums.length - 1;
    // low -> mid; mid + 1 -> high
    
    const merge = (low, mid, high) => {
        let i = low, j = mid + 1, temp = [];
        while (i <= mid && j <= high) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i]);
                i++;
            } else {
                temp.push(nums[j]);
                j++;
            }
        }

        while (i <= mid) {
            temp.push(nums[i]);
            i++;
        }

        while (j <= high) {
            temp.push(nums[j]);
            j++;
        }

        for(let i = 0; i < temp.length; i++) {
            nums[low + i] = temp[i];
        }
    }

    const mergeSort = (low, high) => {
        if (low >= high) {
            return;
        }

        let mid = Math.floor((low + high)/2);
        mergeSort(low, mid);
        mergeSort(mid + 1, high);
        merge(low, mid, high);
    }

    mergeSort(0, nums.length - 1);
    return nums;
};
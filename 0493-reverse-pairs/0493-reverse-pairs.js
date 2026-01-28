/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let count = 0;

    const countPair = (low, mid, high) => {
        let l = low, h = mid + 1
        for(let i = low; i <= mid; i++) {
            while(h <= high && nums[i] > 2 * nums[h]) {
                h++;
            }
            count += h - (mid + 1)
        }
    }
    
    const merge = (low, mid, high) => {
        let left = low, right = mid + 1, temp = [];

        while(left <= mid && right <= high) {
            if (nums[left] <= nums[right]) {
                temp.push(nums[left]);
                left++;
            } else {
                temp.push(nums[right]);
                right++;
            }
        }

        while(left <= mid) {
            temp.push(nums[left])
            left++;
        }
        while(right <= high) {
            temp.push(nums[right])
            right++;
        }
        for(let i = 0; i < temp.length; i++) {
            nums[low + i] = temp[i];
        }
    }

    const mergeSort = (i, j) => {
        if (i >= j) return;

        let mid = Math.floor((i + j) / 2);
        mergeSort(i, mid);
        mergeSort(mid + 1, j);
        countPair(i, mid, j);
        merge(i, mid, j);
    }
    
    mergeSort(0, nums.length - 1);
    
    return count;
};
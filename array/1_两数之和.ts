/**
 * @filem 两数之和
 * @author felix
 * https://leetcode-cn.com/problems/two-sum/
 */

const nums = [2, 7, 11, 15];
const target = 9;

const twoSum = (nums: Array<number>, target: number) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] !== undefined) {
            return [map[target - nums[i]], i];
        }
        map[nums[i]] = i;
    }
};

console.log(twoSum(nums, target));
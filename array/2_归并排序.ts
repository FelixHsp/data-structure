/**
 * @file 归并排序 https://leetcode-cn.com/problems/sorted-merge-lcci/solution/dao-xu-fang-fa-lai-he-bing-shu-zu-by-edwardnan/
 * @author felix
 */

const A = [2, 3, 5];
const B = [1, 4, 6];
const m = 3;
const n = 3;

const merge = (A: Array<number>, m: number, B: Array<number>, n: number): Array<number> => {
    let i = m - 1, j = n - 1, k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (A[i] < B[j]) {
            A[k] = B[j];
            k--;
            j--;
        }
        else {
            A[k] = A[i];
            k--;
            i--;
        }
    }

    while (j >= 0) {
        A[k] = B[j];
        k--;
        j--;
    }
    return A;
};

console.log(merge(A, m, B, n));
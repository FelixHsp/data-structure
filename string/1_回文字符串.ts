/**
 * @file 回文字符串
 * @author felix
 */

/*
示例 1: 输入: "aba"
输出: True
示例 2:
输入: "abca"
输出: True
解释: 你可以删除c字符。
注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
*/

const validPalindrome = (str: string) => {
    const isPalindrome = (lt: number, rt: number) => {
        while (lt < rt) {
            if (str[lt] !== str[rt]) {
                return false;
            }
            lt++;
            rt--;
        }
        return true;
    };

    let i = 0, j = str.length - 1;
    
    while (i < j && str[i] === str[j]) {
        i++;
        j--;
    }

    if (isPalindrome(i + 1, j)) {
        return true;
    }
    if (isPalindrome(i, j - 1)) {
        return true;
    }
    
    return false;
};

console.log(validPalindrome('abba'));
console.log(validPalindrome('abcd'));
console.log(validPalindrome('abcca'));
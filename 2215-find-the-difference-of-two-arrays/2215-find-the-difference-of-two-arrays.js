/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let res = [[], []];
    for(let n1 of nums1) {
        if (!nums2.includes(n1) && !res[0].includes(n1))
            res[0].push(n1);
    }

    for(let n2 of nums2) {
        if (!nums1.includes(n2) && !res[1].includes(n2))
            res[1].push(n2);
    }

    return res;
};
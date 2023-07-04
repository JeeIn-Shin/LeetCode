/**
 * @param {number[]} nums
 * @return {number}
 */

//이전에 작성한 코드는
//sort 함수로 인해 최악의 경우 시간복잡도가 O(nlogn) 이 나옴

//그래서 새롭게 생각한 방식

// 1 정렬을 하지 않고
// 2 전체 배열에서 하나만 존재하는 애를
// 3 찾아야함


// 시공간복잡도 모두 O(n)이하 아닌가!
var singleNumber = function(nums) {

    let res = new Set();
    let TriSum = 0;
    
    let WholeSum = nums.reduce((acc, cur) => acc + cur, 0);

    for(let num of nums)    {
        //가지고 있지 않다면 
        if(!(res.has(num)))    {
            res.add(num);
            TriSum += (3 * num);
        }
    }
    
    return (TriSum - WholeSum) / 2;
};
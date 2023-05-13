/**
 * @param {string} s
 * @return {number}
 */

// 1. 모든 substring 찾기 -> 이전의 subarray 같은?
// 2. set 이용하기? 
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    //삭제 위치 기억
    let left = 0;
    let output = new Set();

    //반복되는 문자열이 있는지 먼저 찾아줄껀데
    for(let i = 0; i < s.length; i++)   {
        //중복되는 문자가 있다면 삭제
        // ????????????????????????????
        // 왜 if로 하면 안되는거지
        while(output.has(s[i])) {
            // 앞에서부터 지워줄꺼임
            output.delete(s[left]);
            left++;
        }
        
        //중복되지 않는거면 넣어주고
        output.add(s[i]);
        maxLen = Math.max(maxLen, output.size);
        //console.log(output);
    }

    return maxLen;
};
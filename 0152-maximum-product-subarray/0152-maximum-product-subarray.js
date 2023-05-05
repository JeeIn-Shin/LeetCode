/**
 * @param {number[]} nums
 * @return {number}
 */
let maxProduct = (nums) => {
    if(nums.length === 1)
        return nums[0] * 1;
    
    let output = [];
    let zeroPos = [];
    //0이 여러개 있다면?
    for(let i = 0; i < nums.length; i++)   {
        if(nums[i] === 0)  {
            let cur = nums.indexOf(nums[i], i)
            zeroPos.push(cur);
        }
    }
    zeroPos.push(nums.length);
    
    if(zeroPos.length > 0)
        output.push(0);
    
    //0을 기준으로하는 구간합
    let preIndex = 0;
    for(let i = 0; i < zeroPos.length; i++) { 
        let product = 1;
        let section = [];
        
        if(preIndex === zeroPos[i])
            product = nums[preIndex];
        
        for(let j = preIndex; j < zeroPos[i]; j++) {
            section.push(nums[j]);
            product *= nums[j];
        }
 
        //후보군1) 0 사이에 곱이 양수일때
        if(product > 0)
            output.push(product);

        //후보군2) 0 사이에 곱이 음수일때
        //"시작점 ~ 마지막 음수 직전" 혹은 "첫 음수 직후 ~ 마지막" 둘 중 더 큰 거!
        else if(product < 0)    {
            let negative = [];

            for(let k = 0; k < section.length; k++)  {
                if(section[k] < 0)
                    negative.push(k);
            }
            //시작점 - preIndex
            //마지막 음수 직전 인덱스 - negative.pop();
            //첫 음수 직후 인덱스 - negative.shift();
            let lastNegative = 0;
            let firstNegative = 0;
            
            if(negative.length === 1)   {
                lastNegative = negative.pop();
                firstNegative = lastNegative;
            }
            else    {
                lastNegative = negative.pop();
                firstNegative = negative.shift();
            }

            //구간 길이에 따라
            if(section.length === 1) // 구간 길이1
                output.push(1 * section[0]);
            else    {                // 구간 길이 2이상
                let a = 1;
                for(let k = 0; k < lastNegative; k++)  {
                    a *= section[k];
                }

                let b = 1;
                for(let k = firstNegative + 1; k < section.length; k++)  {
                    b *= section[k];
                }
                output.push(Math.max(a, b));
            }
        }
        preIndex = zeroPos[i] + 1;
    }

    return Math.max(...output);
};
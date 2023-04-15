/**
 * @param {number[]} stones
 * @return {number}
 */
let lastStoneWeight = (stones) => {
    //let battle = [];

    while(stones.length > 1)  {
        stones.sort((a, b) => a - b);
        
        let right = stones[stones.length - 1];
        let left = stones[stones.length - 2];
        
        if(right === left)
            stones.splice(stones.length - 2, 2);
        else    {
            stones.splice(stones.length - 2, 2, right - left);
        }
    }
    
    return stones.length ? stones[0] : 0;
};
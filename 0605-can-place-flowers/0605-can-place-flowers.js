/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (flowerbed.length === 1 && flowerbed[0] === 0)
        return true;

    let cnt = n;
    let cur = 0;
    let lastIdx = flowerbed.length - 1;

    while (cur <= lastIdx && cnt !== 0) {
        let pre = cur - 1;
        let next = cur + 1;

        if (cur === 0) {
                if (flowerbed[cur] === 0 && next <= lastIdx && flowerbed[next] === 0) {
                    flowerbed[cur] = 1;
                    cnt--;
                }
        }
        else if (cur === lastIdx)    {
            if (flowerbed[cur] === 0 && flowerbed[pre] === 0)   {
                flowerbed[cur] = 1;
                cnt--;
            }

        }
        else {
            if (flowerbed[cur] === 0 && next <= lastIdx && pre >= 0 && flowerbed[next] === 0 && flowerbed[pre] === 0)   {
                flowerbed[cur] = 1;
                cnt--;                
            }
        }
        cur++;
    }
    if (cnt === 0)
        return true;
    return false;
};
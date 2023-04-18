/**
 * @param {number} n
 * @return {boolean}
 */
let getDigit = (n) => {
    let digit = n.toString().length;
    let temp = 0;
    
    if(n === 1 || n === 7)
        return true;
    
    if(digit === 1)
        return false;

    for(let i = 0; i < digit; i++)  {
        if(i === (digit - 1))
            temp += Math.pow(n, 2);
        else    {
            temp += Math.pow(Math.floor(n / Math.pow(10, digit - i - 1)), 2);
            n = Math.floor(n % Math.pow(10, digit - i - 1));
        }
    }

    return temp === 1 ? true : getDigit(temp);
}

let isHappy = (n) => {    
    return getDigit(n);
};
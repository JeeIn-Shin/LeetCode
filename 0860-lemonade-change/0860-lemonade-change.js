/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;

    for (let bill of bills) {
        if (bill === 5)
            five++;
        if (bill === 10)    {
            if (five > 0) {
                five--;
                ten++;
            } else {
                return false;
            }
        }
        //20에서는 five가 무조건 1이상 있어야함
        if (bill === 20)    {
            if (five >= 3)  {
                five = five - 3;
            } else if (five > 0 && ten > 0)   {
                five--;
                ten--;
            } else {
                return false;
            }

        }
    }
    return true;
};
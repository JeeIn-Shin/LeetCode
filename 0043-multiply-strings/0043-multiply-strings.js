/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let multiply = (num1, num2) => {
    let temp1 = 0; //1의 자리
    let output = [];
    
    if(num1 === "0" || num2 === "0")
        return "0";

    num1 = num1.split("").reverse().join("");
    num2 = num2.split("").reverse().join("");

    for(let i = 0; i < num1.length; i++)  {
        let temp2 = 0; //10의 자리
        let midResult = "";
        for(let j = 0; j < num2.length; j++)  {
            temp1 = temp2 + ((num1[i] * num2[j]) % 10);
            
            if(temp1 > 9 || j !== num2.length - 1)  {
                temp2 = Math.floor((num1[i] * num2[j]) / 10) + Math.floor(temp1 / 10);
                temp1 = temp1 % 10;
            }
            else
                temp2 = Math.floor((num1[i] * num2[j]) / 10);
            
            midResult = midResult.concat(temp1);

            if(j === num2.length - 1)
                midResult = midResult.concat(temp2);
        }   
        midResult = midResult.split("").reverse().join("");
        
        let k = i;
        while(k--)
            midResult += '0';

        output.push(midResult);
    }

    return (output.reduce((acc, digit) => acc + BigInt(digit), 0n).toString());
};
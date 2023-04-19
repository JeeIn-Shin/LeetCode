/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = (matrix) => {
    let n = matrix[0].length; // 4
    let startX = 0;
    let m = matrix.length; // 3
    let startY = 0;
    let output = [];

    while(startX < n && startY < m) {
        for(let i = startX; i < n; i++)
            output.push(matrix[startY][i]);
        startY++;

        for(let i = startY; i < m; i++)
            output.push(matrix[i][n - 1]);
        n--;
        
        if (startY < m) {
            for(let i = n - 1; i > startX - 1; i--)
                output.push(matrix[m - 1][i]);
            m--;
        }

        if(startX < n) {
            for(let i = m - 1; i > startY - 1; i--)
                output.push(matrix[i][startX]);
            startX++;   
        }  
    }

    return output;
};
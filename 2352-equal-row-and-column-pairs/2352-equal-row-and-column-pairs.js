/**
 * @param {number[][]} grid
 * @return {number}
 */

let getCols = (grid) => {
    let cols = [];
    
    for(let i = 0; i < grid.length; i++)    {
        let col = [];
        for(let j = 0; j < grid[0].length; j++) {
            col.push(grid[j][i]);
        }
        cols.push(col);
    }

    return cols;
}

var equalPairs = function(grid) {
    let count = 0;

    let cols = getCols(grid);

    for(let col of cols) {
        for(let row of grid)    {
            if(row.toString() === col.toString())
                count++;
        }
    }

    return count;
};
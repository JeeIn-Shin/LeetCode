/**
 * @param {number[][]} grid
 * @return {number}
 */

//근데 이동할때마다 1분씩이 아니라
//위치한 곳에서 4방향으로 이동하는 순간에 1 (동서 동시에 이동하면 그게 1)
//동시가 좀 포인트네 흠

var orangesRotting = function(grid) {
    let [m, n] = [grid.length, grid[0].length]; // 1, 1

    //썩은 오렌지 위치부터 찾고, 썩은 오렌지 여러개 존재 가능함
    let posRottenOrange = [];
    let freshOrange = 0;
    // 원래 filter를 이용해서 썩은 오렌지 위치 찾을려고 했는데 그게 안되길래;
    // 그냥 조용히 이중 loop문 쓰기로 함
    for(let i = 0; i < m; i++)  {
        for(let j = 0; j < n; j++)  {
            if(grid[i][j] === 2)
                posRottenOrange.push([i, j]);
            if(grid[i][j] === 1)
                freshOrange++;
        }
    }        
    //썩은 오렌지 위치부터 동서남북 네 방향을 확인하는데
    //1이 있으면 해당 위치로 옮겨서 썩게만들고(값 2로)
    //0 이 있으면 이동하지 못함
    let mDir = [1, 0, -1, 0];
    let nDir = [0, 1, 0, -1];

    let minute = 0;

    //각 오렌지 위치부터 시작해서 4 방향으로 돌아야함
    while(posRottenOrange.length)   {
        //posRottenOrange에서 배열 앞에서 가져와야함
        let init = posRottenOrange.length;        
        while(init--) {
            // pop에서 shift으로 바꾸니까 돌아감 근데 왜?????????
            let [x, y] = posRottenOrange.shift();
            
            for(let i = 0; i < 4; i++)  {
                //안변하는게 당연함
                let row = mDir[i] + x;
                let col = nDir[i] + y;

                // 1, 1이 들어와버림, [0,0] [0,1] 밖에 없는데
                //범위 안에 있는게 맞는지

                let isWithinRange = (row < 0 || row >= m || col < 0 || col >= n);
                //어디서 계속 에러 터지나 했는데 [[0, 2]] 들어올때 터지고 있음
                //그럼 isWithinRange가 제역할을 못하고 있다는건데
                //아 x 범위를 n 으로 해둠 미친자

                //좌우양옆 1이라면
                if(!(isWithinRange) && grid[row][col] === 1)    {
                    grid[row][col] = 2;
                    posRottenOrange.push([row, col]);
                    freshOrange--;
                }
            }
        }
        console.log(posRottenOrange);
        // shift
        // [ [ 1, 0 ], [ 0, 1 ] ]
        // [ [ 1, 1 ], [ 0, 2 ] ]
        // [ [ 2, 1 ] ]
        // [ [ 2, 2 ] ]
        // []

        // pop
        // [ [ 1, 0 ], [ 0, 1 ] ]
        // [ [ 1, 0 ], [ 1, 1 ] ]
        // [ [ 1, 0 ], [ 2, 2 ] ]
        // []

        if(posRottenOrange.length)
            minute++;
        //이거 어디서 놓쳤는지는 모르겠는데, 전부다 2로 바꼈는데도 계속 loop문이 돌고있었음

        //수정 후에 [1, 2]에서 막힘
        // loop 문 결과 확인해보니까
        // posRottenOrange []
        // grid [ [ 1, 2 ] ]
        // 이렇게 나옴
        // 근데 왜? 왜 grid 값이 안변하지
    }
    return freshOrange === 0 ? minute : -1;
};
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
let leastInterval = (tasks, n) => {

    if(n === 0)
        return tasks.length;

    let map;

    map = tasks.reduce((acc, el) => acc.set(el, (acc.get(el) || 0) + 1), new Map());

    map = Array.from(map)
    .sort(([key1, value1], [key2, value2]) => value2 - value1)

    let max = map[0][1]
    let idle = n * (max - 1); // 2 * 2 -> 4

    let count = -1;
    map.forEach(([key, value]) => {
        if(value === max)   {
            count++;
        }
    })

    let remain = tasks.length - (max + count + idle);

    return max + idle + count + (remain > 0 ? remain : 0)
};
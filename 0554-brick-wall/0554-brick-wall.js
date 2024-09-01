/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    let hash = {}, max = 0;
    for(let i = 0; i < wall.length; i++)
    {
        let ini = 0;
        for(let j = 0; j < wall[i].length - 1; j++)
        {
            ini += wall[i][j];
            hash[ini] = hash[ini] ? hash[ini] + 1 : 1;
        }
    }
    Object.values(hash).forEach(item => {
        max = Math.max(max, item);
    })
    return wall.length - max;
};
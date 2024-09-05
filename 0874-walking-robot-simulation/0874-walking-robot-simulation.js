/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let x = 0, y = 0, 
        res = 0, facing = 0,
        map = new Map(),
        direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    for(let obs of obstacles)
    {
        map.set(`${obs[0]}-${obs[1]}`, 1);
    }
    
    for(let c of commands)
    {
        if(c === -1)
        {
            facing = (facing + 1) % 4;
        }
        else if(c === -2)
        {
            if(facing === 0)
                facing = 3
            else 
                facing = (facing - 1) % 4;
        }
        else
        {
            console.log(facing)
            let dx = direction[facing][0], dy = direction[facing][1];
            for(let i = 1; i <= c; i++)
            {
                if(map.has(`${x+dx}-${y+dy}`))
                {
                   break;
                }
                x = x + dx;
                y = y + dy;
            }
        }
        
        res = Math.max(res, x*x + y*y);
    }
    return res;
};
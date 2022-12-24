/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let obj = {};
    edges.forEach(edge => {
        if(obj.hasOwnProperty(edge[0]))
        {
            obj[edge[0]].push(edge[1])
        }
        else
        {
            obj[edge[0]] = [edge[1]]
        }
        
        if(obj.hasOwnProperty(edge[1]))
        {
            obj[edge[1]].push(edge[0])
        }
        else
        {
            obj[edge[1]] = [edge[0]]
        }
    });
    let set = new Set();
    const addEdgesToSet = function(vertex) {
        set.add(vertex);
        let neighbours = obj[vertex];
        Array.isArray(neighbours) && neighbours.length > 0 && neighbours.forEach(neighbour => {
            if(!set.has(neighbour))
            {
                addEdgesToSet(neighbour);
            }
        }) 
    }
    
    addEdgesToSet(source)
    
    return set.has(destination)
};
/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let res = [];
    title.split(" ").forEach(x => {
        x = x.toLowerCase();
        if(x.length <= 2)
        {
            res.push(x);
        }
        else
        {
            res.push(x.substring(0,1).toUpperCase() + x.substring(1));
        }
    });
    return res.join(" ");
};
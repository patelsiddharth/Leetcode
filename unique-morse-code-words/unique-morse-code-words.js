/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let mcObj = {
        a : ".-",
        b : "-...",
        c : "-.-.",
        d : "-..",
        e : ".",
        f : "..-.",
        g : "--.",
        h : "....",
        i : "..",
        j : ".---",
        k : "-.-",
        l : ".-..",
        m : "--",
        n : "-.",
        o : "---",
        p : ".--.",
        q : "--.-",
        r : ".-.",
        s : "...",
        t : "-",
        u : "..-",
        v : "...-",
        w : ".--",
        x : "-..-",
        y : "-.--",
        z : "--..",
    }
    let arr =[];
    words.forEach(word => {
        let t = "";
        for(let ch of word)
        {
            t = t + mcObj[ch];
        }
        if(!arr.includes(t))
        {
            arr.push(t);
        }
    })
    return arr.length;
};
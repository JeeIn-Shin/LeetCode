/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let backspaceCompare = (s, t) => {
    let sharp = 0;
    s = [...s];
    t = [...t];

    while(s.includes('#'))    {
        sharp = s.indexOf('#');
        
        if(sharp !== 0)
            s.splice(Math.abs(sharp - 1) , 2);
        else
            s.splice(sharp, 1);
    }

    while(t.includes('#'))    {
        sharp = t.indexOf('#');

        if(sharp !== 0)
            t.splice(Math.abs(sharp - 1) , 2);
        else
            t.splice(sharp, 1);
    }
    
    if(s.toString() === t.toString())
        return true;
    else
        return false;
};
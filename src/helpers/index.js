// converte numero em moeda
export const paraMoeda = n => {
    if (isNaN(n)) return n;
    n = parseFloat(n);
    if (n > 999) {
        let dec = n.toFixed(2).slice(-3).replace('.', ',');
        return [].slice.call((n).toFixed(2).slice(0,-3), 0)
        .reverse()
        .map((v,i) => (++i%3==0)?'.'+v:v)
        .reverse()
        .join('') + dec;
    }

    return n.toFixed(2).replace('.', ',');
};
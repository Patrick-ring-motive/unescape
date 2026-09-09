const unescapeFlat = (() => {
    const x = String.fromCharCode(92);
    const xx = x + x;
    const q = String.fromCharCode(39);
    const qq = String.fromCharCode(34);
    const t = String.fromCharCode(9);
    const n = String.fromCharCode(10);
    const r = String.fromCharCode(13);
    const o = String.fromCharCode(0);
    const v = String.fromCharCode(11);
    const b = String.fromCharCode(8);
    const f = String.fromCharCode(12);
    return (txt) => {
        txt = String(txt ?? '');
        while (txt.includes(xx)) {
            txt = txt.replaceAll(xx, x);
        }
        return txt.replaceAll(x + 't', t)
          .replaceAll(x + qq, qq)
          .replaceAll(x + q, q)
          .replaceAll(x + 'r', r)
          .replaceAll(x + 'n', n)
          .replaceAll(x + '0', o)
          .replaceAll(x + 'v', v)
          .replaceAll(x + 'b', b)
          .replaceAll(x + 'f', f);
    };
})();

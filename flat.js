const unescapeFlat = (() => {
  const x = String.fromCharCode(92);
  const xx = x + x;
  const esc = Object.freeze({
  "'" : String.fromCharCode(39),
  '"' : String.fromCharCode(34),
    t : String.fromCharCode(9),
    n : String.fromCharCode(10),
    r : String.fromCharCode(13),
  "0" : String.fromCharCode(0),
    v : String.fromCharCode(11),
    b : String.fromCharCode(8),
    f : String.fromCharCode(12)
  });
  return (txt) => {
    txt = String(txt ?? '');
    while (txt.includes(xx)) {
      txt = txt.replaceAll(xx, x);
    }
    for(const char in esc){
      txt = txt.replaceAll(x + char, esc[char]).replaceAll(x + esc[char], esc[char]);
    }
    return txt;
  };
})();

const v = ['a', 'e', 'i', 'o', 'u', 'y'];
const a = ['z','q','x','s','w','c','d','r','f','v','b','g','t','h','n','m','j','k','p','l'];
const d = {'v': v, 'a': a};
var r = '';

export function de(h) {
  for (var x in h) {
    var o = h[x].charAt(0);
    var t = h[x].substring(1);
    r += d[o][parseInt(t)];
  }
  return r;
}

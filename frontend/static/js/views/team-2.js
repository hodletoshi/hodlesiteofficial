const v = ['a', 'e', 'i', 'o', 'u', 'y'];
const a = ['z','q','x','s','w','c','d','r','f','v','b','g','t','h','n','m','j','k','p','l'];
const d = {'v': v, 'a': a};
var k = 0;

function de(h) {
  var r = '';
  for (x in h) {
    o = x.charAt(0);
    t = x.charAt(1);
    c = d[t][o];
  }
  return r;
}

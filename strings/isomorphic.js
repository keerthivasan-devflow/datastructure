function isomorphic(s, t) {
  if (s.length !== t.length) return false;

  let smap = {};
  let tmap = {};

  for (let i = 0; i < s.length; i++) {
    if (!smap[s[i]] && !tmap[t[i]]) {
      smap[s[i]] = t[i];
      tmap[t[i]] = s[i];
    } else if (tmap[t[i]] !== s[i] || smap[s[i]] !== t[i]) return false;
  }
  
  return true;
}

console.log(isomorphic("egg", "add"));
console.log(isomorphic("foo", "bar"));

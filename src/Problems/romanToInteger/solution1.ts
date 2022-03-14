const dic: {
  [property: string]: number;
} = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s: string): number => {
  let value = 0;
  for (let i = 0; i < s.length; i++) {
    dic[s[i]] < dic[s[i + 1]] ? (value -= dic[s[i]]) : (value += dic[s[i]]);
  }
  return value;
};

export default romanToInt;

function longestCommonPrefix(strs: string[]): string {
  let prefix: string = "";
  const firstStr = strs[0];
  // forloop the first str
  for (let i = 0; i < firstStr.length; i++) {
    // pick every charactor from the first string
    let charactor = firstStr[i];
    // forloop the whole strs
    for (let j = 0; j < strs.length; j++) {
      // check the picked charactor is same as the current.
      if (charactor !== strs[j][i]) {
        return prefix;
      }
    }
    prefix = prefix + charactor;
  }
  return prefix;
}

export default longestCommonPrefix;

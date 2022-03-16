function isValid(s: string): boolean {
  if (s.length === 1) {
    return false;
  }

  const closeToOpen = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const charactor = s[i];
    if (closeToOpen[charactor]) {
      if (stack[stack.length - 1] === closeToOpen[charactor]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(charactor);
    }
  }

  if (stack.length > 0) return false;
  return true;
}

export default isValid;

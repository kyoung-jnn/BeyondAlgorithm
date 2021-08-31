const reverse = (arr) => {
  let newArr = "";
  for (const char of arr) {
    if (char == "(") newArr += ")";
    else newArr += "(";
  }

  return newArr;
};

const checkStr = (str) => {
  let stack = [];
  if (str[0] === ")") {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (stack.length === 0) {
      stack.push(str[i]);
      continue;
    }

    if (stack[stack.length - 1] === "(" && str[i] === ")") {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

function solution(p) {
  if (checkStr(p)) {
    return p;
  }
  // 조건 1
  if (p === "") {
    return "";
  }

  let newStr = "";
  let u = "";
  let v = "";
  // 조건 2
  let count = 0;
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      count += 1;
      u += p[i];
    } else {
      count -= 1;
      u += p[i];
    }

    if (count === 0) {
      v += p.substring(i + 1);
      break;
    }
  }

  // 조건 3

  if (checkStr(u)) {
    u += solution(v);
    return u;
  } else {
    newStr += "(";
    newStr += solution(v);
    newStr += ")";
    u = u.slice(1, -1);
    newStr += reverse(u);
  }

  return newStr;
}

solution("(()())()");

function solution(n, arr) {
  let answer = [];

  const isPrime = (num) => {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  for (num of arr) {
    const target = parseInt(num.toString().split("").reverse().join(""));

    isPrime(target) && answer.push(target);
  }

  return answer;
}

console.log(solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));

function solution(orders, course) {
  let answer = [];
  let parsedOrders = orders.map((order) => {
    return order.split("");
  });

  function combination(order, selectNum) {
    const result = [];
    if (selectNum === 1) return order.map((item) => [item]);

    order.forEach((menu, index, order) => {
      const fixed = menu;
      const restOrders = order.slice(index + 1);
      const restCombination = combination(restOrders, selectNum - 1);
      const fixedCombination = restCombination.map((item) => [fixed, ...item]);
      result.push(...fixedCombination);
    });

    return result;
  }

  course.map((size) => {
    let temp = {};
    let max = 0;

    parsedOrders.forEach((order) => {
      combination(order, size).forEach((orders) => {
        const menu = orders.sort().join("");
        temp[menu] === undefined
          ? (temp[menu] = 1)
          : ((temp[menu] += 1), (max = max < temp[menu] ? temp[menu] : max));
      });
    });

    Object.entries(temp).map(([key, value]) => {
      if (value === max) {
        answer.push(key);
      }
    });
  });

  return answer.sort();
}

solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]);

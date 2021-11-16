const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const temp = arr[mid];
    if (temp === target) {
      return mid;
    } else if (temp < target) {
      left = mid + 1;
    } else if (temp > target) {
      right = mid - 1;
    }
  }
};

binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90], 10);

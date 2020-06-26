function merge(a, b) {
  let results = [];
  let i = 0;
  let j = 0;
  let count = a.count + b.count
  while (i < a.arr.length && j < b.arr.length) {
    if (a.arr[i] > b.arr[j]) {
      results.push(b.arr[j]);
      j++;
      count += a.arr.length - i
    } else {
      results.push(a.arr[i])
      i++;
    }
  }
  while (i < a.arr.length) {
    results.push(a.arr[i])
    i++;
  }
  while (j < b.arr.length) {
    results.push(b.arr[j])
    j++;
  }
  return {arr: results, count}
}


export const mergeSort =(obj) => {
  if (obj.arr.length <= 1) return obj;
  let mid = Math.floor(obj.arr.length / 2);
  let left = mergeSort({ arr: obj.arr.slice(0, mid), count: obj.count });
  let right = mergeSort({ arr: obj.arr.slice(mid), count: obj.count });
  return merge(left, right);
}

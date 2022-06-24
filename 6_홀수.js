// 7개의 자연수 있으면 이 들 중 홀수를 골라 합을 구하고
// 고른 홀수들의 최소값을 찾는다.

// 미친 코드
// function solution(...arr) {
//   let total = 0;
//   let odd = arr.filter(e => {
//     if (e % 2 >= 1) {
//       return e;
//     }
//   });
//   for (let i = 0; i < odd.length; i++) {
//     total += odd[i];
//   }
//   let min = Math.min(...odd);
//   return {
//     total,
//     min,
//   }
// }

function solution(...arr) {
  let answer = [];
  let total = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i of arr) {
    if (i % 2 === 1) {
      total += i;
      if (min > i) {
        console.log(i);
        min = i;
      }
    }
  }
  return {
    total,
    min,
  }
}

console.log(solution());
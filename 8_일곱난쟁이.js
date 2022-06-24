// 일곱 난쟁이
// 9개의 수 중 2개를 제거 후 총합이 100이 되는 경우를 구하면 된다.

// 미친 코드
// function solution(...arr) {
//   let total = 0;
// }

// 모범 답안
function solution(arr) {
  let answer = arr;
  let total = arr.reduce((a, b) => a + b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (total - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

// 9개의 수의 총합을 구하고 9개 중 2개를 뽑아 2개의 합에 총합을 빼서 100이되면된다.
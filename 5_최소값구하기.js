// 최소값 구하기
// 7개의 수가 주어지면 그 수 중 가장 작은수를 출력

// 미친 코드
// function solution(...arr) {
//   let answer = Math.min(...arr);
//   return answer;
// }

// 미친 코드2
// function solution(...arr) {
//   let answer = 0;
//   let min = Number.MAX_SAFE_INTEGER;
//   arr.forEach(e => {
//     if (min > e) {
//       min = e;
//     }
//   });
//   answer = min;
//   return answer;
// }

// 최소값은 구할 경우 최소값 변수를 아주 큰 수로 초기화해놓자.
// Number.Max_SAFE_INTEGER (가장 큰 정수)
// function solution(...arr) {
//   let answer = 0;
//   let min = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }
//   answer = min;
//   return answer;
// }

// console.log(solution(331, 33, 882, 73, 73, 43));
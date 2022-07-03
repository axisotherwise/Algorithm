// 세 수 중 최소값
// 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값 출력
// 정렬 사용 불가능

// function solution(a, b, c) {
//   let answer;
//   if (a < b && a < c) {
//     answer = a;
//   } else if (b < a && b < c) {
//     answer = b;
//   } else if (c < a && c < b) {
//     answer = c;
//   }
//   return answer;
// }

// function solution(...arr) {
//   let answer;
//   answer = Math.min(...arr);
//   return answer;
// }

// function solution(...arr) {
//   let answer = 100;
//   arr.forEach(e => {
//     if (answer > e) return answer = e;
//   });
//   return answer;
// }

// function solution(a, b, c) {
//   let answer;
//   if (a < b) {
//   answer = a; 
//   } else {
//   answer = b;
//   }
//   if (answer > c) {
//   answer = c;
//   }
//   return answer;
// }

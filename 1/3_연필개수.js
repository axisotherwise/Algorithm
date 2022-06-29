// 연필 개수
// 연필 1다스는 12자루
// 학생 1인당 연필을 1자루씩 나누어 준다고하면 N명이 학생수를 입력하면
// 필요한 연필의 다스 수를 계산

// function solution(n) {
//   let answer;
//   let pencil = 12;
//   if (n % 12 === 0) {
//     answer = n / pencil;
//   } else if (n % 12 >= 1) {
//     answer = (n / pencil) + 1;
//   }
//   return Math.floor(answer);
// }

// console.log(solution(37));
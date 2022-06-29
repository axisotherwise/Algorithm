// 중복문자제거
// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력
// 제거된 문자열의 각 문자는 원래 순서를 유지

// 미친 코드
// function solution(string) {
//   let answer;
//   let text = string.split("");
//   answer = text.filter((e, i) => {
//     return text.indexOf(e) === i;
//   });
//   return answer.join("");
// }

// 모범 답안
// function solution(string) {
//   let answer = "";
//   for (let i = 0; i < string.length; i++) {
//     // 최초 발견 인덱스 번호와 현재 돌고있는 인덱스 번호
//     if (string.indexOf(string[i]) === i) {
//       answer += string[i];
//     }
//   }
//   return answer;
// }

function solution(string, s) {
  let arr = string.split("");
  let answer = arr.filter(e => e === s);
  return answer.length;
}

console.log(solution("AAWS", "A"));
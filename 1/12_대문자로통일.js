// 대문자로 통일
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 통일하여 출력

// 미친 코드
// function solution(string) {
  // let answer;
  // let text = string.split("");
  // answer = text.join("").toUpperCase();
  // return answer;
// }

// 모범 답안
// function solution(string) {
//   let answer = "";
//   for (let i of string) {
//     if (i === i.toLowerCase()) answer += i.toUpperCase();
//     else answer += i;
//   }
//   return answer;
// }

// 모범 답안2
function solution(string) {
  let answer = string.toUpperCase();
  return answer;
}

console.log(solution("userId"));
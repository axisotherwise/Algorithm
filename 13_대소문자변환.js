// 대소문자 변환
// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 
// 대문자는 소문자로 소문자는 대문자로 출력

// 미친 코드
// function solution(string) {
//   let text = string.split("");
//   let arr = [];
//   text.map(e => {
//     if (e === e.toLowerCase()) {
//       arr.push(e.toUpperCase());
//     } else {
//       arr.push(e.toLowerCase());
//     }
//   });
//   return arr.join("");
// }

// 모범 답안
function solution(string) {
  let answer = "";
  for (let i of string) {
    if (i === i.toLowerCase()) answer += i.toUpperCase();
    else answer += i.toLowerCase();
  }
  return answer;
}

console.log(solution("StuDY"));
// 가장 긴 문자열
// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력
// 같은 길이의 문자열이 2개이상 존재하지않는다.

// 미친 코드
// function solution(...string) {
//   let arr = [];
//   string.map(e => arr.push(e.length));
//   let max = Math.max(...arr);
//   let answer = string.filter(e => {
//     if (e.length === max) {
//       return e;
//     }
//   });
//   return answer;
// }

// 모범 답안
function solution(string) {
  let answer = "";
  let max = Number.MIN_SAFE_INTEGER;
  for (let i of string) {
    if (i.length > max) {
      max = i.length;
      answer = i;
    }
  }
  return answer;
}
console.log(solution(["맥", "윈도우", "라이언달", "자바스크립트"]));
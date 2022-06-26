// 가운데 문자 출력
// 단어가 입력되면 그 단어의 가운데 문자를 출력
// 단어의 길이가 짝수일 경우 가운데 2개의 문자 출력

// 미친 코드
// function solution(string) {
//   let answer = "";
//   if (string.length % 2 >= 1) {
//     return answer = string.substr(string.length / 2, 1);
//   }
//   answer = string.substr(string.length / 2 - 1, 2);
//   return answer;
// }

// 모범 답안
// function solution(string) {
//   let answer = string.length % 2 === 0 
//     ? string.substr(string.length / 2 - 1, 2) 
//     : string.substr(string.length / 2, 1);
//   return answer;
// }

// 모범 답안2
// 길이가 홀수인 문자열을 2로 나누면 가운데 인덱스
function solution(string) {
  let answer = "";
  if (string.length % 2 >= 1) { // 홀수
    return answer = string.substring(string.length / 2, string.length / 2 + 1);
  } 
  answer = string.substring(string.length / 2 - 1, string.length / 2 + 1);
  return answer;
}

console.log(solution("studyy"));


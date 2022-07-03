// 대문자 찾기
// 한 개의 문자열을 입력받아 해당 문자열에 대문자가 몇개 있는지 출력

// ascii
// 대문자: 65~90
// A = 65 
// Z = 90
// 소문자: 97~122
// a = 97
// z = 122

// 미친 코드
// function solution(string) {
//   let answer = 0;
//   let text = string.split("");
//   text.filter(e => {
//     if (e === e.toUpperCase()) {
//       answer++;
//     }
//   });
//   return answer;
// }

// 모범 답안
function solution(string) {
  let answer = 0;
  for (let i of string) {
    if (i === i.toUpperCase()) {
      answer++;
    }
  }
  return answer;
}

console.log(solution("MacOs"))

// 한 개의 문자열을 입력받고 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에
// 몇개 존재하는지 출력

// 미친 코드
// function solution(og, word) {
//   let text = og.split("");
//   let arr = [];
//   let answer = text.filter(e => {
//     if (e === word) {
//       arr.push(e);
//     }
//   });
//   return arr.length;
// }

// 모범 답안

console.log(solution("aaloalsldaaaopwdsdb", "a"));
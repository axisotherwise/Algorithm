// A를 #으로
// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 A를 모두 #으로 바꾸세요.

// 미친 코드
// function solution(word) {
//   let answer;
//   let text = word.split("");
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === "A") {
//       text[i] = "#";
//     }
//   }
//   return text.join("");
// }

// 모범 코드
// function solution(word) {
//   let answer = word.replaceAll("A", "#");
//   return answer;
// }

// 모범 코드2
function solution(word) {
  let answer = word.replace(/A/g, "#");
  return answer;
}

console.log(solution("SMARTAAA"));
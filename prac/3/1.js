// 회문 문자열
// function solution(str) {
//   let score = 0;
//   let compare = str.split("").reverse().join("");
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === compare[i].toLowerCase()) {
//       score++;
//     }
//   }
//   return score ===  str.length ? "yes" : "no";
// }

function solution(str) {
  let answer = "yes";
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return "no";
    }
  }
  return answer;
}

console.log(solution("good"));
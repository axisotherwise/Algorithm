// 수 추출
// 48~57
// function solution(str) {
//   let result = [];
//   let arr = str.split("").filter(e => {
//     if (e.charCodeAt() < 57) {
//       result.push(e);
//     }
//   });
//   console.log(parseInt(result.join("")));
// }

function solution(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      answer += str[i];
    }
  }
  console.log(answer);
}

console.log(solution("tge0a1h205er"));
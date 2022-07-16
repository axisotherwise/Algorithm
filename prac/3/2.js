// 유효한 팰린드롬
// 97~122
function solution(str) {
  let answer = "yes";
  let convert = str.toLowerCase().split("");
  let arr = [];
  for (let i = 0; i < convert.length; i++) {
    if (convert[i].charCodeAt() >= 97) {
      arr.push(convert[i]);
    }
  }
  let original = arr.join("");
  for (let i = 0; i < original.length; i++) {
    if (original[i] !== original[original.length - i - 1]) return "no";
  }
  return answer;
}

// function solution(str) {
//   let answer = "yes";
//   str = str.toLowerCase().replace(/[^a-z]/g, "");
//   if (str.split("").reverse().join("") !== str) return "no";
//   return answer;
// }

console.log(solution("found7, time: study; Yduts; emin, 7Dnuoc"));
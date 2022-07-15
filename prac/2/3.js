// 가위 바위 보 
// A가 이기면 A 출력 B가 이기면 B 출력 비기면 D 출력
// 가위 1 바위 2 보 3

// function solution(a, b) {
//   if (a === 1 && b === 2) return "B";
//   if (a === 1 && b === 3) return "A";
//   if (a === 2 && b === 1) return "A";
//   if (a === 2 && b === 3) return "B";
//   if (a === 3 && b === 1) return "B";
//   if (a === 3 && b === 2) return "A";
//   if (a === b) return "D";
// }

// console.log(solution(1, 2));

// a 입장에서 이길 수 있는 경우의 수만 생각하면 된다.
function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1 && b[i] === 3) {
      answer += "A"
      console.log("A");
    } else if (a[i] === 2 && b[i] === 1) {
      answer += "A"
      console.log("A");
    } else if (a[i] === 3 && b[i] === 2) {
      answer += "A"
      console.log("A");
    } else if (a[i] === b[i]) {
      answer += "D"
      console.log("D");
    } else {
      answer += "B"
      console.log("B");
    }
  }
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
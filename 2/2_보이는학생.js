// 보이는 학생
// 선생님이 N(1~100)명의 학생을 일렬로 세웠다. 
// 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어지고 맨 앞에 서 있는 선생님이
// 볼 수 있는 학생의 수를 출력(앞에 서 있는 사람들보다 크면 보이고 작거나 같으면 보이지 않는다.)

// 미친 코드
function solution(...arr) {
  let answer = [0];
  arr.filter((e, i) => {
    if (e < arr[i + 1]) {
      return answer.push(e);
    }
  });
  return answer.length;
}

// function solution(...arr) {
//   let answer = 1;
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       answer++;
//       max[arr];
//     }
//   }
//   return answer;
// }

console.log(solution(91, 81, 71, 61, 51, 41));
// 점수계산
// OX 문제는 맞거나 틀린 두 경우의 답을 가지는 문제다.
// 여러 개의 OX 문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우 가산점을준다.
// 1번 문제가 맞는 경우 1점 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산한다.
// 연속으로 문제의 답이 맞는 경우 두 번째 문제는 2점 세 번째 문제는 3점 K번 째 문제는 K점으로 계산한다.
// 틀린 문제는 0점으로 계산한다.

function solution(...arr) {
  let answer = 0;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      total++;
      answer += total;
    } else if (arr[i] === 0) {
      total = 0;
    }
  }
  return answer;
}

// console.log(solution(1, 0, 1, 1, 1, 0, 0, 1, 1, 0));
console.log(solution(0, 0, 0, 0, 0, 0, 0, 0, 1, 1));


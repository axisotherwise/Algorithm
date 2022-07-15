// 보이는 학생
// N(1 <= N <= 1000)명의 학생을 일렬로 세웠다.
// 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어진다.
// 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수 출력
// 앞에 서 있는 사람들보다 크면 보이고 작거나 같으면 보이지 않는다.

function solution(...arr) {
  let answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      answer.push(arr[i + 1]);
    }
  }
  return answer.length;
}

console.log(solution(130, 135, 148, 140, 145, 150, 150, 153));
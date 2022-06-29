// 삼각형 판별
// 길이가 서로 다른 A, B, C 세개의 막대 길이가 주어지면 이 세 막대로 삼각형을
// 만들 수 있으면 YES 아니면 NO 출력

// 삼각형이 되기 위한 조건
// 3개의 막대 중 가장 긴 막대가 있다.
// 짦은 막대 2개의 길이의 합이 긴 막대의 길이의 합보다 커야한다.(같으면 안된다.)

// function solution(...arr) {
//   let answer;
//   const max = Math.max(...arr);
//   const result = arr.filter(e => e < max);
//   if (max >= result[0] + result[1]) return answer = "NO";
//   answer = "YES";
//   return answer;
// }

function solution(a, b, c) {
  let answer;
  let max = 0;
  let total = a + b + c;
  if (a < b) {
    max = b;
  } else {
    max = a;
  }
  if (max < c) {
    max = c;
  }
  let diff = total - max;
  if (max >= diff) return answer = "NO";
  answer = "YES";
  return answer;
}

// 1. 인수 중 가장 긴 막대의 길이를 구한다.
// 2. 짦은 막대 2개의 합을 구한다.
// 3. 어떤 게 짦은지 모르므로 3개의 합을 구한 후 가장 긴 막대의 길이를 뺀다.
// 4. 값 비교
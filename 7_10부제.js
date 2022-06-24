// 자동차 번호의 일의 자리 수와 날짜의 일의 수가 일치하면 차량 운행 금지
// 자동차 번호 일의 자리가 7이면 7일 17일 27일 운행 금지
// 자동차 번호 일의 자리수가 0이면 10일 20일 30일 운행 금지

// 어떤 수(십의자리)를 10으로 나누면 몫은 항상 일의 앞자리
// 25 나누기 10의 몫은 2 나머지 5

// 어떤 수(백의자리)를 10으로 나누면 몫은 항상 일의 두 앞자리 수
// 127 나누기 10의 몫은 12 나머지 7

// 어떤 수(천의자리)를 10으로 나누면 몫은 항상 일의 자리
// 2536 나누기 10의 몫은 일의 앞자리 세자리 수

// 미친 답안
function solution(day, ...arr) {
  let violate = 0;
  arr.forEach(e => {
    let last = e.toString().split("");
    let lastNumber = parseInt(last[1]);
    if (day === lastNumber) {
      violate += 1;
    }
  });
  return violate;
}

// 유저 답안
// function solution(day, ...arr) {
//   let answer = arr.filter(e => e % 10 === day);
//   return answer.length;
// }

function solution(day, ...arr) {
  let answer = 0;
  for (let v of arr) {
    if (v % 10 === day) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(1, 10, 20, 30));

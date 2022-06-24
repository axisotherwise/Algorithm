// 가운데 문자 출력
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자 출력

// function solution(string) {
//   let text = string.split("");
//   let odd = Math.floor(string.length / 2);
//   return answer = text[odd];
// }

function solution(string) {
  let answer;
  let middle = Math.floor(string.length / 2);
  if (string.length % 2 >= 1) {
    answer += string.substring(middle, middle + 1);
  }
  console.log(answer);
}

solution("apple");
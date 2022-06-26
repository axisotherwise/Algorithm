// 중복문자제거
// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력
// 제거된 문자열의 각 문자는 원래 순서를 유지

function solution(...arr) {
  let answer = arr.filter((e, i) => {
    arr.indexOf(e) === i;
  });
  return answer;
}

console.log(solution("macc"));
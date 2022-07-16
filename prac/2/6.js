// 격자판 최대합
// N * N의 격자판이 있으면 각 행의 합 각 열의 합 두 대가선의 합 중 가장 큰 합을 출력

// arr[0 ~ end][0 ~ end]
function solution(arr) { 
  let row = 0;
  let column = 0;
  let center = 0;
  let centerReverse = 0;
  let rowTotal = [];
  let columnTotal = [];
  let centerTotal = [];
  let centerReverseTotal = [];

  for (let i = 0; i < arr.length; i++) {
    row = 0;
    column = 0;
    for (let j = 0; j < arr.length; j++) {
      row += arr[i][j];
      column += arr[j][i];
    }
    rowTotal.push(row);
    columnTotal.push(column);
  }
  for (let i = 0; i < arr.length; i++) {
    center += arr[i][i];
    centerReverse += arr[i][arr.length - i - 1];
  }
  let side = Math.max(center, centerReverse);
  let result = rowTotal.concat(columnTotal).concat(side);
  return Math.max.apply(null, result);
}

let arr= [
  [10, 13, 10, 12, 15], 
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
];

console.log(solution(arr));


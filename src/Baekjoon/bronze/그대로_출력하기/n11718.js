/*
그대로 출력하기 성공

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	256 MB	175039	46945	37852	29.618%

문제

입력 받은 대로 출력하는 프로그램을 작성하시오.

입력

입력이 주어진다. 입력은 최대 100줄로 이루어져 있고, 알파벳 소문자, 대문자, 공백, 숫자로만 이루어져 있다. 각 줄은 100글자를 넘지 않으며, 빈 줄은 주어지지 않는다. 또, 각 줄은 공백으로 시작하지 않고, 공백으로 끝나지 않는다.

출력

입력받은 그대로 출력한다.

예제 입력 1 
Hello
Baekjoon
Online Judge

예제 출력 1 
Hello
Baekjoon
Online Judge

출처

문제를 만든 사람: baekjoon

알고리즘 분류

구현
문자열
*/

const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString();

console.log(input);

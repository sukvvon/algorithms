/*
좌표 정렬하기 2

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	256 MB	57888	37670	32163	67.162%

문제
2차원 평면 위의 점 N개가 주어진다. 좌표를 y좌표가 증가하는 순으로, y좌표가 같으면 x좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. (-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.

출력
첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.

예제 입력 1 
5
0 4
1 2
1 -1
2 2
3 3

예제 출력 1 
1 -1
1 2
2 2
3 3
0 4

출처
문제를 만든 사람: baekjoon
데이터를 추가한 사람: kidw0124

알고리즘 분류
정렬
*/

const fs = require("fs");

const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n");

input.shift();

input.sort((a, b) => {
  const [ax, ay] = a.split(" ").map((v) => +v);
  const [bx, by] = b.split(" ").map((v) => +v);

  return ay < by ? -1 : ay > by ? 1 : ax < bx ? -1 : ax > bx ? 1 : 0;
});

console.log(input.join("\n"));

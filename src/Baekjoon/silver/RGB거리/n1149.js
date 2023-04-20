/*
RGB거리

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
0.5 초 (추가 시간 없음)	128 MB	96077	51964	38696	53.369%

문제
RGB거리에는 집이 N개 있다. 거리는 선분으로 나타낼 수 있고, 1번 집부터 N번 집이 순서대로 있다.

집은 빨강, 초록, 파랑 중 하나의 색으로 칠해야 한다. 각각의 집을 빨강, 초록, 파랑으로 칠하는 비용이 주어졌을 때, 아래 규칙을 만족하면서 모든 집을 칠하는 비용의 최솟값을 구해보자.

1번 집의 색은 2번 집의 색과 같지 않아야 한다.
N번 집의 색은 N-1번 집의 색과 같지 않아야 한다.
i(2 ≤ i ≤ N-1)번 집의 색은 i-1번, i+1번 집의 색과 같지 않아야 한다.

입력
첫째 줄에 집의 수 N(2 ≤ N ≤ 1,000)이 주어진다. 둘째 줄부터 N개의 줄에는 각 집을 빨강, 초록, 파랑으로 칠하는 비용이 1번 집부터 한 줄에 하나씩 주어진다. 집을 칠하는 비용은 1,000보다 작거나 같은 자연수이다.

출력
첫째 줄에 모든 집을 칠하는 비용의 최솟값을 출력한다.

예제 입력 1 
3
26 40 83
49 60 57
13 89 99

예제 출력 1 
96

예제 입력 2 
3
1 100 100
100 1 100
100 100 1

예제 출력 2 
3

예제 입력 3 
3
1 100 100
100 100 100
1 100 100

예제 출력 3 
102

예제 입력 4 
6
30 19 5
64 77 64
15 19 97
4 71 57
90 86 84
93 32 91

예제 출력 4 
208

예제 입력 5 
8
71 39 44
32 83 55
51 37 63
89 29 100
83 58 11
65 13 15
47 25 29
60 66 19

예제 출력 5 
253

출처
문제를 번역한 사람: baekjoon
빠진 조건을 찾은 사람: djm03178
문제의 오타를 찾은 사람: fail456
데이터를 추가한 사람: rdd6584

알고리즘 분류
다이나믹 프로그래밍
*/

const fs = require("fs");

const [n, ...houses] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((v) => (+v ? +v : v.split(" ").map(Number)));

function solution(n, houses) {
  const memo = new Array(n).fill(null).map(() => []);
  memo[0] = houses[0];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < 3; j++) {
      if (j === 0) {
        memo[i][j] = Math.min(
          houses[i][j] + memo[i - 1][1],
          houses[i][j] + memo[i - 1][2]
        );
      }

      if (j === 1) {
        memo[i][j] = Math.min(
          houses[i][j] + memo[i - 1][0],
          houses[i][j] + memo[i - 1][2]
        );
      }

      if (j === 2) {
        memo[i][j] = Math.min(
          houses[i][j] + memo[i - 1][0],
          houses[i][j] + memo[i - 1][1]
        );
      }
    }
  }

  return Math.min(...memo[n - 1]);
}

console.log(solution(n, houses));

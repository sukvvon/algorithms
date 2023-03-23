/*
수열

시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	128 MB	33947	12397	9990	35.908%

문제
매일 아침 9시에 학교에서 측정한 온도가 어떤 정수의 수열로 주어졌을 때, 연속적인 며칠 동안의 온도의 합이 가장 큰 값을 알아보고자 한다.

예를 들어, 아래와 같이 10일 간의 온도가 주어졌을 때, 

3 -2 -4 -9 0 3 7 13 8 -3

모든 연속적인 이틀간의 온도의 합은 아래와 같다.



이때, 온도의 합이 가장 큰 값은 21이다. 

또 다른 예로 위와 같은 온도가 주어졌을 때, 모든 연속적인 5일 간의 온도의 합은 아래와 같으며, 



이때, 온도의 합이 가장 큰 값은 31이다.

매일 측정한 온도가 정수의 수열로 주어졌을 때, 연속적인 며칠 동안의 온도의 합이 가장 큰 값을 계산하는 프로그램을 작성하시오. 

입력
첫째 줄에는 두 개의 정수 N과 K가 한 개의 공백을 사이에 두고 순서대로 주어진다. 첫 번째 정수 N은 온도를 측정한 전체 날짜의 수이다. N은 2 이상 100,000 이하이다. 두 번째 정수 K는 합을 구하기 위한 연속적인 날짜의 수이다. K는 1과 N 사이의 정수이다. 둘째 줄에는 매일 측정한 온도를 나타내는 N개의 정수가 빈칸을 사이에 두고 주어진다. 이 수들은 모두 -100 이상 100 이하이다. 

출력
첫째 줄에는 입력되는 온도의 수열에서 연속적인 K일의 온도의 합이 최대가 되는 값을 출력한다.

예제 입력 1 
10 2
3 -2 -4 -9 0 3 7 13 8 -3

예제 출력 1 
21

예제 입력 2 
10 5
3 -2 -4 -9 0 3 7 13 8 -3

예제 출력 2 
31

출처
Olympiad > 한국정보올림피아드 > KOI 2011 > 초등부 1번

잘못된 데이터를 찾은 사람: tncks0121

알고리즘 분류
누적 합
두 포인터
슬라이딩 윈도우
*/

const fs = require("fs");

const [nk, input] = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "../../../index.txt"
  )
  .toString()
  .trim()
  .split("\n");

function solution(nk, input) {
  const [n, k] = nk.split(" ").map(Number);
  const arr = input.split(" ").map(Number);
  const sum = [0];
  let max = null;

  arr.forEach((v, i) => {
    sum[i + 1] = v + sum[i];

    if (i + 1 >= k) {
      const newSum = sum[i + 1] - sum[i + 1 - k];

      if (max === null) {
        max = newSum;
      } else {
        max = max < newSum ? newSum : max;
      }
    }
  });

  return max;
}

console.log(solution(nk, input));

function solution(lines) {
  let result = 0;
  const coverage = Array(201).fill(0); // -100 ~ 100 좌표를 0~200 인덱스로 매핑

  // 각 선분을 coverage 배열에 표시
  for (let [start, end] of lines) {
    for (let i = start; i < end; i++) {
      coverage[i + 100] += 1; // -100 -> 0 인덱스로 변환
    }
  }

  // 두 개 이상 겹치는 구간 길이 계산
  for (let count of coverage) {
    if (count >= 2) result += 1;
  }

  return result;
}
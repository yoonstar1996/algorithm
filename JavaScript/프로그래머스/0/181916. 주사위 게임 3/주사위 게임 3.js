function solution(a, b, c, d) {
  const arr = [a, b, c, d];
  const counts = {};

  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  const keys = Object.keys(counts).map(Number);
  const values = Object.values(counts);

  // 네 개가 모두 같은 경우
  if (values.length === 1) {
    return 1111 * keys[0];
  }

  // 세 개가 같고 나머지 하나가 다른 경우
  if (values.includes(3)) {
    const p = keys[values.indexOf(3)];
    const q = keys[values.indexOf(1)];
    return Math.pow(10 * p + q, 2);
  }

  // 두 개씩 같은 값이 나온 경우
  if (values.length === 2 && values[0] === 2 && values[1] === 2) {
    const [p, q] = keys;
    return (p + q) * Math.abs(p - q);
  }

  // 두 개가 같고 나머지 두 개가 모두 다른 경우
  if (values.includes(2)) {
    const p = keys[values.indexOf(2)];
    const others = keys.filter((k) => k !== p);
    return others[0] * others[1];
  }

  // 네 개가 모두 다른 경우
  return Math.min(...arr);
}

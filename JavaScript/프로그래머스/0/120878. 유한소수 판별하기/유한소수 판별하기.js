function solution(a, b) {
    // 유클리드 호제법 공식
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    
    // 최대 공약수
    const g = gcd(a, b);
    b /= g;

    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;

    return b === 1 ? 1 : 2;
}

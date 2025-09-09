function solution(numer1, denom1, numer2, denom2) {
    
    let denom = numer1 * denom2 + numer2 * denom1; 
    let num = denom1 * denom2;
    
    // 유클리드 호제법을 이용한 최대공약수 구하는 방법
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    
    let x = gcd(num, denom);
    
    return [denom / x, num / x];
}
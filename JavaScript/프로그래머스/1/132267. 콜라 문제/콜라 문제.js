function solution(a, b, n) {
    var answer = 0;
    
    while(n >= a) {
        let coke = Math.floor(n / a) * b;
        console.log(n, coke, answer)
        n = (n % a) + coke;
        answer += coke
    }
    
    return answer;
}
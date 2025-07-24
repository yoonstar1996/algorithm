function solution(n) {
    let x = [0, 1];
    
    for(let i = 2; i <= n; i++) {
        x.push((x[i - 1] + x[i - 2]) % 1234567);
    }
    
    return x[n];
}
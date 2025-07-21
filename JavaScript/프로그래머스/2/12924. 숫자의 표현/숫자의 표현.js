function solution(n) {
    var answer = 0;
    let start = 1;
    let end = 1;
    let sum = 1;
    
    while(start <= n && end <= n) {
        if(sum === n) {
            answer++;
            sum -= start;
            start++;
        } else if(sum < n) {
            end++;
            sum += end;
        } else {
            sum -= start;
            start++;
        }
    }
    
    return answer;
}
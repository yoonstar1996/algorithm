function solution(n) {
    var answer = 0;
    let count = 0;
    
    while(count < n) {
        answer += 1;
        if(answer.toString().includes(3) || answer % 3 === 0) continue;
        count++;
    }
    
    return answer;
}
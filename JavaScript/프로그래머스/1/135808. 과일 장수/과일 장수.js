function solution(k, m, score) {
    var answer = 0;
    let arr = [];
    score.sort((a, b) => b - a);
    for(let i = 0; i < score.length; i++) {
        arr.push(score[i]);
        if(arr.length === m) {
            answer += Math.min(...arr) * m;
            arr = [];
        }
    }
    
    return answer;
}
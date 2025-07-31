function solution(k, score) {
    var answer = [];
    const arr = [];
    for(let i = 0; i < score.length; i++) {
        const x = score[i];
        if(arr.length < k) {
            arr.push(x);
            arr.sort((a, b) => a - b);
        } else {
            if(arr[0] < x) {
                arr.shift();
                arr.push(x);
                arr.sort((a, b) => a - b);
            }
        }
        answer.push(arr[0]);
    }
    
    return answer;
}
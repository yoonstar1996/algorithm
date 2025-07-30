

function solution(answers) {
    var answer = [];
    
    const _1번 = [1, 2, 3, 4, 5];
    const _2번 = [2, 1, 2, 3, 2, 4, 2, 5];
    const _3번 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const scores = [0, 0, 0];
    
    answers.forEach((answer, index) => {
        if(answer === _1번[index % _1번.length]) scores[0]++;
        if(answer === _2번[index % _2번.length]) scores[1]++;
        if(answer === _3번[index % _3번.length]) scores[2]++;
    })
    
    const maxScore = Math.max(...scores);
    scores.forEach((score, index) => {
        if(score === maxScore) answer.push(index + 1);
    })
    
    return answer;
}
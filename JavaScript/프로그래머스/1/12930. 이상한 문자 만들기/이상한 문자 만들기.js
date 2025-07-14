function solution(s) {
    var answer = '';
    const split = s.split(" ");
    for(let i = 0; i < split.length; i++) {
        for(let j = 0; j < split[i].length; j++) {
            const text = split[i][j];
            if(j % 2 === 0) answer += text.toUpperCase();
            else answer += text.toLowerCase();
        }
        if(i !== split.length - 1) answer += " "
    }
    return answer;
}
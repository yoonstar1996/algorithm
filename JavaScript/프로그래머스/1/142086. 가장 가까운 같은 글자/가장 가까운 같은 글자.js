function solution(s) {
    var answer = [];
    const lastIndex = {};
    
    for(let i = 0; i < s.length; i++) {
        const text = s[i];
        if(lastIndex[text] === undefined) answer.push(-1);
        else answer.push(i - lastIndex[text]);
        
        lastIndex[text] = i;
    }
    
    return answer;
}
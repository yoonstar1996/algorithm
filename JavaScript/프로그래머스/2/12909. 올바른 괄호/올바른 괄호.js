function solution(s) {
    let count = 0;
    
    for(let ch of s) {
        if(ch === "(") count++;
        else count--;
        
        if(count < 0) return false;
    }

    return count === 0;
}
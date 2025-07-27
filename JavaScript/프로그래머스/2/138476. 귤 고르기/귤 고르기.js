function solution(k, tangerine) {
    var answer = 0;
    tangerine.sort((a, b) => a - b);
    const tanMap = new Map();
    for(let size of tangerine) {
        if(tanMap.has(size)) {
            tanMap.set(size, tanMap.get(size) + 1);
        } else {
            tanMap.set(size, 1);
        }
    }
    const counts = Array.from(tanMap.values()).sort((a, b) => b - a);
    
    for(let i of counts) {
        k -= i;
        answer++;
        if(k <= 0) break;
    }
    
    return answer;
}
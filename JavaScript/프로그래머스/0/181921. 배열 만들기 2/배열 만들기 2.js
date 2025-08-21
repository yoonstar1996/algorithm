function solution(l, r) {
    var answer = [];

    for(let i = l; i <= r; i++) {
        let str = i.toString();
        let bool = true;
        
        for(let j of str) {
            if(j !== "0" && j !== "5") {
                bool = false;
                break;
            }
        }
        
        if(bool) answer.push(i)
    }
    
    return answer.length !== 0 ? answer : [-1];
}
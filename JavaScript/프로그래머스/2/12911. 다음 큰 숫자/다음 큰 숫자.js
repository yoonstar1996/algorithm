function solution(n) {
    var answer = 0;
    const n1 = n.toString(2);
    const n1Count = n1.split("").filter(el => el !== "0").length;
    for(let i = n + 1; ; i++) {
        const n2 = i.toString(2);
        const n2Count = n2.split("").filter(el => el !== "0").length;
        if(n1Count === n2Count) {
            answer += i;
            break;
        }
    }
    
    return answer;
}
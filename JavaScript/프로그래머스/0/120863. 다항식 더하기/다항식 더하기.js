function solution(polynomial) {
    const answer = [];
    
    const x = polynomial.split(" + ");
    let xSum = 0;
    let numSum = 0;
    
    for(const char of x) {
        if(char.includes("x")) {
            const y = char.replace("x", "");
            xSum += y === "" ? 1 : +y;
        } else {
            numSum += +char;
        }
    }
    
    if(xSum > 0) answer.push(xSum === 1 ? "x" : `${xSum}x`);
    if(numSum > 0) answer.push(+numSum);
    
    return answer.join(" + ");
}
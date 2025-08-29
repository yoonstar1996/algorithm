function solution(quiz) {
    var answer = [];
    quiz.forEach(q => {
        const [x, symbol, y, equal, result] = q.split(" ");
        const numX = +x;
        const numY = +y;
        const numResult = +result;
        let calcResult;
        
        if(symbol === "+") calcResult = numX + numY;
        if(symbol === "-") calcResult = numX - numY;
        
        answer.push(calcResult === numResult ? "O" : "X")
    })
    
    return answer;
}
function solution(brown, yellow) {
    let sum = brown + yellow;
    
    for(let col = 3; col <= sum; col++) {
        if(sum % col === 0) {
            let row = sum / col;
            if((row - 2) * (col - 2) === yellow) {
                return [row, col]
            }
        }
    }
}
function solution(a, b) {
    
    let newA = a;
    let newB = b;
    let divideNum = 2;
    
    while(divideNum <= a) {
        if((newA % divideNum === 0) && (newB % divideNum === 0)) {
            newA /= divideNum;
            newB /= divideNum;
            divideNum = 2;
        }
        divideNum++;
    
    }

    while(newB % 2 === 0) {
        newB /= 2;
    }
    
    while(newB % 5 === 0) {
        newB /= 5;
    }
    
    return newB === 1 ? 1 : 2
    
}
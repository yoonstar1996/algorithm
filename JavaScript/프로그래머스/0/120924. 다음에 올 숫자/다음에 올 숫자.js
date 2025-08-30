function solution(common) {
    const a = common[0];
    const b = common[1];
    const c = common[2];
    const length = common.length;
    
    if(b - a === c - b) {
        const x = b - a;
        return common[length - 1] + x;
    } else {
        const x = b / a;
        return common[length - 1] * x;
    }
}
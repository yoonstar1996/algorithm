function solution(s) {
    let changeCount = 0;
    let removeZeroCount = 0;
    while(s !== "1") {
        const sLength = s.length;
        let x = s.split("").filter(el => el !== "0");
        const xLength = x.length;
        removeZeroCount += sLength - xLength;
        s = xLength.toString(2);
        changeCount++;
    }
    return [changeCount, removeZeroCount];
}
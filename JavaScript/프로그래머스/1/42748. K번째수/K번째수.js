function solution(array, commands) {
    var answer = [];
    for(let n = 0; n < commands.length; n++) {
        const [i, j, k] = commands[n];
        const newArray = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(newArray[k-1])
    }
    return answer;
}
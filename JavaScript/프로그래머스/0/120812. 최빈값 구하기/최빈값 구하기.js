function solution(array) {
    var answer;
    const count = {};

    for (let num of array) {
        count[num] = (count[num] || 0) + 1;
    }

    let maxFreq = 0;
    for (let key in count) {
        if (count[key] > maxFreq) {
            maxFreq = count[key];
        }
    }

    answer = Object.keys(count).filter(key => count[key] === maxFreq);

    return answer.length === 1 ? Number(answer[0]) : -1;
}

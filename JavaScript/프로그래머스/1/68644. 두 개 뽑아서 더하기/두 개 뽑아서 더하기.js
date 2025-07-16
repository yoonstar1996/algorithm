function solution(numbers) {
    var answer = [];
    numbers.sort((a, b) => a - b);
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            const x1 = numbers[i];
            const x2 = numbers[j];
            const sum = x1 + x2;
            if(!answer.includes(sum)) answer.push(sum);
        }
    }
    return answer.sort((a, b) => a - b);
}
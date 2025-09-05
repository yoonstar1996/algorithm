function solution(num, total) {
    let answer = Array.from({length: num}, () => 0);
    let left = [];
    let right = [];
    let center = 0;
    
    if(num % 2 !== 0) {
        let mid = total / num;
        let midIndex = Math.floor(num / 2);
        answer[midIndex] = mid;
        center = mid;
    } else {
        let mid = Math.floor(total / num);
        let midIndex = (num / 2) - 1;
        answer[midIndex] = mid;
        center = mid;
    }
    
    if(answer.length % 2 !== 0) {
        let index = Math.ceil(num / 2);
        left = answer.slice(0, index - 1);
        right = answer.slice(index);
    } else {
        let index = num / 2 - 1;
        left = answer.slice(0, index);
        right = answer.slice(index + 1);
    }
    
    for(let i = left.length - 1; i >= 0; i--) {
        left[i] = center - 1 - i;
    }
    
    for(let i = 0; i < right.length; i++) {
        right[i] = center + 1 + i;
    }
    
    answer = [...left, center, ...right];
    
    return answer.sort((a,b)=> a - b);
}
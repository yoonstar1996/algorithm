function solution(food) {
    var answer = '';
    let reverse;
    for(let i = 0; i < food.length; i++) {
        const num = food[i];
        if(num > 1) {
            answer += String(i).repeat(Math.floor(num / 2));
        }
    }
    reverse = answer.split("").reverse().join("");
    return answer + "0" + reverse;
}
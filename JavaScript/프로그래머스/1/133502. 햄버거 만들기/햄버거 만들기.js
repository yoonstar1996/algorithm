function solution(ingredient) {
    var answer = 0;
    const stack = [];
    
    for(let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if(stack.length >= 4) {
            let last = stack.slice(-4);
            if(last.join("") === "1231") {
                stack.splice(-4);
                answer++;
            }
        }
    }
    
    return answer;
}
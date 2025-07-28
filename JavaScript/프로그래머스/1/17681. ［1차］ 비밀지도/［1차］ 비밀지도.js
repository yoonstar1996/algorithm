function solution(n, arr1, arr2) {
    var answer = [];
    const newArr1 = arr1.map(el => el.toString(2).padStart(n, 0));
    const newArr2 = arr2.map(el => el.toString(2).padStart(n, 0));
    
    for(let i = 0; i < n; i++) {
        let str = "";
        for(let j = 0; j < n; j++) {
            const num1 = newArr1[i][j];
            const num2 = newArr2[i][j];
            if(num1 === "1" || num2 === "1") str += "#";
            else str += " ";
        }
        answer.push(str);
    }
    console.log(answer)
    return answer;
}
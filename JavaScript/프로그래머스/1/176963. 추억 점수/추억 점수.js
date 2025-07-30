function solution(name, yearning, photo) {
    var answer = [];
    
    for(let i = 0; i < photo.length; i++) {
        let sum = 0;
        for(let j = 0; j < photo[i].length; j++) {
            const 위치 = name.indexOf(photo[i][j]);
            const 점수 = yearning[위치];
            if(위치 !== -1) {
                sum += 점수;
            }
        }
        answer.push(sum);
    }
    
    return answer;
}
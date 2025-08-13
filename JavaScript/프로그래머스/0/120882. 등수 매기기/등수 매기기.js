function solution(score) {
    const avgArr = [];
    
    for(const s of score) {
        const [eng, math] = s;
        const average = (eng + math) / 2;
        avgArr.push(average);
    }
    
    const sortArr = [...avgArr].sort((a, b) => b - a);
    
    return avgArr.map(avg => sortArr.indexOf(avg) + 1);
}
function solution(sizes) {
    let w1 = -Infinity;
    let h1 = -Infinity;
    for(let i = 0; i < sizes.length; i++) {
        const [w2, h2] = sizes[i];
        const 가로 = Math.max(w2, h2);
        const 세로 = Math.min(w2, h2);
        if(가로 > w1) w1 = 가로;
        if(세로 > h1) h1 = 세로;
    }
    return w1 * h1;
}
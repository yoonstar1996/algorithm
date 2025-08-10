function solution(clothes) {
    const category = new Map()
    
    for(let i = 0; i < clothes.length; i++) {
        const value = clothes[i][1];
        if(category.has(value)) {
            category.set(value, category.get(value) + 1);
        } else {
            category.set(value, 1)
        }
    }
    
    let count = 1;
    for(const [key, value] of category) {
        console.log(key, value)
        count *= (value + 1);
    }
    
    return count - 1;

}
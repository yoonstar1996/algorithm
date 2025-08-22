function solution(numlist, n) {
    const answer = [];
    const arr = numlist.map(val => ({
        val,
        distance: Math.abs(val - n)
    }));
    
    arr.sort((a, b) => {
        if(a.distance === b.distance) {
            return b.val - a.val;
        } else {
            return a.distance - b.distance;
        }
    });

    return arr.map(value => value.val);;
}
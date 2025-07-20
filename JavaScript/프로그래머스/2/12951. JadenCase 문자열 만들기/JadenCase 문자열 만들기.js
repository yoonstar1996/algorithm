function solution(s) {
    const arr = s.split(" ").map(el => el.toLowerCase());
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i][0] === "string") {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        }
    }
    return arr.join(" ");
}
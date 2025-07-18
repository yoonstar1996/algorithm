function solution(strings, n) {
    return strings.sort((a, b) => {
        if(a[n] === b[n]) return a.localeCompare(b);
        else return a[n].charCodeAt(0) - b[n].charCodeAt(0);
    })
}
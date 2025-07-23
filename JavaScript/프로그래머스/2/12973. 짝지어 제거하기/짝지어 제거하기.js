function solution(s)
{
    let temp = [];
    for(let i = 0; i < s.length; i++) {
        const text = s[i];
        if(temp[temp.length - 1] === text) {
            temp.pop();
        } else {
            temp.push(text);
        }
    }
    return temp.length ? 0 : 1;
}
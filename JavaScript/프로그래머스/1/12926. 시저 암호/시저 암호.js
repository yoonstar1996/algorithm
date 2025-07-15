function solution(s, n) {
    var answer = '';
    for(let ch of s) {
        const code = ch.charCodeAt(0);
        let nCode;
        let char;
        if(65 <= code && code <= 90) {
            nCode = code + n;
            if(nCode > 90) nCode -= 26;
            char = String.fromCharCode(nCode);
            answer += char;
        } else if (97 <= code && code <= 122) {
            nCode = code + n;
            if(nCode > 122) nCode -= 26;
            char = String.fromCharCode(nCode);
            answer += char
        }
        if(ch === " ") answer += " ";
    }
    return answer;
}
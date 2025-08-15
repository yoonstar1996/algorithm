const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let answer = "";

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(const ch of str) {
        if(ch === ch.toUpperCase()) {
            answer += ch.toLowerCase();
        } else {
            answer += ch.toUpperCase();
        }
    }
    console.log(answer);
});


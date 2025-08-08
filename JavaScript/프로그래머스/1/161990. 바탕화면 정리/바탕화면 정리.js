function solution(wallpaper) {
    var answer = [];
    let temp = [];
    for(let i = 0; i < wallpaper.length; i++) {
        for(let j = 0; j < wallpaper[0].length; j++) {
            if(wallpaper[i][j] === "#") {
                temp.push([i, j])
            }
        }
    }
    let startX = Infinity;
    let startY = Infinity;
    let endX = -Infinity;
    let endY = -Infinity;
    for(let i = 0; i < temp.length; i++) {
        let x1 = temp[i][0];
        let y1 = temp[i][1];
        if(startX > x1) {
            startX = x1
        }
        if(startY > y1) {
            startY = y1;
        }
        if(endX < x1) {
            endX = x1;
        }
        if(endY < y1) {
            endY = y1;
        }
    }
    return [startX, startY, endX + 1, endY + 1];
}
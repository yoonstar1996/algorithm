function solution(board) {
    const length = board.length;
    const arr = Array.from({ length: length }, () => Array(length).fill(0));

    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 0], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (board[i][j] === 1) {
                for (const [dx, dy] of directions) {
                    const nx = i + dx;
                    const ny = j + dy;
                    if (nx >= 0 && nx < length && ny >= 0 && ny < length) {
                        arr[nx][ny] = 1;
                    }
                }
            }
        }
    }

    let safeCount = 0;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (arr[i][j] === 0) safeCount++;
        }
    }

    return safeCount;
}
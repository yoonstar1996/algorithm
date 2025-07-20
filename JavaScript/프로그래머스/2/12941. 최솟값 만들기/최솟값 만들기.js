function solution(A,B){
    var answer = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for(let i = 0; i < A.length; i++) {
        const mul = A[i] * B[i];
        answer += mul;
    }

    return answer;
}
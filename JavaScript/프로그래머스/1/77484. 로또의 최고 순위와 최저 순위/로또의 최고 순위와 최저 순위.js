const obj = {
    6 : 1,
    5 : 2,
    4 : 3,
    3 : 4,
    2 : 5,
    1 : 6,
    0 : 6
}

function solution(lottos, win_nums) {
    const sameNum = lottos.filter(lotto => win_nums.includes(lotto)).length;
    const zeroCount = lottos.filter(lotto => lotto === 0).length;
    
    const max = sameNum + zeroCount;
    const min = sameNum;

    return [obj[max], obj[min]];
}
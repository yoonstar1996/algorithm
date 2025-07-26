function solution(nums) {
    const length = nums.length;
    const setNumsSize = new Set(nums).size;
    
    return Math.min(length / 2, setNumsSize);
}
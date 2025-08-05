function solution(a, b) {
    const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let totalDays = 0;
    for (let i = 0; i < a - 1; i++) {
        totalDays += monthDays[i];
    }
    totalDays += b - 1;

    return days[totalDays % 7];
}
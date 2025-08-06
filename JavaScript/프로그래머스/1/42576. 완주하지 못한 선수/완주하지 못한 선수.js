function solution(participant, completion) {
    let obj = new Map();
    
    for(let parti of participant) {
        if(obj.has(parti)) obj.set(parti, obj.get(parti) + 1);
        else obj.set(parti, 1);
    }
    
    for(let comple of completion) {
        if(obj.has(comple)) obj.set(comple, obj.get(comple) - 1);
    }
    
    for(let [key, value] of obj) {
        if(value > 0) return key;
    }
}
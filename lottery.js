let num = [];
    for (let i = 1; i < 46; i++){
        num.push(i);
    }
// console.log(num);
    let lotto = [];

while(lotto.length < 7){
    let randNum = Math.floor(Math.random() * num.length) + 1;
    if(lotto.indexOf(randNum) == -1){
        lotto.push(randNum);
    }
}

sortLotto = (a,b) => {
    return a - b;
}
lotto.sort(sortLotto);
//오름차순 정렬

console.log('오늘의 Lotto 번호는~? \n' + lotto);

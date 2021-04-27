// 1~45번중 6개 추첨 + 보너스 1개의 공


// let i = 1;
// while( i <= 6){
//     const rand = Math.floor(Math.random()*45)
//     console.log(rand);
//     i++
// };

let lottery = new Array();
let randChk = true;
let randGenerater = (min, max) => {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

for(let i = 0; i < 6; i++){
        lottery.push(randGenerater(1, 45));
}


for(let j = 0; j < lottery.length; j++){
    randChk = true;
    for(value in lottery){
        if(lottery[value] == lottery[j]){
            randChk = false;
        }
    }
    if(randChk)
    lottery.push(lottery[j]);

}
lottery.sort();
console.log(lottery);

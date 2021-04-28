// 1~45번중 6개 추첨 + 보너스 1개의 공


// let lottery = new Array();
//새로운 빈 배열 생성

// let randGenerater = (min, max) => {
//     return Math.floor(Math.random()*(max - min + 1)) + min;
// }
//랜덤 범위 최소 최대 함수

// for(let i = 0; i < 6; i++){

    let lottery = [];
    let bonusNum = Math.floor(Math.random() * 45 ) + 1;

    for(let j = 0; j < 45; j++){
        // lottery.push(randGenerater(1, 45));
        let randNum = Math.floor(Math.random() * 45 )+ 1;

        if(lottery.indexOf(randNum) == -1){ //중복여부를 체크해서 새로운 값들만 추가
            lottery.push(randNum);
            if(lottery.length == 6){
                break;
            }
        }
    }

//     lottery.forEach(function (item) {
// let k = lottery.indexOf(item);
// if(k > -1) lottery.splice(k, 1);
//     });

    sortLottery = (a,b) => {
        return a - b;
    }
    lottery.sort(sortLottery);
    //오름차순 정렬
    
    console.log('오늘의 Lotto 번호는~? \n' + lottery + ' + ' + bonusNum);
// }


//랜덤 숫자 1개를 6번 뽑아내어 lottery라는 배열에 push

// sortLottery = (a,b) => {
//     return a-b;
// };
// lottery.sort(sortLottery)
// //오름차순 정렬

// console.log(lottery);

// const uniqueLottery = (array) => {
//     return [...new Set(array)];
// }
//set과 전개연산자로 유니크한 숫자만 넣어서 새 배열로 뽑아주는 함수


// console.log(uniqueLottery(lottery));

//중복없이 잘 뽑히지만 중복되어버리면 숫자가 5개밖에 안나옴



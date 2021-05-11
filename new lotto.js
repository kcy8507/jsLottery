function lottoMaker(...selectedNum) {
  let lottoMachine = [];
  for (let i = 1; i < 46; i++) {
    lottoMachine.push(i);
  }
  let lotto = [];
  lotto.push(...selectedNum);
  for (num of lotto) {
    lottoMachine.splice(lottoMachine.indexOf(num), 1);
  }
  while (lotto.length < 6) {
    let index = Math.floor(Math.random() * lottoMachine.length);

    let hitBall = lottoMachine[index];

    lotto.push(hitBall);
    lottoMachine.splice(index, 1);
  }
  return num <= 0 || num > 45 ? num : lotto; //범위지정
}

console.log(lottoMaker(1, 2, 3, 4, 55, 0));
console.log(lottoMaker(98, 2, 3, 4, 6));

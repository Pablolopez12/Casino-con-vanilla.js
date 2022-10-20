

//JAVASCRIPT CASINO - GOOD LUCK! 

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

// SLOT MACHINE GAME - Generates a calculation about the amount earned.
const jackpot = 25000;
const box = 10;

const prizeCalculator =(hits) => {
  let hit = hits;
  hits = jackpot / box ;
  result = hit * hits;
  return result;
}

prizeCalculator();

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

// LOTERRY DREAMS 
let lotteryResult = () => {
 let number = parseInt(Math.random() * (4) + 1);

  switch (number) {
    case 1:
      return `Congratulations. You have earned $1000 !`;
    case 2:
      return `Congratulations. You have earned $20000!`;
    case 3:
      return `Congratulations. You have earned  $30000!`;
    case 4:
      return `Congratulations. You have earned $40.000.000!`;
  }

     return number;

};

lotteryResult();

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

// RULETA - CHOOSE A RANDOM NUMBER A PRINTS IT BY CONSOLE.
const finalRuleta = 25;
const ruleta = () => {
  let numeroRandom = parseInt(Math.random() * finalRuleta + 1);
  console.log(numeroRandom);
  for (let i = 0; i <= finalRuleta; i++) {
    if (i === numeroRandom) {
      console.log(`Numero ganador: ${numeroRandom}`);
    } else {
      console.log(i);
    }
  }
};

ruleta();
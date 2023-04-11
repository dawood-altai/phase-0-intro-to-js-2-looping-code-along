function writeCards(names, event) {
    const cardsArray = [];
    for (let i = 0; i < names.length; i++) {
      cardsArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cardsArray;
  }
  
const names = ["Guadalupe", "Ollie", "Aki"];
const event = 'birthday';
const cards = writeCards(names, event);
console.log(cards);

function countDown(num)
 {
    while (num >= 0)
     {
      console.log(num);
      num--;
    }
  }
  countDown(11);

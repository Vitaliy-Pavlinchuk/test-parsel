const button = document.querySelector('button');

const lastItem = document.createElement('button');
lastItem.textContent = 'cleak me';
lastItem.style.backgroundColor = 'green'
document.querySelector('.gallery').append(lastItem);



const onBtn = () => {
    setTimeout(() => 
    alert("I love async JS!")
  , 2000);
}

lastItem.addEventListener('click', onBtn)






const PROMT_DELAY = 1009
const MAX_PROMT_DALAY = 3

let promtCounter = 0
let hasSubscriebd = false

const intervalID =  setInterval(() => {
    if (promtCounter === MAX_PROMT_DALAY) {
        console.log('нужно остановить');
        clearInterval(intervalID)
        return
    } console.log('Подпишись на рассилку' + Date.now());
    promtCounter += 1
}, PROMT_DELAY )
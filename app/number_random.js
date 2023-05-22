const lowerValue = 1;
const hightValue = 1000;  


const numberSecret = numberRandom();

function numberRandom(){
    return parseInt(Math.random() * hightValue + 1);

}
console.log(`Número secreto: ${numberSecret}`)

const elementLowerValue = document.getElementById('menor-valor')
elementLowerValue.innerHTML = lowerValue

const elementHightValue = document.getElementById('maior-valor')
elementHightValue.innerHTML = hightValue
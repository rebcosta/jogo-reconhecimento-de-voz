 function validKick(kick){
    const number = +kick // o + é para o programa entender que é um número não uma string


    if(invalidKick(number) ){
    elementKick.innerHTML +="<div>Valor Inválido</div>"

} if(numBiggerOrSmallerAllowed(number)){
    elementKick.innerHTML += `<div>O valor é inválido: Fale um número entre 
    ${lowerValue} e ${hightValue}</div>`
    return 
  
} if(number === numberSecret){
    document.body.innerHTML = `
    <h1>Você acertou!Parabéns!<h1>
    <h3>O numero secreto é <div>${number}</div></h3>
    <button id="play" class="bnt-game">Play game</button> `

} else  if (number > numberSecret){
    elementKick.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
    `
} else {
    elementKick.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
    `
}
if(kick.toUpperCase() === 'GAME OVER'){
    document.body.classList.add('game-over')
    document.body.innerHTML = `<div class ="game-sty">GAME OVER</div>
    <h2>Que pena! O número secreto era ${numberSecret}</h2>
    <h2>Clique no botão para recomeçar</h2>
    <button id="play" class="bnt-game-over">Play game</button>`

}

 }

function invalidKick(number) {
    return Number.isNaN(number)
}

function numBiggerOrSmallerAllowed(number){
    return   number > hightValue || number < lowerValue
}
document.body.addEventListener('click', e => {
    if(e.target.id == 'play') {
        window.location.reload()
    }
})



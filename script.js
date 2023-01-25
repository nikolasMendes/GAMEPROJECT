const botaoStart = document.getElementById("botaoStart")
const incio = document.getElementById("backImg")
const gameBoard =  document.getElementById("gameBoard")

botaoStart.addEventListener("click", () => {
    incio.classList.add("hidden")
    gameBoard.classList.remove("hidden")
})

/*pagina inicial /\ --------------------------------------------------- */

const homer = document.getElementsByClassName('caneca')[0]




const moveLeft = (event) => {
    homer.classList.add('move-left')

    setTimeout((event) => {
        homer.classList.remove('move-left')
    },3000)
}


console.log(homer)



window.addEventListener("keydown", (event) => {
    let kDown = event.key
    console.log(kDown)
    if (kDown == "ArrowRight") {
        const moveRight = (event) => {
            homer.classList.add('move-right')
           
            setTimeout((event) => {
                homer.classList.remove('move-right')
            }, 3000)
        } 
        console.log(homer.outerHTML)

  } if (kDown == "ArrowLeft") {
    console.log(moveLeft)
  }
})















/*const caneca = document.getElementsByClassName("caneca")

window.addEventListener("keydown", (event) => {
let kDown = event.keyCode
if (kDown == "37") {

}if (kDown == "39") {
caneca.classList.add("move-right")
setTimeout(()=> {
caneca.classList.remove("move-right")
}, 3000)
}
})*/


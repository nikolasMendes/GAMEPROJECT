const botaoStart = document.getElementById("botaoStart")
const incio = document.getElementById("backImg")
const gameBoard = document.getElementById("gameBoard")

botaoStart.addEventListener("click", () => {
    incio.classList.add("hidden")
    gameBoard.classList.remove("hidden")
})

/*pagina inicial /\ --------------------------------------------------- */

const homer = document.getElementsByClassName('caneca')[0]


window.addEventListener("keydown", (event) => {
    const homer = document.getElementsByClassName('caneca')[0]
    let kDown = event.key
    console.log(kDown)
    if (kDown === "ArrowRight") {
        const nextRight = homer.nextSibling.nextSibling;

        nextRight.classList.add('caneca');
        homer.classList.remove('caneca');

        console.log(homer.className ==="grid")
    } if (kDown === "ArrowLeft") {
        const nextLeft = homer.previousSibling.previousSibling
        if(nextLeft.className === "grid2"){
        nextLeft.classList.add('caneca')
        homer.classList.remove('caneca')
        }
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


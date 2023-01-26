const botaoStart = document.getElementById("botaoStart")
const incio = document.getElementById("backImg")
const gameBoard = document.getElementById("gameBoard")

botaoStart.addEventListener("click", () => {
    incio.classList.add("hidden")
    gameBoard.classList.remove("hidden")
    start()
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

//------------------------- PARA MEXER O HOMER /\ ----------------------------

const lata = document.getElementsByClassName('lata')[0]
const htmlPoints = document.getElementsByClassName("pontos")[0]

let points = 0

function start() {
    let counter = 0;
    const move = setInterval(() => {
        const lata = document.getElementsByClassName("lata")[0];
        const moveSlide =
        lata.nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling.nextElementSibling;
        moveSlide.classList.add("lata");
        lata.classList.remove("lata");
        counter++;
        console.log(counter);
        if (counter === 4) {
            clearInterval(move);
            moveSlide.classList.remove("lata");
      console.log(moveSlide.classList);
      if (moveSlide.classList.length === 2) {
       
        // se tiver duas classes "caneca" e "lata". player acertou
        points+=10;
        htmlPoints.innerHTML = points


        console.log(points)
      } else {
        console.log("player não pegou a cerveja");

      }
    }
    }, 1000);
}






















//  const move = setInterval (() =>{
//     const lata = document.getElementsByClassName('lata')[0];
// const moveSlide = lata.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
// moveSlide.classList.add('lata');
// lata.classList.remove('lata');

// if (moveSlide.className === "grid2") {
//     clearInterval(move)
//     moveSlide.classList.remove('lata')
//     } 
 
// },1000)
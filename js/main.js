const nubesIzq = document.querySelector("#nubesIzq")
const sun = document.querySelector("#sun")
const cactusCenter = document.querySelector("#cactusCenter")
const cactusIzq = document.querySelector("#cactusIzq")
const cactusDer = document.querySelector("#cactusDer")
const nubesDerecha = document.querySelector("#nubesDerecha")


window.addEventListener("scroll", ()=>{

let scroll = window.scrollY;

 nubesIzq.style.right = scroll*1 + "px"
 nubesDerecha.style.left = scroll*1 + "px"
 sun.style.bottom = scroll*1 + "px"
 cactusCenter.style.bottom = scroll*-1 + "px"

})
const html = document.querySelector("html")
const focoBt = document.querySelector(".app__card-button--foco")
const curtobt = document.querySelector(".app__card-button--curto")
const longoBt = document.querySelector(".app__card-button--longo")

focoBt.addEventListener ("click", () =>{
    html.setAttribute("data-contexto", "foco")
})

curtobt.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-curto")
})

longoBt.addEventListener("click", () => {
    html.setAttribute("data-contexto","descanso-longo")
})


const modalGaleria = document.querySelector("div.modal-galeria")
const btClose = modalGaleria.querySelector(".bt-close") 
const imgs = document.querySelectorAll("div.galeria-fotos img")

btClose.addEventListener("click", () => {
  modalGaleria.classList.remove("show")
})

imgs.forEach(img => {
  img.addEventListener("click", () => {
    modalGaleria.classList.add("show")
  })
})
document.getElementById("buscador").addEventListener("keyup", function() {
    let filtro = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();
        card.style.display = texto.includes(filtro) ? "block" : "none";
    });
});

function leerMas(btn) {
    let texto = btn.parentElement.querySelector(".descripcion");
    texto.style.display = texto.style.display === "none" ? "block" : "none";
}

function toggleModo() {
    document.body.classList.toggle("creeper");
}
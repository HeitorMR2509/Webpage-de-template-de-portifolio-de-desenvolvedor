const abrirNavegadorButton = document.querySelector(
  ".l-header-principal__abrirNavegador"
);
const fecharNavegadorButton = document.querySelector(
  ".l-header-principal__fecharNavegador"
);

const navegador = document.querySelector(".l-header-principal__navegador");
const navegadorDarkener = document.querySelector(
  ".l-header-principal__navegadorDarkener"
);


function openNavegador() {
    navegador.classList.remove("is-hidden");
    navegadorDarkener.classList.remove("is-hidden");
}

function closeNavegador() {
    navegador.classList.add("is-hidden");
    navegadorDarkener.classList.add("is-hidden");
}

abrirNavegadorButton.addEventListener("click", openNavegador);
fecharNavegadorButton.addEventListener("click", closeNavegador);
navegadorDarkener.addEventListener("click", closeNavegador);
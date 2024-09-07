function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "Nada encontrado. Digite algo para buscar."
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tag = dado.tags.toLowerCase();

    if (
        dado.titulo.includes(campoPesquisa) ||
     dado.descricao.includes(campoPesquisa) ||
     dado.tags.includes(campoPesquisa)
    ) {

        resultados += `<div class="item-resultado">
        <img class="img_comidas" src=${dado.imagem}>
    <div class="pratos">
        <h2>
        <img class="bandeiras" src=${dado.bandeira}>
            <a href="#" target="_blank">${dado.titulo} </a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba Mais</a>
        </div>
    </div>
`
    }
}

if (!resultados) {
    resultados = "Nada foi encontrado."
} 
section.innerHTML = resultados
}




// Adiciona um event listener ao botão de pesquisa que chama a função pesquisar ao ser clicado
document.getElementById("botao-pesquisa").addEventListener("click", pesquisar);

// Função que realiza a pesquisa com base no input do usuário
function pesquisar() {
    // Obtém a referência da seção onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');
    // Captura o valor do campo de pesquisa, remove espaços e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase(); 

    // Se o campo de pesquisa estiver vazio, exibe uma mensagem de busca vazia
    if (campoPesquisa === "") {
        section.innerHTML = '<p class="mensagem">Busca vazia</p>';
        return;
    }

    // Variável que irá armazenar os resultados da pesquisa
    let resultados = "";

    // Loop através dos dados (animes) para verificar se algum título ou descrição contém o termo pesquisado
    for (let dado of dados) {
        // Converte o título e a descrição para minúsculas para facilitar a comparação
        let titulo = dado.titulo.toLowerCase();      
        let descricao = dado.descricao.toLowerCase();

        // Verifica se o campo de pesquisa está presente no título ou na descrição
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Adiciona o resultado encontrado à variável 'resultados'
            resultados += `<div class="item-resultado">
                            <img src="${dado.imagem}">
                            <div class="descricao">
                                <h2>${dado.titulo}</h2>
                                <p>${dado.descricao}</p>
                            </div>
                        </div>`;
        }
    }

    // Se nenhum resultado foi encontrado, exibe uma mensagem
    if (!resultados) {
        resultados = '<p class="mensagem">Nada foi encontrado</p>';
    }

    // Insere os resultados na seção de pesquisa
    section.innerHTML = resultados;
}

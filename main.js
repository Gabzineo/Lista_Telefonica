let linhas = ''
const form = document.getElementById("form-telefone")


addEventListener('submit', function(reload){
    reload.preventDefault();

    adcionalinha()
    atualizartabela()
})

function adcionalinha(){
    const inputListaContatos = document.getElementById('Contatos')
    const inputNumeroTele = document.getElementById('Telefone')


    let linha = '<tr>';
    linha += `<td> ${inputListaContatos.value}</td>`;
    linha += `<td> ${inputNumeroTele.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputListaContatos.value = '';
    inputNumeroTele.value = '';
}

function atualizartabela(){
    const corpotabela = document.querySelector('tbody')
    corpotabela.innerHTML = linhas;
}


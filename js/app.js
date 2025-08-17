function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);
    if (tipoIngresso.value == 'inferior') {
        comprarInferior(quantidade);
    } else if (tipoIngresso.value == 'superior') {
        comprarSuperior(quantidade);
    } else {
        tipoIngresso.value == 'pista';
        comprarPista(quantidade);
    }

}

function comprarInferior(quantidade) {
    let quantidadeInferior = document.getElementById('qtd-inferior').textContent;
        if(quantidade > quantidadeInferior) {
            alert('Quantidade indiponível para tipo inferior');
        } else{
            quantidadeInferior = quantidadeInferior - quantidade;
            document.getElementById('qtd-inferior').textContent = quantidadeInferior
            alert('Compra realizada com sucesso');
        }
    
    
}

function comprarSuperior(quantidade) {
    let quantidadeSuperior = document.getElementById('qtd-superior').textContent;
    if(quantidade > quantidadeSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso');
    }
}

function comprarPista(quantidade) {
    let quantidadePista = document.getElementById('qtd-pista').textContent;
    if(quantidade > quantidadePista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso');
    }

}
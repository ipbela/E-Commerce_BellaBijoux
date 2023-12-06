//shmode777 apache

let carrinho = localStorage.getItem('carrinho').split(',');
let total = 0;

products.forEach(product => {
    carrinho.forEach(idCarrinho => {
        if (product.id == idCarrinho) {
            let cod = `
                <div class="product" id=${product.id}>
                    <a href="prodIndividual.html?id=${product.id}">
                        <img src="${product.poster}" id=${product.id} width="200px">
                    </a>
                    <div class="infos">
                        <p>${product.title}</p>
                        <h6>${product.subtitle}</h6>
                        <div class="infos2">
                            <h5 id="price">R$ ${product.price},00</h5>
                            <button type="button" id="delete" class="remove" onclick="removerItem(${product.id})"><svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 24 24"><path fill="currentColor" d="M7.615 20q-.69 0-1.152-.462Q6 19.075 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463h-8.77Zm2.193-3h1V8h-1v9Zm3.384 0h1V8h-1v9Z"/></svg></button>
                        </div>
                    </div>
                </div>
            `;

            var elem = document.getElementById("carrinho");
            elem.innerHTML += cod;

            //total do pedido
            total += product.price;
        }
    });
});

// Exibir o total na interface
var totalElem = document.getElementById("total");
totalElem.innerHTML = `<strong>Total do Pedido:</strong><br> R$ ${total.toFixed(2)}`; //exibe com duas casas decimais


function removerItem(itemId) {
    var elementoRemover = document.getElementById(itemId);
    elementoRemover.remove();

    // Obtenha a string do localStorage e divida-a em um array
    const carrinhoString = localStorage.getItem('carrinho');
    const carrinho = carrinhoString ? carrinhoString.split(',') : [];

    // Converta itemId para string
    const stringItemId = itemId.toString();

    // Filtra os itens, removendo apenas o item com o ID correspondente
    const novosItens = carrinho.filter(id => id !== stringItemId);

    // Atualiza o localStorage com o novo array
    localStorage.setItem('carrinho', novosItens.join(','));

    location.reload();
}

function limparCarrinho(){
    localStorage.removeItem('carrinho');
    location.reload();
}

function finalizarCompra(){
    nomeCompleto = document.getElementById('nome').value
    email = document.getElementById('email').value
    telefone = document.getElementById('telefone').value
    cep = document.getElementById('cep').value
    estado = document.getElementById('estado').value
    cidade = document.getElementById('cidade').value
    logradouro = document.getElementById('logradouro').value
    numero = document.getElementById('numero').value
    bairro = document.getElementById('bairro').value
    complemento = document.getElementById('complemento').value

    local = localStorage.getItem('compras');
    compras = JSON.parse(local) ? JSON.parse(local) : []

    carrinho.forEach(item => {
        products.forEach(product => {
            if(product.id == item){
                itemArray = {
                    "Id": item,
                    "Produto": product.title,
                    "Preco": product.price,
                    "Nome Completo": nomeCompleto,
                    "Email": email,
                    "Telefone": telefone,
                    "CEP": cep,
                    "Estado": estado,
                    "Cidade": cidade,
                    "Logradouro": logradouro,
                    "Numero": numero,
                    "Bairro": bairro,
                    "Complemento": complemento
                };
                compras.push(itemArray);
            }else{
                console.log("teste")
            }
        });
    });

    localStorage.setItem('compras', JSON.stringify(compras));
}
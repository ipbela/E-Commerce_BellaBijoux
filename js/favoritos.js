//shmode777 apache

let favoritos = localStorage.getItem('favoritos').split(',');

products.forEach(product => {
    favoritos.forEach(idFavorito => {
        if(product.id == idFavorito){
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
            
            var elem = document.getElementById("favoritos");
            elem.innerHTML += cod;

        }
    });
});

function removerItem(itemId) {
    var elementoRemover = document.getElementById(itemId);
    elementoRemover.remove();

    // Obtenha a string do localStorage e divida-a em um array
    const favoritosString = localStorage.getItem('favoritos');
    const favoritos = favoritosString ? favoritosString.split(',') : [];

    // Converta itemId para string
    const stringItemId = itemId.toString();

    // Filtra os itens, removendo apenas o item com o ID correspondente
    const novosItens = favoritos.filter(id => id !== stringItemId);

    // Atualiza o localStorage com o novo array
    localStorage.setItem('favoritos', novosItens.join(','));

    location.reload();
}


function limparFavoritos(){
    localStorage.removeItem('favoritos');
    location.reload();
}
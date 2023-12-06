prodFinalizados = localStorage.getItem('compras');
prodFinalizados = JSON.parse(prodFinalizados);

prodFinalizados.forEach(prod => {
    cod = `
        <tr>
            <th>${prod.Id}</th>
            <th>${prod.Produto}</th>
            <th>${prod.Preco}</th>
            <th>${prod['Nome Completo']}</th>
            <th>${prod.Email}</th>
            <th>${prod.Telefone}</th>
            <th>${prod.CEP}</th>
            <th>${prod.Estado}</th>
            <th>${prod.Cidade}</th>
            <th>${prod.Logradouro}</th>
            <th>${prod.Numero}</th>
            <th>${prod.Bairro}</th>
            <th>${prod.Complemento}</th>
        </tr>
    `;

    var elem = document.getElementById("tabela");
    elem.innerHTML += cod;
});

function limparAdm(){
    localStorage.removeItem('compras');
    location.reload();
}


let container = document.getElementById('list');

function loadProducts (products, container){
    products.forEach(product => {
        let html =`<div class="product">
        <div class="product-image">
            <img src="${product.poster}" alt="" width="210px">
        </div>
        <h1 class="product-title">${product.title}</h1>
        <p class="product-description">${product.subtitle}</p>
        <p class="product-price">R$: ${product.price},00</p>
        <a href="prodIndividual.html?id=${product.id}">
            <div class="product-button" data-id="${product.id}">
                VER MAIS DETALHES
            </div>
        </a>
        </div>`
        container.innerHTML += html
    })
}

loadProducts(products, container)
filtrarCategoria(products,container, loadProducts)

function filtrarCategoria (listaProdutos, container,loadProducts){
    let filtros = document.querySelectorAll("li.categorie")
    filtros.forEach(filtro => filtro.addEventListener('click', (e)=> {

        let categoriaSelecionada = e.target.id
        let prodFiltrados = listaProdutos.filter(produto => produto.category == categoriaSelecionada)
        container.innerHTML = ""
        loadProducts(prodFiltrados,container)

    }))
}


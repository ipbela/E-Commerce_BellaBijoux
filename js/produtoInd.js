id = window.location.search.substr(1).replace('id=', '');

// Encontrar o produto com o ID correspondente
const product = products.find(item => item.id == id);

// Verificar se o produto foi encontrado
if (product) {
    // Atualizar os elementos do DOM com as informações do produto
    document.getElementById('product-category').innerHTML = product.category;
    document.getElementById('product-name').innerHTML = product.title;
    document.getElementById('product-price').innerHTML = product.price;
    document.getElementById('product-description').innerHTML = product.description;

    // Usar setAttribute para definir o atributo src da imagem
    document.getElementById('img').setAttribute('src', product.poster);
    
} else {
    console.error('Produto não encontrado');
}

//CARRINHO
const input = id;
function addToCart(){
    carrinho = localStorage.getItem('carrinho');
    if(carrinho !== null){
        car = carrinho.split(',');
        car.push(id);
        localStorage.setItem('carrinho', car);
    }else{
        localStorage.setItem('carrinho', id)
    }

    var alert = document.getElementById('msg');
    alert.style.display = "block";
}

function hide(){
    var fechar = document.getElementById('fechar');
    var msg = document.getElementById('msg');
    fechar.style.display = "none";
    msg.style.display = "none";
}

//FAVS
function addToFavs(){
    favoritos = localStorage.getItem('favoritos');
    if(favoritos !== null){
        fav = favoritos.split(',');
        fav.push(id);
        localStorage.setItem('favoritos', fav);
    }else{
        localStorage.setItem('favoritos', id)
    }

    var alert = document.getElementById('msgFav');
    alert.style.display = "block";
}

function hideFavs(){
    var fechar = document.getElementById('fechar');
    var msg = document.getElementById('msgFav');
    fechar.style.display = "none";
    msg.style.display = "none";
}
let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct')

let listProducts = [];

iconCart.addEventListener('click', ()=> {
    body.classList.toggle('showCart')
});

closeCart.addEventListener('click', ()=> {
    body.classList.toggle('showCart')
});

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.lenght > 0){
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
                <img src="pizza2.png" alt="">
                <h3>Aloha Chicken</h3>
                <a href="#" class="btn">Add to cart</a>
            `;
                
        })
    }
}

const initApp = () => {
    //gat data fron json
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        addDataToHTML();
        
    })
}
initApp();




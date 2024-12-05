const product = [
    {
        id: 0,
        image:'pizza2.png',
        title:'Aloha Chicken',
        price: 16.00, 
    },
    {
        id: 1,
        image:'pizza3.png',
        title:'Hawaiian Pizza',
        price: 16.00, 
    },
    {
        id: 2,
        image:'pizza4.png',
        title:'Veggie Lover',
        price: 13.00, 
    },
    {
        id: 3,
        image:'pizza5.png',
        title:'Chicken Delight',
        price: 14.00, 
    },
    {
        id: 4,
        image:'pizza6.png',
        title:'Chicken Sensation',
        price: 16.00, 
    },
    {
        id: 5,
        image:'pizza7.png',
        title:'Chicken Pepperoni',
        price: 15.00, 
    },
    {
        id: 6,
        image:'pizza8.png',
        title:'Deluxe Cheese Pizza',
        price: 12.00, 
    },
    {
        id: 7,
        image:'pasta2.png',
        title:'Chicken Bolognaise Spaghetti',
        price: 17.00, 
    },
    {
        id: 8,
        image:'pasta3.png',
        title:'Asam Pedas Spaghetti',
        price: 17.00, 
    },
    {
        id: 9,
        image:'pasta4.png',
        title:'Classic Tomato Spaghetti',
        price: 16.00, 
    },
    {
        id: 10,
        image:'pasta5.png',
        title:'Salami Olio Spaghetti',
        price: 18.00, 
    },
    {
        id: 11,
        image:'pasta6.png',
        title:'Chicken Pepperoni Spaghetti',
        price: 17.00, 
    },
    {
        id: 12,
        image:'friedchicken2.png',
        title:'Crispy Chicken',
        price: 19.00, 
    },
    {
        id: 13,
        image:'friedchicken3.png',
        title:'Crispy BBQ Chicken',
        price: 19.00, 
    },
    {
        id: 14,
        image:'friedchicken4.png',
        title:'Crispy Cheezy Chicken',
        price: 19.00,
    },
    {
        id: 15,
        image:'drink1.png',
        title:'100 Plus',
        price: 3, 
    },
    {
        id: 16,
        image:'drink2.png',
        title:'Coke',
        price:  3, 
    },
    {
        id: 17,
        image:'drink3.png',
        title:'Sprite',
        price: 3, 
    },
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>     
            <div class='bottom'> 
            <p>${title}</p>
            <h2>RM ${price}</h2>`+
            "<button onclick ='addtocart("+(i++)+")'>Add to cart</button>"+         
            `</div>
            </div>`
       
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("total").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "RM"+.0+".00";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=> 
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "RM "+total;
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowing' src=${image}>
                </div>    
                <p style='font-size:13px;'>${title}</p>
                <h2 style='font-size: 15px;'>${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            )
            
        }).join('');
    }
}


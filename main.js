let minusBtn = document.querySelector(".input-minus");
let plusBtn = document.querySelector (".input-plus");
let userInput = document.querySelector (".input-number");
const imageContainer = document.querySelector(".gallery-container");
let userInputNumber = 0;

plusBtn.addEventListener("click", ()=>{
    userInputNumber++
    userInput.value = userInputNumber;
    console.log(userInputNumber);
})
minusBtn.addEventListener("click", ()=>{
    userInputNumber--
    if(userInputNumber<= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log( userInputNumber);
})


const addToCart = document.querySelector(".details-button");
let addedToCart = document.querySelector (".cart-notification");
let lastValue = parseInt(addedToCart.innerText);

addToCart.addEventListener("click", ()=>{
    lastValue = lastValue + userInputNumber;
    
    addedToCart.innerText =  lastValue;
    addedToCart.style.display = "block";
    console.log(addedToCart);
    drawProduct();
    
}); 

const cartIconBtn = document.querySelector(".header-cart");
const cartModal = document.querySelector(".cart-modal");

const productContainer = document.querySelector(".cart-modal-checkout-container");

cartIconBtn.addEventListener("click", ()=>{
    cartModal.classList.toggle("show");
    if(lastValue == 0){
        productContainer.innerHTML = (`<p class="cart-vacio"> Tu carrito esta vacio <p/>`);
    }else{
         drawProduct();
    }
    priceModal.innerHTML = `$120.000 x${lastValue}  $${lastValue*120.000}000`
   
});
function deleteProdudct(){
    const deletProductBtn = document.querySelector (".cart-modal-delete");


deletProductBtn.addEventListener("click" , () =>{
    productContainer.innerHTML = (`<p class="cart-vacio"> Tu carrito esta vacio <p/>`);
    lastValue=0.;
    addedToCart.innerText =  lastValue;
}

)
}


function drawProduct(){
    productContainer.innerHTML = ` 
    <div class="cart-modal-details-container">
        <img src="./images/producto1.png" alt="" class="cart-modal-img">
    <div>
        <p class="cart-modal-product-container">Bose A30 Aviation Headset</p>
        <p class="cart-modal-price-container">$120.000 x2 <span class="cart-modal-price">$240.000</span></p>
    </div>
    <img src="./images/borrar.png" alt="Borrar" class="cart-modal-delete">
</div>
    <button class="cart-modal-checkout">Pagar Ahora</button>`
    deleteProdudct()
    let priceModal = document.querySelector(".cart-modal-price-container")
    priceModal.innerHTML = `$120.000 x${lastValue} Unidades $${lastValue*120.000}.000`;
}

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".previous");
let imgIndex = 1;
const imageUrls = [
    
]
const imgContainer = document.querySelector(".gallery");
const modalImg = document.querySelector(".modal-gallery-background");
const closeModalBtn = document.querySelector(`.modal-gallery-close`);
closeModalBtn.addEventListener("click", ()=>
    modalImg.style.display = `none`
)
imageContainer.addEventListener("click",()=>{
    modalImg.style.display = `block`;
});

let miniaturas = document.querySelectorAll(".miniatura")
miniaturas = [...miniaturas]

miniaturas.forEach(miniatura => {
    miniatura.addEventListener("click", event=>{
        console.log(event.target.id)
        imageContainer.style.backgroundImage = `url("../images/producto${event.target.id}.png")`
    })
})

const modalImgContainer = document.querySelector(".modal-gallery-container")
let modalMiniaturas = document.querySelectorAll(".modal-miniatura")
modalMiniaturas = [...modalMiniaturas]
modalMiniaturas.forEach(modalMiniaturas => {
    modalMiniaturas.addEventListener("click", event=>{
        console.log(event.target.id.slice(-1))
        modalImgContainer.style.backgroundImage = `url("../images/producto${event.target.id.slice(-1)}.png")`
    })
})
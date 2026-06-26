function Cart (storageKey){
const cart = {

  cartItems : undefined,

 loadFromStoage : function () {

this.cartItems = JSON.parse(sessionStorage.getItem(storageKey));

if(!this.cartItems){
  this.cartItems = [];
}
},

saveToStorage() {
  sessionStorage.setItem(storageKey, JSON.stringify(this.cartItems));
},

 addToCart(productId) {
  let matchingItem;

  this.cartItems.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    this.cartItems.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }
  

  this.saveToStorage();
},

 removeFromCart(productId){
const newCart = [];
this.cartItems.forEach((cartItem)=>{
  if (cartItem.productId !== productId){
    newCart.push(cartItem);
  }
});

this.cartItems = newCart;

this.saveToStorage();

},

 updateQuantity(productId, newQuantity) {
  let matchingItem;

 this.cartItems.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  if (!matchingItem) {
    return;
  }

  matchingItem.quantity = newQuantity;
  this.saveToStorage();
},

updateDeliveryOption(productId, deliveryOptionId ){

   let matchingItem;

  this.cartItems.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });


  if (!matchingItem) {
    return;
  }

  const deliveryOptionExists = deliveryOptions.some((deliveryOption) => {
    return deliveryOption.id === deliveryOptionId;
  });

  if (!deliveryOptionExists) {
    return;
  }

  matchingItem.deliveryOptionId = deliveryOptionId;

  this.saveToStorage();

},
calculateCartQuantity() {
  let cartQuantity = 0;

  this.cartItems.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
},

 clearCart() {
  this.cartItems.length = 0;
  this.saveToStorage();
}

};

return cart;

}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStoage();
businessCart.loadFromStoage();

console.log(cart);
console.log(businessCart);

import { deliveryOptions } from "./deliveryOptions.js";













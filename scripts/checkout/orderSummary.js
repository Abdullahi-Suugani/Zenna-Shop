
import { cart, removeFromCart, updateDeliveryOption, updateQuantity } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import { deliveryOptions, getDeliveryOption, calculateDeliveryDate } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import { renderCheckoutHeader } from "./checkoutHeader.js";


export function renderOrderSummary() {
renderCheckoutHeader();





let cartSummaryHTML = '';



cart.forEach((cartItem)=> {
  const productId = cartItem.productId;
const  matchingProduct = getProduct(productId);



// products.forEach((product)=>{
//   if (product.id === cartItem.productId){
//     matchingProduct = product;
//   }
 
// });

// if (!matchingProduct) {
//   return;
// }

const deliveryOptionId = cartItem.deliveryOptionId;
const deliveryOption = getDeliveryOption(deliveryOptionId);
// let deliveryOption;

// deliveryOptions.forEach((option)=>{
//   if(option.id === deliveryOptionId) {
//     deliveryOption = option;
//   }
// });
// if (!deliveryOption) {
//   return;
// }

 const deliveryDate = calculateDeliveryDate(deliveryOption);
    const dateString = deliveryDate.format(

      'dddd, MMMM D'
    );

cartSummaryHTML += ` <div class="cart-item-container 
js-cart-item-container 
js-cart-item-container-${matchingProduct.id}" >
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name js-product-name-${matchingProduct.id}">
                 ${matchingProduct.name}
                </div>
                <div class="product-price js-product-price-${matchingProduct.id}">
                  ${matchingProduct.getPrice()}
                </div>
                <div class="product-quantity
                 js-product-quantity-${matchingProduct.id}">
                  <span>
                    Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
                    Update
                  </span>
                  <input class="quantity-input js-quantity-input-${matchingProduct.id}" value="${cartItem.quantity}">
                  <span class="save-quantity-link link-primary js-save-link" 
                  data-product-id="${matchingProduct.id}">Save</span>
                  <span class="delete-quantity-link link-primary js-delete-link
                  js-delete-link-${matchingProduct.id}" 
                  data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${deliveryOptionsHtml(matchingProduct, cartItem)}

              </div>
            </div>
          </div>
          
`;
});
function deliveryOptionsHtml(matchingProduct, cartItem){
let html = '';

  deliveryOptions.forEach((deliveryOption)=>{
    const deliveryDate = calculateDeliveryDate(deliveryOption);
    const dateString = deliveryDate.format(

      'dddd, MMMM D'
    );

    const priceCents = deliveryOption.priceCents ?? deliveryOption.pricenCents ?? 0;
    const priceSting = priceCents === 0
    ? 'FREE Shipping'
    : `$${formatCurrency(priceCents)} -`;
    
    const selectedOptionId = cartItem.deliveryOptionId || cartItem.deliveryOptionsId || '1';
    const isChecked = deliveryOption.id === selectedOptionId;

    html +=`<div class="delivery-option js-delivery-option js-delivery-option-${matchingProduct.id}-${deliveryOption.id}" 
    data-product-id="${matchingProduct.id}"
    data-delivery-option-id="${deliveryOption.id}" >
                  <input type="radio"
                 ${isChecked ? 'checked' : ''}
                    class="delivery-option-input js-delivery-option-input-${matchingProduct.id}-${deliveryOption.id}"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${priceSting} Shipping
                    </div>
                  </div>
                </div>
    
    `});
    return html;
}

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;


document.querySelectorAll('.js-delete-link')
.forEach((link)=>{
  link.addEventListener('click',()=>{
    
    const productId = link.dataset.productId;
    removeFromCart(productId);
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
  });
}); 

document.querySelectorAll('.js-update-link')
.forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.classList.add('is-editing-quantity');
  });
});

document.querySelectorAll('.js-save-link')
.forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    const quantityInput = document.querySelector(`.js-quantity-input-${productId}`);
    const newQuantity = Number(quantityInput.value);

    updateQuantity(productId, newQuantity);

    const quantityLabel = document.querySelector(`.js-quantity-label-${productId}`);
    quantityLabel.innerHTML = newQuantity;

    container.classList.remove('is-editing-quantity');
    renderPaymentSummary();
    renderCheckoutHeader();
  });
});

document.querySelectorAll('.js-delivery-option').forEach((element)=>{
  element.addEventListener('click',()=>{
    const {productId, deliveryOptionId} = element.dataset;

   updateDeliveryOption(productId, deliveryOptionId);
   renderOrderSummary();
   renderPaymentSummary();
   renderCheckoutHeader();

  });
});
};




// const totalItems = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);

// const returnToHomeLink = document.querySelector('.return-to-home-link');
// if (returnToHomeLink) {
//   returnToHomeLink.textContent = `${totalItems} items`;
// }

// const itemsSummaryLabel = document.querySelector('.payment-summary-row div');
// if (itemsSummaryLabel) {
//   itemsSummaryLabel.textContent = `Items (${totalItems}):`;
// }

// document.querySelector('.place-order-button').addEventListener('click', () => {
//   clearCart();
//   window.location.href = 'orders.html';
// });


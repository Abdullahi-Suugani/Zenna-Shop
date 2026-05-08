import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();

















// import { cart, removeFromCart, updateDeliveryOption, calculateCartQuantity, updateQuantity } from "../data/cart.js";
// import {products} from "../data/products.js";
// import { formatCurrency } from './utils/money.js'; 
// import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
// import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
// import { deliveryOptions } from '../data/deliveryOptions.js';
// hello();


// const today = dayjs();
// const delevereyDate = today.add(7, 'day');
// delevereyDate.format('dddd, MMMM D');
// console.log(delevereyDate.format('dddd, MMMM D'));

// function renderOderSummary() {

// function updateCartQuantity() {
//   const cartQuantity = calculateCartQuantity();

//   document.querySelector('.js-return-to-home-link').innerHTML = `${cartQuantity} items`;
// }

// updateCartQuantity();





// let cartSummaryHTML = '';



// cart.forEach((cartItem)=> {
// let matchingProduct;

// products.forEach((product)=>{
//   if (product.id === cartItem.productId){
//     matchingProduct = product;
//   }
 
// });

// if (!matchingProduct) {
//   return;
// }

// const deliveryOptionId = cartItem.deliveryOptionId || cartItem.deliveryOptionsId || '1';
// let deliveryOption;
// deliveryOptions.forEach((option)=>{
//   if(option.id === deliveryOptionId) {
//     deliveryOption = option;
//   }
// });
// if (!deliveryOption) {
//   return;
// }
//  const today = dayjs();
//     const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
//     const dateString = deliveryDate.format(

//       'dddd, MMMM D'
//     );

// cartSummaryHTML += ` <div class="cart-item-container 
// js-cart-item-container-${matchingProduct.id}" >
//             <div class="delivery-date">
//               Delivery date: ${dateString}
//             </div>

//             <div class="cart-item-details-grid">
//               <img class="product-image"
//                 src="${matchingProduct.image}">

//               <div class="cart-item-details">
//                 <div class="product-name">
//                  ${matchingProduct.name}
//                 </div>
//                 <div class="product-price">
//                   $${formatCurrency(matchingProduct.priceCents)}
//                 </div>
//                 <div class="product-quantity">
//                   <span>
//                     Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
//                   </span>
//                   <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
//                     Update
//                   </span>
//                   <input class="quantity-input js-quantity-input-${matchingProduct.id}" value="${cartItem.quantity}">
//                   <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}">Save</span>
//                   <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
//                     Delete
//                   </span>
//                 </div>
//               </div>

//               <div class="delivery-options">
//                 <div class="delivery-options-title">
//                   Choose a delivery option:
//                 </div>
//                 ${deliveryOptionsHtml(matchingProduct, cartItem)}

//               </div>
//             </div>
//           </div>
          
// `;
// });
// function deliveryOptionsHtml(matchingProduct, cartItem){
// let html = '';

//   deliveryOptions.forEach((deliveryOption)=>{
//     const today = dayjs();
//     const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
//     const dateString = deliveryDate.format(

//       'dddd, MMMM D'
//     );

//     const priceCents = deliveryOption.priceCents ?? deliveryOption.pricenCents ?? 0;
//     const priceSting = priceCents === 0
//     ? 'FREE Shipping'
//     : `$${formatCurrency(priceCents)} -`;
    
//     const selectedOptionId = cartItem.deliveryOptionId || cartItem.deliveryOptionsId || '1';
//     const isChecked = deliveryOption.id === selectedOptionId;

//     html +=`<div class="delivery-option js-delivery-option" 
//     data-product-id="${matchingProduct.id}"
//     data-delivery-option-id="${deliveryOption.id}" >
//                   <input type="radio"
//                  ${isChecked ? 'checked' : ''}
//                     class="delivery-option-input"
//                     name="delivery-option-${matchingProduct.id}">
//                   <div>
//                     <div class="delivery-option-date">
//                       ${dateString}
//                     </div>
//                     <div class="delivery-option-price">
//                       ${priceSting} Shipping
//                     </div>
//                   </div>
//                 </div>
    
//     `});
//     return html;
// }

// document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;


// document.querySelectorAll('.js-delete-link')
// .forEach((link)=>{
//   link.addEventListener('click',()=>{
    
//     const productId = link.dataset.productId;
//     removeFromCart(productId);


//     const container =document.querySelector(
//       `.js-cart-item-container-${productId}`
//     );
//     // console.log(container);
//     container.remove();
//     updateCartQuantity();

  

    

    
//   });
// }); 

// document.querySelectorAll('.js-update-link')
// .forEach((link) => {
//   link.addEventListener('click', () => {
//     const productId = link.dataset.productId;
//     const container = document.querySelector(`.js-cart-item-container-${productId}`);
//     container.classList.add('is-editing-quantity');
//   });
// });

// document.querySelectorAll('.js-save-link')
// .forEach((link) => {
//   link.addEventListener('click', () => {
//     const productId = link.dataset.productId;
//     const container = document.querySelector(`.js-cart-item-container-${productId}`);
//     const quantityInput = document.querySelector(`.js-quantity-input-${productId}`);
//     const newQuantity = Number(quantityInput.value);

//     updateQuantity(productId, newQuantity);

//     const quantityLabel = document.querySelector(`.js-quantity-label-${productId}`);
//     quantityLabel.innerHTML = newQuantity;

//     container.classList.remove('is-editing-quantity');
//     updateCartQuantity();
//   });
// });

// document.querySelectorAll('.js-delivery-option').forEach((element)=>{
//   element.addEventListener('click',()=>{
//     const {productId, deliveryOptionId} = element.dataset;

//    updateDeliveryOption(productId, deliveryOptionId);
//    renderOderSummary();

//   });
// });
// }
// renderOderSummary();



// // const totalItems = cart.reduce((total, cartItem) => total + cartItem.quantity, 0);

// // const returnToHomeLink = document.querySelector('.return-to-home-link');
// // if (returnToHomeLink) {
// //   returnToHomeLink.textContent = `${totalItems} items`;
// // }

// // const itemsSummaryLabel = document.querySelector('.payment-summary-row div');
// // if (itemsSummaryLabel) {
// //   itemsSummaryLabel.textContent = `Items (${totalItems}):`;
// // }

// // document.querySelector('.place-order-button').addEventListener('click', () => {
// //   clearCart();
// //   window.location.href = 'orders.html';
// // });

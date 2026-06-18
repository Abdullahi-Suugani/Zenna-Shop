import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import "../data/car.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

// import '../data/Backend-practice.js';

Promise.all([
  new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });
}),

new Promise((resolve) => {
      loadCart(() => {
        resolve('value2');
      });
    }),

]).then((values)=>{
  console.log(values);
   renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();

});
 
/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
}).then(() => {
    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  }).then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });

  */

/*
loadProducts(() => {
    loadCart(()=>{
    });
});
*/

import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import '../data/car.js';
import {loadProducts} from '../data/products.js';


// import '../data/Backend-practice.js';

loadProducts(() => {
renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();
});


















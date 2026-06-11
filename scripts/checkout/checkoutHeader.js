import { cart } from "../../data/cart-class.js";

export function renderCheckoutHeader() {
  const cartQuantity = cart.calculateCartQuantity();
  const returnToHomeLink = document.querySelector(".js-return-to-home-link");

  if (returnToHomeLink) {
    returnToHomeLink.innerHTML = `${cartQuantity} items`;
  }
}

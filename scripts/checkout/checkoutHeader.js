import { calculateCartQuantity } from "../../data/cart.js";

export function renderCheckoutHeader() {
  const cartQuantity = calculateCartQuantity();
  const returnToHomeLink = document.querySelector(".js-return-to-home-link");

  if (returnToHomeLink) {
    returnToHomeLink.innerHTML = `${cartQuantity} items`;
  }
}

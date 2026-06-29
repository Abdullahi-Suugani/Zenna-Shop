import { cart } from "../data/cart-class.js";
import { products, loadProducts } from "../data/products.js";

// muhii mada aan ka laha codekan javasctpt
// the main idea of javascript 1. save the data 2. generate the HTML 3. make it interactive 

loadProducts(renderProductsGrid);


function renderProductsGrid() {
  let productsHTML = "";

  products.forEach((product) => {
    productsHTML += `
      <article class="product-card">
        <figure class="product-image-frame">
          <img
            class="product-image"
            src="${product.image}"
            alt="${product.name}"
          >
        </figure>

        <h2 class="product-title limit-text-to-2-lines">${product.name}</h2>

        <p class="product-price">${product.getPrice()}</p>

        <div
          class="product-rating"
          aria-label="${product.rating.stars} out of 5 stars, ${product.rating.count} reviews"
        >
          <img
            class="product-rating-stars"
            src="${product.getStarsUrl()}"
            alt=""
            aria-hidden="true"
          >
          <span class="review-count">${product.rating.count} reviews</span>
        </div>

        <div class="product-quantity-container">
          <select
            class="js-quantity-selector-${product.id}"
            aria-label="Quantity for ${product.name}"
          >
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-extra-links">${product.extraInfoHTML()}</div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png" alt="">
          Added
        </div>

        <button
          class="add-to-cart-button js-add-to-cart"
          type="button"
          data-product-id="${product.id}"
        >
          Add to Cart
        </button>
      </article>`;
  });

  document.querySelector(".js-product-grid").innerHTML = productsHTML;

  function updateCartQuantity() {
    const cartQuantity = cart.calculateCartQuantity();
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  }

  updateCartQuantity();

  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
      );
      const quantity = Number(quantitySelector.value);

      cart.addToCart(productId, quantity);
      updateCartQuantity();
    });
  });
}

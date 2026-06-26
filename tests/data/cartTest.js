import { cart } from "../../data/cart-class.js";

describe("test suite: addToCart", () => {
  beforeEach(() => {
    spyOn(sessionStorage, "setItem");
  });

  it("adds an existing product to the cart", () => {
    cart.cartItems = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1,
        deliveryOptionId: "1",
      },
    ];

    cart.addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");

    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.cartItems[0].quantity).toEqual(2);
    expect(cart.cartItems[0].deliveryOptionId).toEqual("1");
    expect(sessionStorage.setItem).toHaveBeenCalledWith("cart", JSON.stringify(cart.cartItems));
  });

  it("adds a new product to the cart", () => {
    cart.cartItems = [];

    cart.addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");

    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.cartItems[0].quantity).toEqual(1);
    expect(cart.cartItems[0].deliveryOptionId).toEqual("1");
    expect(sessionStorage.setItem).toHaveBeenCalledWith("cart", JSON.stringify(cart.cartItems));
  });
});

describe("test suite: removeFromCart", () => {
  beforeEach(() => {
    spyOn(sessionStorage, "setItem");
  });

  it("removes a product that is in the cart", () => {
    cart.cartItems = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: "1",
      },
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: "2",
      },
    ];

    cart.removeFromCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");

    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual("15b6fc6f-327a-4ec4-896f-486349e85a3d");
    expect(sessionStorage.setItem).toHaveBeenCalledWith("cart", JSON.stringify(cart.cartItems));
  });

  it("does nothing if product is not in cart", () => {
    cart.cartItems = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: "1",
      },
    ];

    cart.removeFromCart("not-a-real-product-id");

    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(sessionStorage.setItem).toHaveBeenCalledWith("cart", JSON.stringify(cart.cartItems));
  });
});

describe("test suite: updateDeliveryOption", () => {
  beforeEach(() => {
    spyOn(sessionStorage, "setItem");
  });

  it("updates delivery option of a product in the cart", () => {
    cart.cartItems = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: "1",
      },
    ];

    cart.updateDeliveryOption("e43638ce-6aa0-4b85-b27f-e1d07eb678c6", "3");

    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.cartItems[0].deliveryOptionId).toEqual("3");
    expect(sessionStorage.setItem).toHaveBeenCalledWith("cart", JSON.stringify(cart.cartItems));
  });

  it("does nothing if productId does not exist in cart", () => {
    cart.cartItems = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: "1",
      },
    ];

    cart.updateDeliveryOption("not-a-real-product-id", "3");

    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].deliveryOptionId).toEqual("1");
    expect(sessionStorage.setItem).not.toHaveBeenCalled();
  });

  it("does nothing if deliveryOptionId does not exist", () => {
    cart.cartItems = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: "1",
      },
    ];

    cart.updateDeliveryOption("e43638ce-6aa0-4b85-b27f-e1d07eb678c6", "999");

    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].deliveryOptionId).toEqual("1");
    expect(sessionStorage.setItem).not.toHaveBeenCalled();
  });
});

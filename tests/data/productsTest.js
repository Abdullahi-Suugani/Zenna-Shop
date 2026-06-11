import { Appliance, Clothing, Product } from "../../data/products.js";

describe("test suite: Product", () => {
  it("creates a product and returns formatted display values", () => {
    const product = new Product({
      id: "product-1",
      image: "images/products/test-product.jpg",
      name: "Test Product",
      rating: {
        stars: 4.5,
        count: 10,
      },
      priceCents: 1090,
      keywords: ["test"],
    });

    expect(product.id).toEqual("product-1");
    expect(product.name).toEqual("Test Product");
    expect(product.getStarsUrl()).toEqual("images/ratings/rating-45.png");
    expect(product.getPrice()).toEqual("$10.90");
    expect(product.extraInfoHTML()).toEqual("");
  });
});

describe("test suite: Clothing", () => {
  it("creates clothing and returns size chart extra info", () => {
    const clothing = new Clothing({
      id: "clothing-1",
      image: "images/products/test-shirt.jpg",
      name: "Test Shirt",
      rating: {
        stars: 4,
        count: 20,
      },
      priceCents: 799,
      keywords: ["shirt"],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png",
    });

    expect(clothing.sizeChartLink).toEqual("images/clothing-size-chart.png");
    expect(clothing.getStarsUrl()).toEqual("images/ratings/rating-40.png");
    expect(clothing.getPrice()).toEqual("$7.99");
    expect(clothing.extraInfoHTML()).toContain("Size chart");
    expect(clothing.extraInfoHTML()).toContain("images/clothing-size-chart.png");
  });
});

describe("test suite: Appliance", () => {
  it("creates an appliance and returns instruction and warranty links", () => {
    const appliance = new Appliance({
      id: "appliance-1",
      image: "images/products/test-appliance.jpg",
      name: "Test Appliance",
      rating: {
        stars: 5,
        count: 30,
      },
      priceCents: 1899,
      keywords: ["appliance"],
      type: "appliance",
      instructionsLink: "images/appliance-instructions.png",
      warrantyLink: "images/appliance-warranty.png",
    });

    expect(appliance.instructionsLink).toEqual("images/appliance-instructions.png");
    expect(appliance.warrantyLink).toEqual("images/appliance-warranty.png");
    expect(appliance.getStarsUrl()).toEqual("images/ratings/rating-50.png");
    expect(appliance.getPrice()).toEqual("$18.99");
    expect(appliance.extraInfoHTML()).toContain("Instructions");
    expect(appliance.extraInfoHTML()).toContain("Warranty");
    expect(appliance.extraInfoHTML()).toContain("images/appliance-instructions.png");
    expect(appliance.extraInfoHTML()).toContain("images/appliance-warranty.png");
  });
});

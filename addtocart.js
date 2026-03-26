let main = document.querySelector(".main");
let buttons = document.querySelectorAll("button");
let addtocart = document.querySelector(".addtocart");
let total_display = document.getElementById("total-display");
// cart list
let cardlist = document.querySelector(".cardlist");

let cartbox = document.querySelector(".close_cart");
let productsDetails = [
  {
    productname: "Classic Oxford Button-Down",
    p_img: "./images/product1.jpg",
    p_des:
      "A versatile wardrobe staple made from premium heavy cotton. Perfect for the office or dinner.",
    price: 45,
    button: "Add to Cart",
  },
  {
    productname: "Slim-Fit Denim Shirt",
    p_img: "./images/product2.jpg",
    p_des:
      "Light-wash indigo denim with a modern slim cut. Features pearl snap buttons and a rugged finish.",
    price: 55,
    button: "Add to Cart",
  },
  {
    productname: "Linen Summer Shirt",
    p_img: "./images/product3.jpg",
    p_des:
      "Ultra-breathable linen blend in a relaxed fit. Keeps you cool and stylish during beach days.",
    price: 40,
    button: "out of stock",
  },
  {
    productname: "Heavyweight Flannel Plaid",
    p_img: "./images/product4.jpg",
    p_des:
      "Warm, double-brushed cotton flannel in a classic red and black buffalo check pattern.",
    price: 50,
    button: "Add to Cart",
  },
  {
    productname: "Mandarin Collar Tunic",
    p_img: "./images/product5.jpg",
    p_des:
      "A modern, collarless design for a minimalist aesthetic. Made from a soft cotton-silk blend.",
    price: 65,
    button: "out of stock",
  },
  {
    productname: "Essential White Dress Shirt",
    p_img: "./images/product6.jpg",
    p_des:
      "Crisp, wrinkle-resistant poplin with a spread collar. The perfect match for any tailored suit.",
    price: 60,
    button: "Add to Cart",
  },
  {
    productname: "Tropical Print Hawaiian",
    p_img: "./images/product7.jpg",
    p_des:
      "Bold floral patterns on silky rayon fabric. Features a relaxed camp collar for vacation vibes.",
    price: 35,
    button: "Add to Cart",
  },
  {
    productname: "Corduroy Work Shirt",
    p_img: "./images/product8.jpg",
    p_des:
      "Fine-wale corduroy with reinforced stitching. Durable enough for the outdoors, stylish enough for the city.",
    price: 70,
    button: "Add to Cart",
  },
];

let total = 0;
productsDetails.forEach((product) => {
  let card = document.createElement("div");
  card.style.width = "280px";
  card.style.padding = "10px";
  card.style.border = "2px solid grey";
  card.style.borderRadius = "10px";
  card.style.textAlign = "center";

  let productName = document.createElement("h1");
  productName.innerText = product.productname;

  let productImg = document.createElement("img");

  productImg.style.height = "300px";
  productImg.style.overflow = "hidden";

  productImg.style.objectFit = "cover";
  productImg.setAttribute("src", product.p_img);

  let productdes = document.createElement("p");
  productdes.innerText = product.p_des;

  let pricing = document.createElement("h4");
  pricing.innerText = product.price;
  let btn = document.createElement("button");
  btn.innerText = product.button;

  btn.addEventListener("click", () => {
    // Create a container for the cart row
    let cartItem = document.createElement("div");
    cartItem.className = "cart-row";
    cartItem.style.cssText = `
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 10px;
        border-bottom: 1px solid #eee;
        background: white;
        margin-bottom: 8px;
        border-radius: 8px;
    `;

    // Create the Mini Image
    let img = document.createElement("img");
    let cross = document.createElement("div");
    cross.className = "cancel";
    cross.innerHTML = "&times";
    img.setAttribute("src", product.p_img);
    img.style.cssText =
      "width: 50px; height: 50px; object-fit: cover; border-radius: 4px;";

    // Create the Info Container (Name + Price)
    let info = document.createElement("div");
    info.style.flex = "1";

    let productNames = document.createElement("h4");
    productNames.innerText = product.productname;
    productNames.style.margin = "0";
    productNames.style.fontSize = "14px";

    let priceTag = document.createElement("span");
    priceTag.innerText = `$${product.price}`;
    priceTag.style.color = "#6366f1";
    priceTag.style.fontWeight = "bold";

    info.append(productNames, priceTag);

    cartItem.append(img, info, cross);
    cardlist.prepend(cartItem);

    total_display.innerText = `$${(total += product.price)}`;
    cross.addEventListener("click", () => {
      cartItem.remove();
      let cannel = priceTag.innerText.slice(1);

      total_display.innerText = `$${(total -= cannel)}`;
    });
  });

  card.append(productName);
  card.append(productImg);
  card.append(productdes);
  card.append(pricing);
  card.append(btn);
  main.append(card);
  let Purchase_items = document.querySelector(".Purchase-items");
  Purchase_items.addEventListener("click", () => {
    cartItem.remove();
    alert("Thanks For Purshasing");
  });
});

cartbox.addEventListener("click", () => {
  cardlist.style.display = "none";
});

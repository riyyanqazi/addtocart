let main = document.querySelector(".main");
let buttons = document.querySelectorAll("button");
let addtocart = document.querySelector(".addtocart");
let total_display = document.getElementById('total-display')
// cart list
let cardlist = document.querySelector(".cardlist");

let productsDetails = [
  {
    productname: "Lenovo Legion",
    p_img:
      "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:437,cw:1125,ch:1125,q:80,w:1125/qqzaDJnM4UeYkV3bqP7JiK.jpg",
    p_des:
      "A powerful gaming laptop featuring the latest RTX graphics and a high-refresh-rate display for seamless gameplay.",
    price: 2000,
    button: "Add to Cart",
  },
  {
    productname: "MacBook Air M2",
    p_img:
      "https://www.texitech.com/wp-content/uploads/2026/01/Untitled-design-2026-01-23T094532.413.webp",
    p_des:
      "Strikingly thin and fast, the MacBook Air features the M2 chip, offering incredible performance and up to 18 hours of battery life.",
    price: 12000,

    button: "Add to Cart",
  },
  {
    productname: "Dell XPS 13",
    p_img:
      "https://hf-store.pk/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-04-at-5.13.32-AM-scaled.jpeg",
    p_des:
      "The ultimate ultra-portable laptop with a stunning InfinityEdge display and premium aluminum craftsmanship.",
    price: 3000,

    button: "out of stock",
  },
  {
    productname: "HP Spectre x360",
    p_img:
      "https://sm.pcmag.com/pcmag_uk/photo/l/lenovo-thi/lenovo-thinkpad-x1-carbon-gen-13_qph1.jpg",
    p_des:
      "A versatile 2-in-1 laptop that rotates 360 degrees, perfect for creative professionals who need a tablet and laptop in one.",
    price: 22000,

    button: "Add to Cart",
  },
  {
    productname: "ASUS ROG Zephyrus",
    p_img:
      "https://digitectechnologies.co.ke/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-31-at-18.23.58_3b051a40.jpg",
    p_des:
      "Engineered for elite gaming, this laptop combines a slim design with heavy-duty cooling and top-tier processing power.",
    price: 2000,

    button: "out of stock",
  },
];

let total = 0;
productsDetails.forEach((product) => {
  let card = document.createElement("card");
  card.style.width = "300px";
  card.style.border = "2px solid black";
  card.style.padding = "10px";
  card.style.borderRadius = "10px";
  card.style.textAlign = "center";

  let productName = document.createElement("h1");
  productName.innerText = product.productname;

  let productImg = document.createElement("img");

  productImg.style.width = "100%";
  productImg.style.height = "200px";
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

    cartItem.append(img, info);
    cardlist.append(cartItem);
total_display.innerText=`$${total+=product.price}`
  
});

  card.append(productName);
  card.append(productImg);
  card.append(productdes);
  card.append(pricing);
  card.append(btn);
  main.append(card);
});

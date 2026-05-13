const productDatabase = [
  {id:1, name:"Hoa Oải Hương", price:200000, img:"../assets/images/avt.jpg", productLink:"detail.html"},
  {id:2, name:" HoaTulip", price:15000, img:"../assets/images/avt.jpg", productLink:"detail.html"},
  {id:3, name:"Hoa Cúc", price:100000, img:"../assets/images/avt.jpg", productLink:"detail.html"},
  {id:4, name:"Hoa Hồng", price:180000, img:"../assets/images/avt.jpg", productLink:"detail.html"},
  {id:5, name:"Hoa Cẩm Tú Cầu", price:190000, img:"../assets/images/avt.jpg", productLink:"detail.html"},
  {id:6, name:"Hoa Nhái", price:18000, img:"../assets/images/avt.jpg" ,productLink:"detail.html"},
  {id:7, name:"Hoa Linh Lan", price:1000000, img:"../assets/images/avt.jpg", productLink:"detail.html"},
  {id:8, name:"Hoa Lưu Ly", price:300000, img:"../assets/images/avt.jpg", productLink:"detail.html"},
];
function loadProducts(products)
{
    for (let i = 0; i < products.length; i++) {
        addProduct_v2(products[i]);
    }
  }
function addProduct_v2(product) {
  const container = document.getElementById("product-list");

  // khung chứa sản phẩm
  const myDiv = document.createElement("div");
  myDiv.setAttribute("class", "product-item");

  const myDiv1 = document.createElement("div");
  myDiv1.setAttribute("class", "product-image");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.img);
  productImg.setAttribute("alt", product.name);

  myDiv1.appendChild(productImg);
  myDiv.appendChild(myDiv1);

  const myDiv2 = document.createElement("div");
  myDiv2.setAttribute("class", "product-info");

  const myP1 = document.createElement("p");
  myP1.textContent = product.name;

  const myP2 = document.createElement("p");
  myP2.textContent = product.price + " VND";

  const myLink = document.createElement("a");
  myLink.textContent = "Xem chi tiết";
  myLink.setAttribute("class", "btn btn-info");
  myLink.setAttribute("href", product.productLink + "?id=" + product.id);

  myDiv2.appendChild(myP1);
  myDiv2.appendChild(myP2);
  myDiv2.appendChild(myLink);

  myDiv.appendChild(myDiv2);
  container.appendChild(myDiv);
}



function addProduct(imgSrc, name, price, linkUrl) {
  const container = document.getElementById("product-list");

  const myDiv = document.createElement("div");
  myDiv.setAttribute("class", "product-item");

  const myDiv1 = document.createElement("div");
  myDiv1.setAttribute("class", "product-image");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", imgSrc);
  productImg.setAttribute("alt", name);

  myDiv1.appendChild(productImg);
  myDiv.appendChild(myDiv1);

  const myDiv2 = document.createElement("div");
  myDiv2.setAttribute("class", "product-info");

  const myP1 = document.createElement("p");
  myP1.textContent = name;

  const myP2 = document.createElement("p");
  myP2.textContent = price + " VND";

  const myLink = document.createElement("a");
  myLink.setAttribute("href", "detail.html?id="+linkUrl);
  myLink.textContent = "Xem chi tiết";

  myDiv2.appendChild(myP1);
  myDiv2.appendChild(myP2);
  myDiv2.appendChild(myLink);

  myDiv.appendChild(myDiv2);
  container.appendChild(myDiv);
}

function loadAllProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  for (let i = 0; i < productDatabase.length; i++) {
    addProduct(
      productDatabase[i].img,
      productDatabase[i].name,
      productDatabase[i].price,
      productDatabase[i].id,
    );
  }
}
// load
document.addEventListener("DOMContentLoaded", function() {
  loadAllProducts();
});
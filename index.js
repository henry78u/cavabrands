// create varibles for array Data placement
const productSubTitle1 = document.getElementById("productSubTitle");
const productTitle2 = document.getElementById("productTitle");
const  productPrice1 = document.getElementById("productPrice");
const productQuantity1 = document.getElementById("productQuality");
const productDetailsSpace = document.getElementById("productDetailsSpace");


let info = `
`
;
product.forEach(products => {
    productDetailsSpace.innerHTML = `
    <h6 id="productSubTItle1">${products.productSubTitle}</h6>
    <h2 id="productTitle">${products.productTitle}</h2>
    <h2 id="productPrice">$${products.productPrice}</h2>
    <select name="" id="">
      <option value="">Select Size</option>
      <option value="">${products.productSize[0]}</option>
      <option value="">${products.productSize[1]}</option>               
      <option value="">${products.productSize[2]}</option>
      <option value="">${products.productSize[3]}</option>
    </select>
    <input id="productQuality" type="number" value="1">
    <button class="normal">Add To Cart</button>
    <h4 id="productInfo">Product Details</h4>
    <span>
      ${products.productInfo}
    </span>
`
})



console.log("product");
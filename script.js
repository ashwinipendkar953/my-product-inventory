const products = [
  { id: 1, name: "Laptop", price: 24000, color: "red" },
  { id: 2, name: "Smartphone", price: 17000, color: "black" },
  { id: 3, name: "Tablet", price: 4500, color: "silver" },
  { id: 4, name: "Headphones", price: 5000, color: "black" },
  { id: 5, name: "Speaker", price: 10000, color: "silver" },
  { id: 6, name: "TV", price: 15000, color: "black" },
  { id: 7, name: "Earphones", price: 3000, color: "white" },
  { id: 8, name: "Smartwatch", price: 25000, color: "black" },
];

const isChecked = document.querySelector("#isChecked")
const productList = document.querySelector("#productList")
const displayTotalProducts = document.querySelector("#totalProducts")
const displayTotalInventoryCost = document.querySelector("#totalInventoryCost")


const renderProductList = (isChecked) => {
  const filterProducts = isChecked ? products.filter((product) => product.color === "black" && product.price > 5000) : products
  const productListHTML = filterProducts.map((product) => (
    `<li>
      <strong>Name:</strong> ${product.name}<br/>
      <strong>Price:</strong> $${product.price.toFixed(2)}<br/>
      <strong>Color:</strong> ${product.color}<br/>
    </li>
    <hr/>`
  ))

  productList.innerHTML = productListHTML.join("")

  const totalProducts = filterProducts.length
  displayTotalProducts.textContent = totalProducts

  const totalInventoryCost = filterProducts.reduce((acc, curr) => acc + curr.price , 0)
  displayTotalInventoryCost.textContent = "$" + totalInventoryCost.toFixed(2)
  
}

renderProductList(false)

isChecked.addEventListener("change", function(){
  renderProductList(isChecked.checked)
})
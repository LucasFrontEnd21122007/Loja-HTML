// Simulação de um carrinho de compras simples
let cart = [];

function addToCart(product) {
  cart.push(product);
  console.log("Produto adicionado ao carrinho:", product);
}

// Capturar os botões de "Adicionar ao Carrinho"
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Adicionar evento de clique para cada botão
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productElement = button.parentElement;
    const product = {
      name: productElement.querySelector("h2").textContent,
      price: parseFloat(productElement.querySelector("p").textContent.split(" ")[1]),
    };
    addToCart(product);
  });
});

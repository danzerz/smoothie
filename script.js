// creating smoothie class
class Smoothie {
  constructor(name, size, ingredients, base, quantity, instructions) {
    // using constructor
    this.name = name;
    this.size = size;
    this.ingredients = ingredients;
    this.base = base;
    this.quantity = quantity;
    this.instructions = instructions;
  }

  getDescription() {
    // returining the fomatted html with all the values
    return `
      <h3>Your Order</h3>
      <p><strong>Name:</strong> ${this.name}</p>
      <p><strong>Size:</strong> ${this.size}</p>
      <p><strong>Ingredients:</strong> ${this.ingredients.join(", ")}</p>
      <p><strong>Base:</strong> ${this.base}</p>
      <p><strong>Quantity:</strong> ${this.quantity}</p>
      <p><strong>Instructions:</strong> ${this.instructions || "None"}</p>
    `;
  }
}

// Event Listener
document.getElementById("orderButton").addEventListener("click", () => {
  // Get the customer name from the input field
  const name = document.getElementById("customerName").value;
  // get size
  const size = document.getElementById("size").value;
  // get ingredients from field
  const ingredients = Array.from(
    document.querySelectorAll('input[name="ingredients"]:checked')
  ).map((i) => i.value); // Map each selected checkbox to its value
  const base = document.querySelector('input[name="base"]:checked').value;
  const quantity = document.getElementById("quantity").value;
  const instructions = document.getElementById("instructions").value;

  // Create Smoothie Object
  const smoothie = new Smoothie(
    name,
    size,
    ingredients,
    base,
    quantity,
    instructions
  );

  // Output
  document.body.innerHTML += smoothie.getDescription();
});

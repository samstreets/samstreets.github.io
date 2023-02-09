function calculatePricePerTB() {
	const price = parseFloat(document.querySelector("#price").value);
	const size = parseFloat(document.querySelector("#size").value);
	const pricePerTB = price / size;
	document.querySelector("#result").innerHTML = `The price per TB is: £${pricePerTB}`;
}
const lunchOptions = ["Wraps", "Cheesy Wraps", "Toast", "Noodles", "Pate on Toast", "Sandwiches", "Bacon Sandwiches", "Warm Rolls", "Beans on Toast", "Fried Egg Sandwich", "Go Out"];
function generateLunch() {
  const randomLunch = lunchOptions[Math.floor(Math.random() * lunchOptions.length)];
  document.getElementById("lunch").value = randomLunch;
}

const dinnerOptions = ["Burgers", "Pizza", "Homemade Pizza", "Korma", "Butter Chicken", "Spaghetti Bolognese", "Cilli Con Carne", "Cheesy Bacon Pasta", "Honey Sesame Chicken",
"Chicken Nuggets & Chips", "Lasagna", "Pasta Bake", "Meatloaf", "Fish & Chips", "Stuffed Garlic Baguettes", "Go Out"];
function generateDinner() {
  const randomDinner = dinnerOptions[Math.floor(Math.random() * dinnerOptions.length)];
  document.getElementById("dinner").value = randomDinner;
}

const mealDealOptions = ["Sausage & Mash", "Chicken Korma", "Meatballs & Pasta"];
function generateMealDeal() {
  const randomMealDeal = mealDealOptions[Math.floor(Math.random() * mealDealOptions.length)];
  document.getElementById("mealDeal").value = randomMealDeal;
}

const outOptions = ["McDonald's", "Subway", "KFC", "Nandos", "Green King", "Weatherspoon's"];
function generateOut() {
  const randomOut = outOptions[Math.floor(Math.random() * outOptions.length)];
  document.getElementById("out").value = randomOut;
}

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul");


ingredients.forEach(function (elem, index) {
  elem = document.createElement("li")
  elem.textContent = ingredients[index];
  elem.classList.add("item");
  list.append(elem);
  console.log(elem);
});
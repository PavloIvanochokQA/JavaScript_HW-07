const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector("#ingredients")
const ingArray = ingredients.map(ingred => {
  const elem = document.createElement("li")
  elem.textContent = ingred
  elem.classList.add("item")
  return elem
})
listIngredients.append(...ingArray)
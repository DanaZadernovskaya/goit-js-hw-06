const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
ingredients.forEach(ingredient => {const item = document.createElement("li")
  item.textContent = ingredient;
  item.className = "item";
  document.querySelector('#ingredients').append(item)

});
// Write your code here...
const menuItemDivElement = document.getElementById('menu-items')

document.addEventListener('DOMContentLoaded', () => {
  fetch("http://localhost:3000/menu")
  .then(res => res.json())
  .then(json => {
    addMenuItems(json)
    displayFirstMenuItem(json[0])
    console.log(json)
  }) 

  addItemToCart()
  
})

// ## Challenge #1
// Fetch all the menu items from `http://localhost:3000/menu`. For each menu item create a `span` element that contains the name of the menu item, and add it to the `#menu-items` div.

function addMenuItems(menuJson) {
  menuJson.forEach(item => {
    const menuItemPElement = document.createElement('p')
    menuItemPElement.textContent = item.name
    menuItemPElement.addEventListener('click', () => displayFirstMenuItem(item))
    menuItemDivElement.appendChild(menuItemPElement)
  });
}

// Challenge #2
// When the page loads, display the first menu item. You should set the image, name, description, and price. All the correct elements to set are located in the #dish section element.
function displayFirstMenuItem(menuJsonItem) {
  const detailDishImage = document.getElementById('dish-image')
  const detailDishName = document.getElementById('dish-name')
  const detailDishDescription = document.getElementById('dish-description')
  const detailDishPrice = document.getElementById('dish-price')

  console.log(detailDishImage)
  console.log(detailDishName)
  console.log(detailDishDescription)
  console.log(detailDishPrice)

  detailDishImage.src = menuJsonItem.image
  detailDishName.textContent = menuJsonItem.name
  detailDishDescription.textContent = menuJsonItem.description
  detailDishPrice.textContent = `${menuJsonItem.price} $`
}

function addItemToCart() {
  const cartForm = document.getElementById('cart-form')

  cartForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const numberInCart = document.getElementById('number-in-cart')
    const cartEmount = document.getElementById('cart-amount')
    
    numberInCart.textContent = parseInt(numberInCart.innerHTML) + parseInt(cartEmount.value)
    cartForm.reset()
  })
}
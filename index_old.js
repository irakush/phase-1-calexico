// Write your code here...
const menuItemDivElement = document.getElementById('menu-items')
let cartItemsCount = {}
// let 

document.addEventListener('DOMContentLoaded', () => {
  fetch("http://localhost:3000/menu")
  .then(res => res.json())
  .then(json => {
    createCartItemsObject(json)
    addTotalInCartElement()
    addTotalCostElement()

    addMenuItems(json)

    displayFirstMenuItem(json[0])

    addItemToCart(json)
    
    updateTotalCost()
    console.log(json)
  })  
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
  const numberInCart = document.getElementById('number-in-cart')

  // console.log(detailDishImage)
  // console.log(detailDishName)
  // console.log(detailDishDescription)
  // console.log(detailDishPrice)

  console.log("NumberInCart: ", cartItemsCount[menuJsonItem.name])

  detailDishImage.src = menuJsonItem.image
  detailDishName.textContent = menuJsonItem.name
  detailDishDescription.textContent = menuJsonItem.description
  detailDishPrice.textContent = `${menuJsonItem.price} $`
  numberInCart.textContent = cartItemsCount[menuJsonItem.name]
}

function addItemToCart() {
  const cartForm = document.getElementById('cart-form')

  cartForm.addEventListener('submit', (event) => {
    event.preventDefault()

    // GET value from input
    const cartEmount = document.getElementById('cart-amount')

    let cartEmountValue = isNaN(+cartEmount.value) ? 0 : +cartEmount.value

    // Save to object
    const detailDishName = document.getElementById('dish-name')
    const productName = detailDishName.innerHTML.replace("&amp;", "&")
    cartItemsCount[productName] = cartItemsCount[productName] + cartEmountValue

    // Show Number in cart:
    const numberInCart = document.getElementById('number-in-cart')
    numberInCart.textContent = cartItemsCount[productName]
    
    upadateTotalInCart()
    cartForm.reset()
  })
}

function createCartItemsObject(json) {
  json.forEach(item => {
    cartItemsCount[item.name] = item.number_in_bag
  })

  console.log('cartItemsCount: ', cartItemsCount)
}

function addTotalInCartElement() {
  const sectionElement = document.getElementById('dish')
  const h3Element = document.createElement('h3')
  const spanElement = document.createElement('span')

  h3Element.textContent = 'Total in cart: '
  spanElement.textContent = '0'
  spanElement.id = 'total-number-in-cart'

  h3Element.appendChild(spanElement)
  sectionElement.appendChild(h3Element)
}

function upadateTotalInCart() {
  let totalCount = 0
  const totalInCart = document.getElementById('total-number-in-cart')

  // cartItemsCount.forEach(item => {
  //   totalCount += 
  // })

  Object.keys(cartItemsCount).forEach(key => {
    totalCount += cartItemsCount[key]
    // console.log(totalCount)
    // console.log(key, cartItemsCount[key]);
  });

  totalInCart.textContent = totalCount
}

function addTotalCostElement() {
  const sectionElement = document.getElementById('dish')
  const h3Element = document.createElement('h3')
  const spanElement = document.createElement('span')

  h3Element.textContent = 'Total cost: '
  spanElement.textContent = '0 $'
  spanElement.id = 'total-cost'

  h3Element.appendChild(spanElement)
  sectionElement.appendChild(h3Element)
}

function updateTotalCost() {
  
}
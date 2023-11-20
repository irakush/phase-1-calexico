document.addEventListener('DOMContentLoaded', (event) => {
  fetch('http://localhost:3000/menu')
  .then(res => res.json())
  .then(json => {
    addMenuItems(json)
    showDetails(json[0])
    addToCart()
  })
})

function addMenuItems(json) {
  const menuItemDiv = document.getElementById('menu-items')
  
  json.forEach(item => {
    let spanElement = document.createElement('span')

    spanElement.textContent = item.name
    menuItemDiv.appendChild(spanElement)

    spanElement.addEventListener('click', e => showDetails(item))
  })
}

function showDetails(menuItem) {
  console.log(menuItem)
  const dishName = document.getElementById('dish-name')
  const dishImage = document.getElementById('dish-image')
  const dishPrice = document.getElementById('dish-price')
  const dishDescription = document.getElementById('dish-description')

  dishName.textContent = menuItem.name
  dishImage.src = menuItem.image
  dishPrice.textContent = menuItem.price + " $"
  dishDescription.textContent = menuItem.description
}

function addToCart() {
  const formElement = document.getElementById('cart-form')
  let numberInCartElement = document.getElementById('number-in-cart')
  console.log('numberInCartElement :', numberInCartElement.innerHtml)

  formElement.addEventListener('submit', event => {
    event.preventDefault()
    // const numberInCartElement = document.getElementById('number-in-cart')
    const cartAmountElement = document.getElementById('cart-amount')

    console.log('numberInCartElement :', numberInCartElement)
    console.log('cartAmountElement :', cartAmountElement)

    numberInCartElement.textContent = parseInt(numberInCartElement.innerText) + parseInt(cartAmountElement.value)
    //parseInt()
    // Number()
    // +

  })
}
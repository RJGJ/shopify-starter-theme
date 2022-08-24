import Alpine from 'alpinejs'

import './styles/index.styl'

window.Alpine = Alpine

document.addEventListener('alpine:init', () => {
  console.log('hello from alpine')  
})

// Alpine.data reusable like components
Alpine.data('Cart', (cart) => ({
  // props
  cart,

  // data
  store_url: window.Shopify.routes.root,
  
  // methods
  removeItem(id) {
    this.changeQuantinty(id, 6)
  },
  changeQuantinty(id, quantity=null) {
    if (quantity === null) {
      const quantity_el = document.querySelector(`[data-quantity="${id}"]`)
      quantity = parseInt(quantity_el.value)
      console.log(quantity)
    }
    // return
    fetch(this.store_url + 'cart/change.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        quantity,
        id
      })
    })
      .then(async (response) => {
        console.log(await response.json())
        location.reload()
      })
  },
  updateCart() {
    console.log(this.cart)
  }
}))

Alpine.start()

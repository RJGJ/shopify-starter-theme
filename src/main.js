import Alpine from 'alpinejs'

import './styles/index.styl'

window.Alpine = Alpine

document.addEventListener('alpine:init', () => {

  // // client side navigation
  // document.querySelectorAll('a').forEach(a => {
  //   a.addEventListener('click', (ev) => {
  //     ev.preventDefault()
  //     history.replaceState({}, "", a.href)
  //     fetch(a.href)
  //       .then(response => response.text())
  //       .then(text => {
  //         const new_document = new DOMParser().parseFromString(text, "text/html")
  //         document.head = new_document.head
  //         document.body = new_document.body
  //         Alpine.start()
  //       })
  //       .catch(err => console.error(err))
  //   })
  // })
})

// Alpine.data reusable like components
Alpine.data('Cart', (cart) => ({
  // props
  cart,

  // data
  store_url: window.Shopify.routes.root,
  
  // methods
  removeItem(id) {
    this.changeQuantinty(id, 0)
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

Alpine.data('ProductSearch', () => ({
  search_term: '',
  products: [],

  async search() {
    if (!this.search_term) return

    const response = await fetch(`/search/suggest.json?q=${this.search_term}&resources[type]=product`)
    const json = await response.json()
    this.products = json.resources.results.products
    console.log(this.products)
  }
}))

Alpine.start()

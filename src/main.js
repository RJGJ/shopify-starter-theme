import Alpine from 'alpinejs'

import './styles/index.styl'

window.Alpine = Alpine

document.addEventListener('alpine:init', () => {
  console.log('hello from alpine')  
})

Alpine.start()

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('hello world')



//   // cart listeners
//   document
//     .querySelectorAll('[data-remove-line-item]')
//     .forEach(remove => {
//       const product_id = remove.getAttribute('data-remove-line-item')
//       remove.addEventListener('click', () => {
//         console.log(product_id)

//         fetch('/cart/change.js', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             quantity: 0,
//             id: product_id
//           })
//         })
//           .then(response => response.json())
//           .then(json => console.log(json))
//           .catch(err => console.err(err))
//       })
//     })
// })
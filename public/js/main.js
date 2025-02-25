const deleteBtn = document.querySelectorAll('.fa-trash')
const orderItem = document.querySelectorAll('span.not')
const orderComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener('click', deleteOrder)
})

Array.from(orderItem).forEach((el) => {
  el.addEventListener('click', markComplete)
})

Array.from(orderComplete).forEach((el) => {
  el.addEventListener('click', markIncomplete)
})

async function markComplete() {
  const orderId = this.parentNode.dataset.id
  try {
    const response = await fetch('orders/markComplete', {
      method: 'put', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'orderIdFromJSFile': orderId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (error) {
    console.error("Unable to mark this order complete because " + error)
  }
}

async function markIncomplete() {
  const orderId = this.parentNode.dataset.id
  try {
    const response = await fetch('orders/markIncomplete', {
      method: 'put', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'orderIdFromJSFile': orderId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (error) {
    console.error("Unable to mark this order incomplete because " + error)
  }
}

async function deleteOrder() {
  const orderId = this.parentNode.dataset.id
  try {
    const response = await fetch('orders/deleteOrder', {
      method: 'delete', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'orderIdFromJSFile': orderId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (error) {
    console.error("Unable to delete this work order because " + error)
  }
}
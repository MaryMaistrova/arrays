// Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.


const shoppingList = [
  { product: 'Milk', quantity: 1, price: 1, cost: 1, isBought: true },
  { product: 'Bread', quantity: 2, price: 1.5, cost: 3, isBought: false },
  { product: 'Eggs', quantity: 4, price: 0.75, cost: 3, isBought: false },]

const sortedSL = []

function notBoughtPriority() {
  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].isBought === false) {
      sortedSL.push(shoppingList[i])
    }
  }

  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].isBought === true) {
      sortedSL.push(shoppingList[i])
    }
  }
  console.log(sortedSL)
}

// notBoughtPriority()

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function purchase(product) {

  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].product === product) {
      shoppingList[i].isBought = true
    }
  }
  console.log(shoppingList)
}

// purchase('Eggs')



// Норма

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

const updatedSLAfterDeletion = []

function deleteItem(item) {
  for (let i = 0; i < shoppingList.length; i++) {

    updatedSLAfterDeletion.push(shoppingList[i])

    if (updatedSLAfterDeletion[i].product === item) {
      updatedSLAfterDeletion.splice(i, 1)
    }
  }
}

// deleteItem('Eggs')
// console.log(updatedSLAfterDeletion)



// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

function addProduct(product, quantity, price) {
  for (let i = 0; i < shoppingList.length; i++) {
    const item = shoppingList[i];

    if (item.product === product && item.price === price && !item.isBought) {
      item.quantity += quantity
      item.cost = item.quantity * price
      return
    }
  }

  const item = { product, quantity, price, cost: quantity * price, isBought: false }

  shoppingList.push(item)
}


addProduct('Bread', 1, 1)

console.log(shoppingList)























// Максимум

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// Підрахунок суми всіх (не) придбаних продуктів.
// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
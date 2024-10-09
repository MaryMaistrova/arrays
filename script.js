// Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.


const shoppingList = [
  { product: 'Milk', quantity: 1, isBought: true, price: 1, sum: 1 },
  { product: 'Bread', quantity: 2, isBought: false, price: 1.5, sum: 3 },
  { product: 'Eggs', quantity: 4, isBought: false, price: 0.75, sum: 3 },]

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

function purchase(product) {
  product === shoppingList[0].product ? shoppingList[0].isBought = true : shoppingList[0].isBought = false
  product === shoppingList[1].product ? shoppingList[1].isBought = true : shoppingList[1].isBought = false
  product === shoppingList[2].product ? shoppingList[2].isBought = true : shoppingList[2].isBought = false
}

purchase('Milk')
console.log(shoppingList)
purchase('Bread')
console.log(shoppingList)























// Норма

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
// Максимум

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// Підрахунок суми всіх (не) придбаних продуктів.
// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
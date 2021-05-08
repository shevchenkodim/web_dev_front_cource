function drawGameFields(size) {
 let field = $('.field');
 let from = 1;
 let to = Math.pow(size, 2);
 let arr = [];
 arr = createArr(from, to);
 createCells(size, field, arr);
}

function createCells(size, elem, arr) {
 elem.html(function(index, element) {
  let content = '';
  let e = 0; //початковий індекс масиву
  for (let i = 0; i < size; i++) {
   content += '<tr>';
   for (let j = 0; j < size; j++) {
    content += '<td>' + arr[e] + '</td>'; // додаємо число
    e++; // збільшуємо індекс масиву
   }
   content += '</tr>';
  }
  return content; //повертаємо побудоване поле
  });
}

function createArr(from, to) { //створюємо масив чисел
 let arr = [];
 for (let i = from; i <= to; i++) {
  arr.push(i); //додаємо до масиву число
 }
 arr.sort(function compareRandom(a, b) { // перемішуємо масив
  return Math.random() - 0.5;
 });
 return arr; // повертаємо готовий масив
}

function newGame(size) {
 drawGameFields(size); //викликаємо побудову ігрового поля
 let counter = 1; //перша клітинка, яка очікується до натискання
 resetTimer()
 $('td').click(function(eventObject) { //обробник натискання
  if ($(this).text() == counter) { //цифра в клітинці = очікуваній
   $(this).addClass("active"); // позначаємо цю клітинку
   if (counter == size * size) { // чи це не максимальне число
    alert("Вітаємо! Новий рівень?");
    size++; //збільшуємо рівень
    newGame(size); //знову викликаємо цю ж функцію
   } else {
    counter++; // збільшуємо очікуване число
   }
  } else {
   alert("Упсс! Помилка. \n Почнемо спочатку?");
   size = startSize; //повертаємо до початкового рівня
   newGame(size); //знову викликаємо цю ж функцію
  }
 });
}


function startTimer() {
 setInterval(() => {
  sec++
  if(timer === sec) {
   alert('Ваш час вийшов!')
   size = startSize; //повертаємо до початкового рівня
   newGame(size); //знову викликаємо цю ж функцію
  }
 }, 1000)
}

function resetTimer() {
 sec = 0
}
'user strict';
function generateRandomnumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


BookShop.bookShop = [];
let toTal = 0;

function BookShop(nameBook, pageBook, priceBook) {
  this.nameBook = nameBook;
  this.pageBook = pageBook;
  this.priceBook = priceBook;
  BookShop.bookShop.push(this);
}

let div = document.getElementById('table');
let table = document.createElement('table');
div.appendChild(table);




function dom() {
  let tr = document.createElement('tr');
  table.appendChild(tr);
  let td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = 'Book Name';
  let td1 = document.createElement('td');
  tr.appendChild(td1);
  td1.textContent = 'Book Pages';
  let td2 = document.createElement('td');
  tr.appendChild(td2);
  td2.textContent = 'Price';
  console.log(div);
}
dom();





BookShop.prototype.render = function () {
  let tr2 = document.createElement('tr');
  table.appendChild(tr2);
  let tdFirst = document.createElement('td');
  tr2.appendChild(tdFirst);
  tdFirst.textContent = this.nameBook;
  let tdSecond = document.createElement('td');
  tr2.appendChild(tdSecond);
  tdSecond.textContent = this.pageBook;
  let tdThird = document.createElement('td');
  tr2.appendChild(tdThird);
  tdThird.textContent = this.priceBook;
  console.log(div);
};


document.addEventListener('submit', handeler);

function handeler(event) {
  event.preventDefault();
  let bookName = event.target.bookName.value;
  console.log(bookName);
  let bookPage = generateRandomnumber(1, 500);
  console.log(bookPage);
  let bookPrice = event.target.bookPrice.value;
  console.log(bookPrice);
  let bookNew = new BookShop(bookName, bookPage,bookPrice);
  saveToLocal();
  bookNew.render();
}


// function footerTable (){
//   let tr3 = document.createElement('tr');
//   table.appendChild(tr3);
//   toTal=toTal+BookShop.bookShop;
//   tr3.textContent = 'Total = ' + toTal;
// }
// footerTable ();

function saveToLocal(){
  localStorage.setItem('Books', JSON.stringify(BookShop.bookShop));
}


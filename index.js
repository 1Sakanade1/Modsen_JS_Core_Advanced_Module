"use strict";

const { constants } = require("fs");

//1) функция принимающая массив и возвращающая bool в зависимости от того есть ли дубликаты

const task1 = (massive) => {
  const testSet = new Set(massive);

  return testSet.size !== massive.length;
};
console.log("task1 ----");
console.log(task1([1, 2, 3]));
console.log(task1([1, 2, 2]));
console.log("----------");
//2) var let const

const task2 = () => {
  var zxc1 = "zxc1";
  let zxc2 = "zxc2";
  const zxc3 = "zxc3";
};
//console.log(zxc1); -- везде ошибки о том что не объявлено
//console.log(zxc2);
//console.log(zxc3);

//3) принимает число и выводит кол-во цифр

const task3 = (number) => {
  return ("" + number).length;
};

console.log("task3 : input - 1234567 , output:" + task3(1234567));
console.log("----------");

//4)функция принимает массив и находит сумму тех, которые  0 < x < 10

const task4 = (array) => {
  let res = 0;
  array.forEach((element) => {
    if (element > 0 && element < 10) {
      res += element;
    }
  });
  return res;
};

console.log(
  "task4 : input - [1,2,-10,+100] , output:" + task4([1, 2, -10, +100])
);
console.log("----------");

//5)генерирует id строки длины number из случайных символов

const task5 = (number) => {
  let idres = "";
  for (let i = 0; i < number; i++) {
    idres += String.fromCharCode(
      Math.floor(Math.random() * (126 - 32 + 1)) + 32
    );
  }
  return idres;
};

console.log("task5 : input - 15 , output:" + task5(15));
console.log("----------");

//6)классы

class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }

  getInfo() {
    console.log(`name: ${this.name}, author ${this.author}, year ${this.year}`);
  }
}

class EBook extends Book {
  constructor(name, author, year, price) {
    super(name, author, year);
    this.price = price;
  }

  getInfo() {
    console.log(
      `Name: ${this.name}, Author: ${this.author}, Year: ${this.year}, Price: ${this.price}`
    );
  }
}
console.log("task6:");
let ebook = new EBook("McCarthy", "Blood Meridian", 2024, 9.99);
ebook.getInfo();
console.log("----------");

//7)ошибка если аргумент массив пустой

const task7 = (array) => {
  if (!array.length) {
    throw new Error("massiv pustoi");
  }
  return array;
};

console.log("task7: " + task7([1]));
//task7([]);    // throws err
console.log("----------");

//8)ватахел

//9) асинк авейт запрос на сервер должен работать по идее
const task9 = async (id) => {
  const res = await fetch(`http://localhost:3000/api/user/${id}`)
    .then((data) => {
      console.log("data:" + data);
    })
    .catch((error) => console.log("сервера не существует! или еще что-то"));
};

console.log("task9:");
task9();
console.log("----------");

//10) 10 раз вывести сообщение но сеттаймаут и нью промис можно по 1 разу вызывать

const task10 = () => {
  return new Promise(() => {
    let counter = 0;
    const intreval = setInterval(() => {
      console.log("message");
      counter++;
      if (counter === 3) {
        //10----------^
        clearInterval(intreval);
      }
    }, 1000);
  });
};

task10();

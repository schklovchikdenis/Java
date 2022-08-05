"use strict"


// let str = 'Проверка';
// document.write(str);
// document.write('<b>' + str + '</b>');
// document.write('text<br>text');
// document.write('text1<br>');
// document.write('text2<br>');
// document.write('text3<br>');
// document.write('<i>Какой то текст курсивом</i>');
// let str = 'Мой текст';
// document.write('<i>' + str + '</i>');
// document.write(1+ '<br>');
// document.write(2 +'<br>');
// document.write(3 +'<br>');
// document.write(4 +'<br>');
// document.write(5 + '<br>');
// document.write(60 * 60 * 24 * 265+ '<br>');
// document.write(60 * 24 + '<br>');
// document.write(60 * 24 * 265 + '<br>');
// let a = 10;
// let b = 20;
// let p = 2 * (a + b);
// document.write(p);
// let tc = 10;
// let tf = tc * 1.8 + 32;
// document.write(tf);
// let ft = 50;
// let tc = (ft - 32) / 1.8;
// document.write('Температутра по цельсию равна: ' + tc);

// Массивы

// let arr = ['a', 'b', 'c'];
// alert(arr);
// console.log(arr);
// document.write(arr[0]+ '<br>');
// document.write(arr[1] + '<br>');
// document.write(arr[2] + '<br>');
// let a = ['a', 'b', 'c', 'd'];
// document.write(a[0]+'+'+a[1]+'+'+a[2]+'+'+a[3]);
// let a = [1, 2, 3];
// document.write(a[0] + a[1] + a[2]);
// let a = [2, 5, 3, 9];
// let b = a[0] * a[1];
// let c = a[2] * a[3];
// let result = (b+ c);
// document.write(result);
// let a = [1, 2, 3, 4, 5];
// document.write(a.length);
// Перезапись элементов массива
// let num = ['a', 'b', 'c'];
// num[0] = 1;
// num[1] = 2;
// num[2] = 3;
// document.write(num);
// Увеличение значений
// let num = [1, 2, 3, 4, 5];
// num[0] += 3;
// num[1] += 3;
// num[2] += 3;
// num[3] += 3;
// num[4] += 3;
// document.write(num);
// Инкремент
// let num = [1, 2, 3, 4, 5];
// num[0] ++;
// num[1] ++;
// num[2] ++;
// num[3] ++;
// num[4] ++;
// document.write(num);

// Заполнение массива
// let num = [];
// num[0] = 1;
// num[1] = 2;
// num[2] = 3;
// document.write(num);

// let arr = [1, 2, 3];
// arr[3] = 4;
// arr[4] = 5;
// document.write(arr);

// Разряженный массив
// let arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// document.write(arr.length);

// Обьекты

// let obj = { 1: 'a', 2: 'b', 3: 'c' };
// console.log(obj);

// // Строковые ключи
// let s = { a: 1, b: 2, c: 3, };
// document.write(s['a'] + s['b'] + s['c']);

// // Ограничение строковых ключей
// let d = { '1a': 1, '2b': 2, 'c-c': 3 };
// document.write(d['1a'] + d['2b'] + d['c-c']);

//Альтернативный синтаксис

// let obj = { key1: 1, key2: 2, key3: 3 };
// document.write(obj.key1 + obj.key2 + obj.key3)

// let user = { name: 'Den', surname: 'Genn', patronymic: 'Schkl' };
// document.write(user.name+'&nbsp;'+user.surname+' '+user.patronymic)

// let data = {year: 2022, month: 'июля', day: 15 };
// document.write(data.year + ' ' + data.month + ' ' + data.day);


// let obj = {}
// obj.a = 1;
// obj.b = 2;
// obj.c = 3;
// console.log(obj);


// let arr = ['a', 'b', 'c'];
// let key = 2;
// document.write(arr[key]);

// Ключи объектов

// let obj = {'a':1, 'b':2, 'c':3};
// let key = 'c';
// console.log(obj[key]);

//Оператор in в Javascript

// let obj = {a:1, b:2, c:3, d:4, e:5};
// console.log('f' in obj);
// console.log('e' in obj);


//Delete в Javascript

// let arr = ['a', 'b','c','d','e'];
// delete arr[1];
// delete arr[3];
// document.write(arr.length);

//Константы с массивами или обьектами
// Опраторы сравнения в Javascript

// let a = 11;
// if (a>10){
//     alert('Верно')
// }else {
//     alert('Неверно')
// }
// let test = 8;
// if (test<10){
//     alert('Верно')
// }else{
//     alert('Неверно')
// }

// let test = 11;
// if (test>=10){
//     alert('Верно')
// }else{
//     alert('Неверно')
// }

// let test = 9;
// if (test<=10){
//     alert('Верно')
// }else{
//     alert('Неверно')
// }

// let test =10;
// if (test==10){
//     alert('Верно')
// }else {
//     alert('Неверно')
// }

// let test = 9;
// if (test!=10){
//     alert('Верно')
// }else{
//     alert('Неверно')
// }

// let test1 = 9;
// let test2 = 10;
// if (test1<test2){
//     alert('верно')
// }else {
//     alert('неверно')
// }

//Операторы сравнения
// let num = 6;
// if (num>0&&num<5){
//     alert('Верно')
// }else{
//     alert('Неверно')
// }
// let num = 10;
// if (num>=10&&num<=20){
//     alert("Верно")
// }else{
//     alert('Неверно')
// }

// let num1 = 1;
// let  num2 = 2;
// if (num1<=1&&num2>=3){
//     alert('Верно')
// }else{
//     alert('Неверно')
// }
// let num1 = 1;
// let  num2 = 2;
// if (!(num1>=0||num2<=10)){
//     alert('Верно')
// }else{
//     alert('Неверно')
// }
// let month = 2;
//
// if (month >=3 && month <= 5){
//     document.write('Весна')
// }else if(month >=6 && month <= 8){
//     document.write('Лето')
// }else if(month >=9 && month <= 11){
//     document.write('Осень')
// }else {
//     document.write('Зима')
// }

// let text = 'g,b,c,d,e';
// let a = text[0];
// if (a == 'a'){
//     document.write('Да')
// }else{
//     document.write('Нет')
// }
//
// console.log(text[0]);

// let num = 223456789;
// let b = String(num);
// let c = b[0];
//
// if (c == 1 || c == 2 || c == 3){
//     alert('Да')
// }else{
//     alert('Нет')
// }

// let a = 123;
// let b = String(a);
// let z = Number(b[0])+Number(b[1])+Number(b[2]);
// console.log(z);


// let a = 123121;
// let b = String(a);
// let c = Number(b[0])+Number(b[1])+Number(b[2]);
// let d = Number(b[3])+Number(b[4])+Number(b[5]);
// if (c==d){
//     document.write('Да')
// }else {
//     document.write('Нет')
// }

// let num;
// num = 5;
// switch (num) {
//     case 1:document.write('Зима');
//     break;
//     case 2:document.write('Весна');
//     break;
//     case 3: document.write('Лето');
//     break;
//     case 4: document.write('Осень');
//     break;
//     default: document.write('Ошибка');
//     break;
// }

// let num = 0;
// let result = (num >= 0) ? 1 : -1;
// document.write(result);

// let age = confirm('Вам есть уже 18 лет?');
// if (age) {
//     alert('Контент для взрослых')
// } else {
//     alert('Доступ запрещен')
// }

//Циклы
// WHILE
// let i = 1;
// while (i <= 100) {
//     document.write(i);
//     i++;
// }

// let j = 11;
// while (j <= 33) {
//     document.write(j);
//     j++;
// }

// let k = 0;
// while (k <= 100) {
//     document.write(k);
//     k += 2;
// }

// let i = 1;
// while (i <= 99) {
//     document.write(i);
//     i += 2;
// }

// let j = 30;
// while (j >= 0) {
//     document.write(j);
//     j--;
// }

//FOR

// for (let i = 1; i <= 100; i++){
//     document.write(i)
// }

// for (let j = 11; j <= 33; j++){
//     document.write(j)
// }
// for (let k = 0; k <= 100; k += 2){
//     document.write(k)
// }
// for (let i = 1; i <= 99; i += 2){
//     document.write(i)
// }

// for (let j = 100; j >= 0; j--){
//     document.write(j)
// }

// let result = 0;
// for (let i = 1; i <= 20; i++){s
//     document.write(result = result +i)
// }

// let result = 0;
// for (let i = 2; i <= 8; i += 2){
//     document.write(result = result + i)
// }

// let result = 0;
// for (let i = 1; i <= 5; i += 2){
//     document.write(result=result+i)
// }

// let a = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i < a.length; i++) {
//     document.write(a[i]);
// }

// let result = 1;
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     result *= arr[i];
// }
// document.write(result);

// let result = 1;
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i]**2;
// }
// document.write(result);

// let arr = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 3 && arr[i]<10) {
//         document.write(arr[i])
//     }
// }

// let result = 0;
// let arr = [-1, 2, 3, 8, -10];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] >= 0) {
//         result+=arr[i]
//     }
// }
// document.write(result)

// let result = 0;
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++){
//     result += arr[i];
// }
// result = result / arr.length;
// document.write(result);
// let g;
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++){
//     g=String(arr[i])
//     if (g[0] == 1 || g[0] == 2 || g[0] == 5) {
//         document.write(arr[i])
//     }
// }

// let arr = [1, 2, 3];
// for (let i = arr.length-1; i >=0 ; i--){
//     document.write(arr[i])
// }

// let arr = [0, 1, 2, 5];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] == i) {
//         document.write(i)
//     }
// }

// let arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++){
//     document.write(arr[i]+"<br></br>")
// }
// let arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++){
//     document.write("<p>" + arr[i]+ "</p>")
// }

// let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// for (let i = 0; i < arr.length; i++) {

//     if (i == 5||i==6) {
//         document.write("<b>" + arr[i] + "</b>")
//     } else {
//         document.write(arr[i])
//     }

// }
// let day = 7;
// let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// for (let k = 0; k < arr.length; k++){
//     if (k == day) {
//         document.write('<i>' + arr[k] + '</i>' + '<br>' )
//     } else {
//         document.write(arr[k] + "<br></br>")
//     }
// }

//FOR OF

// let result = 0;
// let arr = [1, 2, 3, 4, 5];
// for (let i of arr) {
//     result += i
// };
// document.write(result)


// let month = 1;
// let mon = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'];
// // for (let i of mon) {
// //     document.write(i)
// // }
// // for (let i = 0; i < mon.length; i++){
// //     document.write(mon[i])
// // }
// for (let i of mon) {
//     if (i == mon[month]) {
//         document.write('<i>' + i + '</i>')
//     } else {
//         document.write(i)
//     }

// };

// let summ = 0;
// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// for (let i in obj) {
//     summ+=obj[i]
// }
// document.write(summ)

// Break
// let sum = 0;
// let arr = [1, 2, 3, -4, 5];
// for (let i of arr) {
    
//     if (i < 0) {
//         break;
//     }
//     sum += i;
// }
// document.write(sum);

// let arr = [1, 2, 3, -4, 5];
// for (let i = 0; i < arr.length; i++) {
    
//     if (arr[i] == 3) {
//         console.log(i);
//         break;
//     }
// }
// let sum = 1;
// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
//     if (sum > 100) {
//         document.write(i+1);
//         break;
//     }
// }


// Флаги

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false;
// for (let i of arr) {
//     if (i === 'c') {
//         flag = true;
//         break;
//     }
// }
// if (flag === true) {
//     document.write('есть')
// } else {
//     document.write('нет')
// }
// for (let i = 1; i <= 2; i++){
//     for (let j = 1; j <= 3; j++){
//         document.write(i)
//     }
// }

// let arr = [];
// for(let i = 1; i<=10; i++){
//     arr.push("x");
// }
// document.write(arr);

// функции

// function name(){
//     document.write('Денис');
// }
// name();
// let s = 0;
// function sum(){
//     for(let i = 1;i<=100;i++){
//         s = s+i;
//     }
//     document.write(s);
// }
// sum();

// function n(num){
//     document.write(num*num*num);
// }
// n(3);
// function cd(num) {
//     if(num<0){
//         document.write('---')
//     }else if(num>0){
//         document.write('+++')
//     }else{
//         document.write(0)
//     }
// }
// cd(-12);
// function cx(n1, n2, n3) {
//     document.write(n1+n2+n3)
// }
// cx(1,2,3);

// function v(n1, n2, n3) {
//     document.write(n1+n2+n3)
// }
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// v(param1, param2,param3);

// function d(n1) {
//     return n1*n1*n1;
// }
// let result = d(3);
// document.write(result);

// function sd(n1) {
//     return n1*n1;
// }
// let a = sd(3);
// let b = sd(4);
// document.write(a+b);

// function sqrt(num) {
//     return Math.sqrt(num);
// }
// function round(num) {
//     return num.toFixed(3);
// }
// let result = round(sqrt(2));
// document.write(result);

// function sqrt(num) {
//     return Math.sqrt(num);
// }
// function summ(num1, num2, num3) {
//     return num1+num2+num3;
// }
// function round(num) {
//     return num.toFixed(3);
// }
// let result = round(summ(sqrt(4),sqrt(9),sqrt(5)));
// console.log(result);

// function func(n1) {
//     let i = 0;
//     let n2 = n1;
//     while (true) {
//         i++;
//         n2 = n2 / 2;
//         if (n2 < 10) {
//             return i;
//         }
//     }
// }
// document.write(func(30));

// function func(num1, num2) {
//     if (num1 > 0 && num2 > 0) {
//         return num1 * num2;
//     } else {
//         return num1 - num2;
//     }
// }
// document.write(func(-1, 2));

// function getSum(arr) {
//     let sum = 0;
//     for (let elem of arr) {
//         sum += elem * elem;
//     }
//     return sum;
// }
// let arr1 = [1, 2,3,4];
// document.write(getSum(arr1));

// function getDigitsSum(n1) {
//     let summ = 0;
//     let k = 0;
//     let v = 0;
//     for (; ;){
//         k = n1 / 10;
//         v = n1 % 10;
//         n1 = parseInt(k);
//         summ += v;
//         if (n1 < 1) {
//             return summ;
//         }
//     }
// }
// getDigitsSum(13);

// function getDivisors(n1) {
//     let arr = [];
    
//     for (let i = 1; i <= n1; i++){
//         if ( n1%i == 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// getDivisors(24);

// function reverseStr(str) {
//     let arr = str.split('');
//     arr = arr.reverse();
//     return arr;
// }
// reverseStr('den');

// function delElem(n1, arr) {
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]==n1){
//             delete arr[i];
//         }
//     }
//     return arr;
// }
// document.write(delElem(1, [1, 2, 3, 1,4]));
//TODO Дома
// function num(n1) {
//     let arr = [];
//     for(let i = 0;i<n1;i++){
//         arr.push(i+1);
//     }
//     return arr;
// }
// document.write(num(5));

// function num(n1, n2) {
//     let arr = [];
//     for(let i = n1;i<=n2;i++){
//         arr.push(i);
//     }
//     return arr;
// }
// document.write(num(2, 10));

// function r(arr) {
//     for (let elem of arr) {
//         if (elem / 2 <  1) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(r([2, 6, 4,]));

// function p(n) {

//     let y = String(n);
//     for (let elem of y) {
//         if (elem %2 !=1) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(p(23));

// function t(arr) {
//     let i;
//     for (let elem of arr) {
        
//         if (elem == i) {
//             return true;
//         }
//         i = elem;
//     }
//     return false;
// }
// console.log(t([1, 2, 3, 2, 1]));

// function func(a,b) {
//     return a + b >= 10;
// }
// console.log(func(2, 8));

// function func(num) {
//     return num >= 0;
// }
// console.log(func(-1));

// let result = [];
// for (let num = 1; num <= 10; num++){
//     if (isPrime(num)) {
//         result.push(num);
//     }
// }
// function isPrime(num) {
//     for (let i = 100; i <= num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(result);

//Перебор
// Метод перебора массива MAP
// let arr = [16, 64, 4, 4, 25];
// let result = arr.map(function (elem) {
//     return Math.sqrt(elem);
// })
// console.log(result);

// let arr = ['a', 'b', 'c'];
// let result = arr.map(function (r) {
//     return r + '!';
// })
// console.log(result);

// let arr = ['ab', 'da', 'ut'];
// let result = arr.map(function (elem) {
//     return elem.split('').reverse().join('');
// })
// console.log(result);

// let arr = ['123', '456', '789'];
// let result = arr.map(function (elem) {
//     return elem.split('').map(function (el) {
//         return Number(el);
//     });
// })

// let arr = [1, 2, 3, 4, 5];
// let result =  arr.map(function (elem, index) {
//     return elem * index;
// })
// console.log(result);

// Метод перебора массива forEach

// let arr = [1, 2];
// let sum = 0;
// arr.forEach(function (elem) {
//     sum += elem * elem;
// })
// console.log(sum);

// Метод перебора массива filter

// let arr = [1, 2, 3, -4, 5];
// let res = arr.filter(function (elem) {
//     return elem > 0;
// })
// console.log(res);

// let arr = [1, -2, 3, -4, 5];
// let res = arr.filter(function (elem) {
//     return elem < 0;
// })
// console.log(res);

// let arr = [1, -2, 3, -4, 5, 11];
// let res = arr.filter(function (elem) {
//         if (elem < 10&&elem>0){
//             return elem;
//         }
// })
// console.log(res);

// let arr = ['den','schklo','der', 'ererererer'];
// let n = arr.filter(function (elem) {
//     return elem.length>5;
// })
// console.log(n);

// let arr = [1, 2, 3, 4, 5, 11, 10];
// let k = arr.filter(function (elem,ind){
//     return elem*ind>30;
// })
// console.log(k);
/*TODO Показать*/
// let arr = [1,2, [3, 4],5, [6, 7]];
// let k = arr.filter(function (elem) {
//     if(Array.isArray(elem)){
//         return false;
//     }
//     return true;
// })
// console.log(k);

// let arr = [1, 2, 3, -4, 5];
// let f = arr.filter(elem => elem < 0);
// console.log(f.length);

// let arr = [1, 2, 3, 4, 5];
// let res = arr.every(elem => elem > 0);
// console.log(res);

// let arr = [1, 2, 3, 4, 5, 6];
// let res = arr.every(function (elem, ind) {
//     return elem* ind<30;
// })

// console.log(res);

// let arr = [1, 2, 3, 4, 5, 6];
// let res = arr.some(elem => elem > 0);
// console.log(res);

// let arr = [1, 2, 3, 4, 5];
// let res = arr.some(function (elem,ind) {
//     return elem * ind > 30;
// })
// console.log(res);
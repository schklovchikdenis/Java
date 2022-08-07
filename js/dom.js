"use strict"

// let a = document.querySelector('#elem1');
// console.log(a);
// let b = document.querySelector('#elem2');
// console.log(b);
// let c = document.querySelector('#elem3');
// console.log(c);

// let a = document.querySelector('#block p');
// console.log(a);

// let a = document.querySelector('.block p');
// console.log(a);

// let a = document.querySelector('.www');
// console.log(a);

/* События */

// let a1 = document.querySelector('#button1');
// let a2 = document.querySelector('#button2');
// let a3= document.querySelector('#button3');

// a1.addEventListener('click',function () {
//     document.write(1);
// })
// a2.addEventListener('click', function () {
//     document.write(2);
// })
// a3.addEventListener('click', function () {
//     document.write(3);
// })


// let a = document.querySelector('.btn1');
// let b = document.querySelector('.btn2');
// let c = document.querySelector('.btn3');

// a.addEventListener('dblclick', function () {
//     document.write('Эта кнопка сработала по двойному клику');
// })
// b.addEventListener('mouseover', function () {
//     document.write('Эта кнопка срабатывает при наведениее курсора');
// })
// c.addEventListener('mouseout', function () {
//     document.write('Эта кнопка сработает при уводе курсора с кнопки');
// })

// function func() {
//     alert('message');
// }

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');

// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);

// let btn = document.querySelector('#button');
// btn.addEventListener('dblclick', function () {
//     document.write(1);
// })
// btn.addEventListener('dblclick', function () {
//     document.write(2);
// })
// btn.addEventListener('dblclick', function () {
//     document.write(3);
// })

// let p1 = document.querySelector('.text1');
// let p2 = document.querySelector('.text2');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', function () {
//     document.write(Number(p1.innerHTML)  + Number(p2.innerHTML) );
// })

// let p1 = document.querySelector('.text1');
// let p2 = document.querySelector('.text2');

// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');

// btn1.addEventListener('click', function () {
//     document.write(p1.innerHTML);
// })
// btn2.addEventListener('click', function ( ) {
//     document.write(p2.innerHTML);
// })

// let p = document.querySelector('.text');
// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');

// btn1.addEventListener('click', function () {
//     p.innerHTML = 'Привет';
// })
// btn2.addEventListener('click', function () {
//     p.innerHTML = 'Пока';
// })

// let p1 = document.querySelector('.text1');
// let p2 = document.querySelector('.text2');
// let p3 = document.querySelector('.text3');

// p1.addEventListener('click', function () {
//     p1.innerHTML = 1;
// })
// p2.addEventListener('click', function () {
//     p2.innerHTML = 2;
// })
// p3.addEventListener('click', function () {
//     p3.innerHTML = 3;
// })

// let p = document.querySelector('.text');
// let btn = document.querySelector('.btn');
// let a = Number(p.innerHTML);
//
// btn.addEventListener('click', function () {
//
//     p.innerHTML = a*a;
// })

// let d = document.querySelector('.text');
// let btn = document.querySelector('.btn');
// let a = Number(d.innerHTML);
// btn.addEventListener('click', function () {
//     d.innerHTML = a+1;
// })

// let g = document.querySelector('.text');
// let btn = document.querySelector('.btn');
//
// btn.addEventListener('click', function () {
//     g.innerHTML = '! ' + g.innerHTML;
// })

// let fold = document.querySelector('.fold');
// let btn = document.querySelector('.btn');
//
// btn.addEventListener('click', function () {
//     fold.innerHTML = '<i>hello</i>';
// })

// let fold = document.querySelector('.fold');
// let btn = document.querySelector('.btn');
//
// btn.addEventListener('click', function () {
//     fold.innerHTML = '<b>' + fold.innerHTML + '</b>';
// })

// let inp = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
//
// btn.addEventListener('click', function () {
//     // document.write(inp.type);
// })

// let a = document.querySelector('.link');
// let par = document.querySelector('.text');
// let btn = document.querySelector('#btn');
//
// btn.addEventListener('click', function () {
//     par.innerHTML = a.href;
//     // document.write(a.href);
// })
// let a = document.querySelector('.link');
// let btn = document.querySelector('#btn');
//
// btn.addEventListener('click', function (){
//     a.innerHTML = a.innerHTML + ' ' + (a.href);
// })

// let im = document.querySelector('.img');
// let par = document.querySelector('.text');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function () {
//     par.innerHTML = im.src;
// })
// let im = document.querySelector('.img');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//     im.width = 300;
// })

// let photo = document.querySelector('.img');
// let bott = document.querySelector('.btn');
// bott.addEventListener('click', function () {
//     photo.width = photo.width*2;
// })

// let img1 = document.querySelector('.img1');
// let img2 = document.querySelector('.img2');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
//
// btn1.addEventListener('click', function () {
//     img1.src = 'img/2.png';
// })
// btn2.addEventListener('click', function () {
//     img2.src = 'img/2.png';
// })

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// let par = document.querySelector('.text');
// btn.addEventListener('click', function () {
//     par.innerHTML = elem.value;
// })

// let elem = document.querySelector('.text');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//     elem.value = 'Какой нибудь текст';
// })

// let text1 = document.querySelector('.text1');
// let text2 = document.querySelector('.text2');
// let btn = document.querySelector('.btn');
// let buff;
// btn.addEventListener('click', function () {
//     buff = text1.value;
//     text1.value = text2.value;
//     text2.value = buff;
// }

// let val1 = document.querySelector('.val1');
// let val2 = document.querySelector('.val2');
// let val3 = document.querySelector('.val3');
// let val4 = document.querySelector('.val4');
// let val5 = document.querySelector('.val5');
// let summ = document.querySelector('.summ');
// let btn = document.querySelector('.btn');
//
// btn.addEventListener('click', function () {
//     // summ.innerHTML = (val1.value + val2.value + val3.value + val4.value + val5.value)/2;
//     summ.innerHTML = (Number(val1.value) + Number(val2.value)+ Number(val3.value)+ Number(val4.value)+ Number(val5.value))/2;
// })

// let inp = document.querySelector('.text');
// inp.addEventListener('focus',function () {
//     inp.value = 1;
// })
// inp.addEventListener('blur', function () {
//     inp.value = 2;
// })

// let inp = document.querySelector('.text');
// inp.addEventListener('blur', function () {
//     document.write(inp.value*inp.value);
// })

// let inp = document.querySelector('.text');
// inp.addEventListener('focus', function () {
//     inp.value = ' ';
// })
// console.log(inp);

//TODO className
// let gap = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//     document.write(gap.className);
// })

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//     elem.className = 'home';
// })

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('.btn');
// let mas=[];
// btn.addEventListener('click', function () {
//     mas.push(elem.className);
// })
// console.log(mas);

// let text = document.querySelector('.text');
// text.addEventListener('focus', function () {
//     this.value = 1;
// })
// text.addEventListener('blur', function () {
//     this.value = 2;
// })
// let text1 = document.querySelector('.text1');
// let text2 = document.querySelector('.text2');
// let text3 = document.querySelector('.text3');
// let text4 = document.querySelector('.text4');
// let text5 = document.querySelector('.text5');

// text1.addEventListener('click', func);
// text2.addEventListener('click', func);
// text3.addEventListener('click', func);
// text4.addEventListener('click', func);
// text5.addEventListener('click', func);

//  function func() {
// //     this.innerHTML = this.innerHTML + ' !';
// // }

// let inp1 = document.querySelector('.inp1');
// let inp2 = document.querySelector('.inp2');
// let inp3 = document.querySelector('.inp3');
// inp1.addEventListener('blur', func);
// inp2.addEventListener('blur', func);
// inp3.addEventListener('blur', func);
// function func() {
//     this.value = this.value*this.value;
// }

// SelectorAll

// let tex = document.querySelectorAll('.text');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//     for(let text of tex){
//         text.innerHTML = 'Готово';
//     }
// })
// let text = document.querySelectorAll('.text');
// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function () {
//     for(let i = 0; i<=text.length; i++){
//         let d = text[i];
//         d.innerHTML = d.innerHTML + i;
//     }
// })
// let inp = document.querySelectorAll('.inp');
// let sum = document.querySelector('.sum');
// let btn = document.querySelector('.btn');
// console.log(inp.value);
// btn.addEventListener('click',
//     function () {
//         let a = 0;
// for(let elem of inp){
//     a = a + Number(elem.value);
//
//
// }
// sum.innerHTML = a;
//         // console.log(a);
//     })

// let inp = document.querySelectorAll('input');
// for (let a of inp){
// a.addEventListener('blur', func);
// };
// function func() {
//     this.value = Number(this.value) + 1;
// };
// let p = document.querySelectorAll('p');
// for(let num of p){
//     num.addEventListener('click', func);
// }
// function func() {
//     this.innerHTML = this.innerHTML*this.innerHTML;
// }

// let a = document.querySelector('a');
// a.addEventListener('click', func);
// function func(){
//     this.innerHTML = this.innerHTML + ' (' + this.href + ')';
// a.removeEventListener('click', func)
// }
//TODO спросить  о других вариантах
// let btn = document.querySelector('.inp');
// btn.addEventListener('click', func);
// function func() {
//this.value = this.value % 10;
//     if(this.value>=10){
//         this.removeEventListener('click', func);
//     }else{
//         this.value = Number(this.value)+1;
//     }
// }
// let inp = document.querySelector('#elem');
// let value = inp.getAttribute('class');
// console.log(value);
// let inp = document.querySelector('#elem');
// inp.setAttribute('value', 'text');
// let inp = document.querySelector('#elem');
// inp.setAttribute('class', 'valid');
// let inp = document.querySelector('#elem');
// inp.removeAttribute('value');
// let inp = document.querySelector('#elem');
// console.log(inp.hasAttribute('value'));
// let elem = document.querySelector('.elem');
// let sbm = document.querySelector('.sbm');
// sbm.addEventListener('click', function () {
//     let a = elem.getAttribute('value');
//     let b= elem.value;
//     if(a == b){
//         document.write('Не менялось');
//     }else{
//         document.write('Значение изменилось на ' + b);
//     }
// })

// let elem = document.querySelector('.elem');
// let sbn = document.querySelector('.sbn');
// sbn.addEventListener('click', function () {
//     elem.value = elem.getAttribute('value');
// })

// let elem =document.querySelector('.elem');
// elem.setAttribute('value', 'text');
// `let cl = document.querySelector('#elem');
// cl.setAttribute('class', 'valid');`


// let elem = document.querySelector('.sd');
// sd.removeAttribute('value');

// console.log(sd.hasAttribute('value'));
// let sd = document.querySelector('#elem');
// sd.classList.add('fff');
// sd.classList.remove('aaa','bbb');
// sd.classList.toggle('www');
// let a = sd.classList;
// for(let b of a){
//     document.write(b + '<br>');
// }


// let sp = document.querySelector('.sp');
// let sbm = document.querySelector('.sbm');
// sbm.addEventListener('click', function () {
//     sp.style.width = '300px';
//     sp.style.height = '300px';
//     sp.style.borderTop = '1px solid black';
//     sp.style.fontSize = '20px';
//     sp.style.backgroundColor = 'green';
//     sp.style.color = '#fff';
// })

// let it = document.querySelectorAll('ul>li');
// let sbm = document.querySelector('.sbm');
// sbm.addEventListener('click', function () {
//    for(let a of it){
//        a.style.cssFloat = 'left';
//    }
//    console.log(it);
// });

// let l = document.querySelector('.line');
// let b = document.querySelector('.bold');
// let c = document.querySelector('.color');
// let p = document.querySelector('p');
// l.addEventListener('click', function () {
//     p.classList.toggle('text__line');
// });
// b.addEventListener('click', function () {
//     p.classList.toggle('text__bold');
// });
// c.addEventListener('click',function (){
//     p.classList.toggle('text__color');
// });

// let d = document.querySelector('#elem');
// d.addEventListener('click', function () {
//     // let s = d.dataset.text;
//     d.innerHTML = d.innerHTML +' '+ d.dataset.text;
// });

// let d = document.querySelectorAll('div');
// console.log(d);
// for(let a of d){
//     a.addEventListener('click', function () {
//         a.innerHTML = a.innerHTML + ' ' + a.dataset.num;
//     })
// };

// let b = document.querySelector('button');
// let p = document.querySelector('p');
// let s = 0;
// b.addEventListener('dblclick', function () {
//     p.innerHTML = p.dataset.sum - 2;
// });
// b.addEventListener('click', function () {
//     s=s+1;
//     p.dataset.sum=s;
// });

// let inp = document.querySelector('#elem');
// inp.addEventListener('blur', function () {
//     if(this.value.length>=this.dataset.lenght){
//         alert('Все ок!')
//     }else{
//         alert('Недостаточно символов!')
//     }
// })

// let inp = document.querySelector('#elem');
// inp.addEventListener('blur', function () {
//     if(this.value.length<5||this.value.length>10){
//         alert('Ошибка!!!!');
//     }
// })

// let inp = document.querySelector('#elem');
// inp.addEventListener('click', function () {
//     this.innerHTML = this.innerHTML +' '+ (this.dataset.productPrice*this.dataset.productAmount);
// });


//СПРОСИТЬ!!!!!!

// let pars = document.querySelectorAll('p');
// pars.setAttribute('data-num','1');
// for(let par of pars){
//     console.log(pars);
// }
// for(let i = 0; i<pars.length; i++){
//     pars[i].setAttribute('data-num', i);
// }


// let butt = document.querySelector('#elem');
// butt.addEventListener('click', func);
// butt.addEventListener('dblclick', func);
// function func(event) {
//     if(event.type === 'dblclick'){
//         butt.classList.remove('bg__green');
//         butt.classList.add('bg__red');
//
//     }else if(event.type === 'click'){
//         butt.classList.remove('bg__red');
//             butt.classList.add('bg__green');
//     }
// }

//2.08.2022
//Нажатые клавиши
// let inp = document.querySelector('.inp');
// let tex = document.querySelector('.tex');
// inp.addEventListener('keydown',function (event) {
//
//         if (event.code === "Enter"){
//            tex.innerHTML = tex.innerHTML + inp.value;
//            inp.value = null;
//         }
//
// });

//3.08.2022
//Функциональные клавиши
// let tex = document.querySelector('.tex');
// tex.addEventListener('click', function (event) {
//     if(event.altKey){
//         tex.style.backgroundColor = 'green';
//     }
// });

// let item = document.querySelectorAll('li');
// // console.log(item);
// for(let i of item){
//     // console.log(i);
//     i.addEventListener('click', function (event) {
//         if(event.ctrlKey){
//             i.innerHTML = i.innerHTML + " " +1;
//         }
//         if(event.shiftKey){
//             i.innerHTML = i.innerHTML + " " +2;
//         }
//     });
// };

//Отмена действий по умолчанию
// let lins = document.querySelectorAll('a');
// for(let lin of lins){
//     // console.log(lin);
//     lin.addEventListener('click', function (event) {
//         event.preventDefault();
//         lin.innerHTML = lin.innerHTML +' '+lin.href;
//     })
// };

// let inp1 = document.querySelector('#in1');
// let inp2 = document.querySelector('#in2');
// let lin = document.querySelector('a');
// let par = document.querySelector('p');
// // console.log(inp1.value);
// lin.addEventListener('click', function (event) {
//     par.innerHTML = par.innerHTML + (Number(inp1.value)+Number(inp2.value));
// })

//Всплытие событий в JavaScript
// let d = document.querySelector('div');
// let u = document.querySelector('ul');
// let l = document.querySelectorAll('li');
// d.addEventListener('click', function (event) {
//     if(event.target.matches('div')){
//         alert('Див');
//     }
//     if(event.target.matches('ul')){
//         u.innerHTML+="<li> </li>"
//     }
//     if(event.target.matches('li')){
//         for(let a of l){
//             a.innerHTML+='!';
//         }
//     }
// })


//                               Основы работы с функцией setInterval в JavaScript

// setInterval(function (){ console.log('Ден')}, 3000);

// let inp = document.querySelector('input');
// let i = inp.value;
//     let d = setInterval(function () {
//     // console.log(--i);
//         inp.value =(--i);
//     if(i==0){
//         clearInterval(d);
//     }
// },1000);

// let par = document.querySelector('p');
// setTimeout(function () {
//     par.innerHTML = 'Прошло 10 сек'
// },5000);

// let i = 0;
// function timer() {
//     setTimeout(function () {
//         console.log(i++);
//
//         timer();
//     },1000*Number(i));
// }
// timer();

//Создание и вставка элементов

// let elem = document.querySelector('#elem');
// let list = document.createElement('li');
// list.innerHTML = 'Пункт';
// elem.appendChild(list);

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#button');
// // let list = document.createElement('li');
// // list.innerHTML = 'Пункт';
// btn.addEventListener('click', function () {
//     let list = document.createElement('li');
//     list.innerHTML = 'Пункт';
//     elem.appendChild(list);
// })
//Привязывание событий при вставке элементов
// let list = document.querySelector('#list');
// let btn = document.querySelector('#button');
//
// btn.addEventListener('click', function () {
//     let item = document.createElement('li');
//     item.innerHTML = 'Text';
//     list.appendChild(item);
//     item.addEventListener('click', function () {
//         this.innerHTML = this.innerHTML + ' '+ '!';
//     })
// })
//Создание элементов в цикле на JavaScript
// let list = document.querySelector('#list');
// for(let i = 1;i<=10;i++){
//     let item = document.createElement('li');
//     item.innerHTML = item.innerHTML + i;
//     list.appendChild(item);
// }

// let t = document.querySelector('#top');
// let p = document.querySelector('#par');
//
// for(let i = 1;i<=5;i++){
//     let inp = document.createElement('input');
//     inp.addEventListener('blur', function () {
//         p.innerHTML = '';
//         p.innerHTML = inp.value;
//     })
//     t.appendChild(inp);
// }

// let p=document.querySelector('#parent');
// let arr = [1,2,3,4,5,6];
// for(let it of arr){
//     let par = document.createElement('p');
//     par.innerHTML = it;
//     let r = par.innerHTML;
//     p.appendChild(par);
//     par.addEventListener('click',function () {
//         par.innerHTML = Number(r)  + 1;
//     })
//
// }

// let list =document.querySelector('#list');
// let arr = ['Один','Два','Три'];
//
// for(let elem of arr){
//     let l = document.createElement('li');
//     l.innerHTML = elem;
//     list.appendChild(l);
//     l.addEventListener('click', func);
//     function func() {
//         l.innerHTML = l.innerHTML + " "+'!';
//         l.removeEventListener('click', func);
//     }
// }
//Удаление элементов
// let parent = document.getElementById('parent');
// let elem = document.getElementById('elem');
// let btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//     parent.removeChild(elem);
// })

// let parent = document.getElementById('parent');
// let item = document.querySelectorAll('li');
// let btn = document.querySelector('button');
// console.log(item);
// btn.addEventListener('click', function () {
//     console.log(parent.lastElementChild);
//     // parent.removeChild(parent.lastElementChild);
// })
//parent.Element
// let elem = document.getElementById('elem');
// elem.addEventListener('click', function () {
//     this.parentElement.removeChild(elem);
// })
//Remove
// let elem = document.getElementById('elem');
// elem.addEventListener('click', function () {
//     this.remove();
// })
//Самоудаление элементов на JavaScript
// let parent = document.querySelector('#parent');
// let lists = document.querySelectorAll('#parent li');
// for (let list of lists) {
//     list.addEventListener('click', function () {
//         parent.removeChild(this);
//     })
// }

//Самоудаление новых элементов на JavaScript
// let parent = document.getElementById('parent');
// let lists = document.querySelectorAll('#parent li');
// let sbt = document.getElementById('button');
// sbt.addEventListener('click', function () {
//     let r = document.createElement('li')
//     parent.appendChild(r);
//     r.addEventListener('click', function () {
//         parent.removeChild(this);
//     })
//     for (let list of lists) {
//         list.addEventListener('click', function () {
//             this.remove();
//         })
//     }
// })
//Создание ссылок для удаление элементов на JavaScript
// let elems = document.querySelectorAll('#parent li');
// for (let elem of elems) {
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.innerHTML = 'Remove';
//     elem.appendChild(remove);
//     remove.addEventListener('click', function (event) {
//         event.preventDefault();
//         elem.parentElement.removeChild(elem);
//     })
// }
// let elems = document.querySelectorAll('table tr');
// for (let elem of elems) {
//     let rem = document.createElement('a');
//     rem.href = '';
//     rem.innerHTML = 'Удалить строку';
//     elem.appendChild(rem);
//     rem.addEventListener('click', function (event) {
//         event.preventDefault();
//         elem.parentElement.removeChild(elem);
//     })
// }

// Создание и вставка элементов.
// Метод append(вставка в конце елемента)

// let parent = document.querySelector('#parent');
// let p = document.createElement('p');
// p.innerHTML = 'Добаваленный элемент';
// parent.append(p);
// let parent = document.querySelector('#parent');
// let d = document.createElement('div');
// d.innerHTML = 'Добаваленный элемент';
// let p2 = document.createElement('p');
// p2.innerHTML = '!';
// parent.append(d, p2);
// let parent = document.querySelector('#parent');
// parent.append('Любая строка');
// let parent = document.querySelector('#parent');
// for (let i = 1; i <= 9; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = i;
//     parent.append(li);
// }
// let tab = document.querySelector('#tab');
// for (let r = 0; r <= 3; r++) {
//     let tr = document.createElement('tr');
//     for (let d = 0; d <= 4; d++) {
//         let td = document.createElement('td');
//         td.innerHTML = 'Это ячейки';
//         tr.append(td);
//     }
//     tab.append(tr);
// }
// Метод prepend
// let par = document.querySelector('#parent');
// let p = document.createElement('p');
// p.innerHTML = 'Какое то слово';
// par.prepend(p);
// let par = document.querySelector('#parent');
// let p1 = document.createElement('p');
// p1.innerHTML = 'Какое то слово';
// let p2 = document.createElement('p');
// p2.innerHTML = 'Какое то слово';
// par.prepend(p1, p2);
// let par = document.querySelector('#parent');
// par.prepend('Какая то строка');
// let wer = document.querySelector('#wer');
// let start = document.createElement('li');
// let stop = document.createElement('li');
// start.innerHTML = 'Stert';
// stop.innerHTML = "Stop";
// wer.prepend(start);
// wer.append(stop);
// Метод insertBefore
// let rod = document.querySelector('#rod');
// let par = document.createElement('p');
// par.innerHTML = 'Наполнение';
// rod.insertBefore(par, rod.firstElementChild);
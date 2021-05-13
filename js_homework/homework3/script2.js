
//=================
//=====class=======
//=================
//Взяти файл template_2.html та працювати в ньому
// Напишіть код, який :
//DONE змінює колір тексту елемнту з ід main_header на будь-який інший
//let change_color_id_main = document.getElementById('main_header');
//change_color_id_main.style.color = 'blue';

//DONE робить шириниу елементу ul 400 пікселів
//let width_ul = document.getElementsByTagName('ul');
//for (let i of width_ul){
//	i.style.width = '400px';
//}

//DONE робить шириниу всіх елементів з класом linkList шириною 50%
//let width_linkList = document.getElementsByClassName('linkList');
//for (let j of width_linkList){
//	j.style.width = '50%';
//}

//?? отримує текст який зберігається в елементі з класом listElement2
//let txt_listElement2 = document.getElementsByClassName('listElement2').textContent;
//console.log(txt_listElement2); //?? undefined

// DONE отримує всі елементи li та змінює ім колір фону на сірий
//let li_el = document.getElementsByTagName('li');
//for (let i of li_el){
//	i.style.backgroundColor = 'gray';
//}

//DONE отримує всі елементи 'a' та додає їм клас anchor
//let a_el = document.getElementsByTagName('a');
//for (let a of a_el){
//	a.classList.add('anchor');
//}

//DONE отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//let a_el = document.getElementsByTagName('a');
//for (let a of a_el){
//	if(a.textContent === 'link3'){
//		a.style.fontSize = '40px';
//	}
//}

//DONE отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//let a_el = document.getElementsByTagName('a');
//for (let a of a_el){
//	a.classList.add(`element_${a.textContent}`);
//}

//DONE отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//let sub_header = document.getElementsByClassName('sub-header');
//for (let i of sub_header){
//	i.style.backgroundColor = prompt('color');
//}
//2й варіант(однакові для всіх класів):
//let sub_header = document.getElementsByClassName('sub-header');
//let color = prompt('color');
//for (let i of sub_header){
//	i.style.backgroundColor = color;
//}

//DONE отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//let sub_header = document.getElementsByClassName('sub-header');
//for (let i of sub_header){
//	if (i.textContent === 'content 2 segment'){
//		i.style.backgroundColor = prompt('color');
//	}
//}

//DONE отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//let class_content_1 = document.getElementsByClassName('content_1');
//for (i of class_content_1){
//	i.innerText = prompt('enter text');
//}

//?? отримати елементи p та змінити їм paddin на довільне значення
//let el_p = document.getElementsByTagName('p');
//for (p in el_p){
//	p.style.padding = '20px'; //Uncaught TypeError: Cannot set property 'padding' of undefined
//}

//DONE отримати елементи з класом text2 та змінити їм текст на довільне значення
//let class_text2 = document.getElementsByClassName('text2');
//for (txt of class_text2){
//	txt.innerText = 'довільне значення';
//}
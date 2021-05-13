// Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

//const div = document.createElement('div');
//div.id = 'text';
//div.style.backgroundColor = 'yellow';
//div.style.width = '300px';
//div.style.height = '300px';

//document.body.appendChild(div);

//div.onclick = () => {
//	div.style.display = 'none';
//}

// Создайте кнопку, при клике на которую, она будет скрывать сама себя.

//const magic_button = document.createElement('button');
//magic_button.innerText = 'magic';
//magic_button.style.width = '70px';
//magic_button.style.height = '40px';

//document.body.appendChild(magic_button);

//magic_button.onclick = () => {
//	magic_button.style.display = 'none';
//}

// створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

//const age_input = document.createElement('input');
//const age_button = document.createElement('button');

//age_button.innerText = 'OK';
//document.body.appendChild(age_input);
//document.body.appendChild(age_button);


//age_button.onclick = () => {
//	let user_age = age_input.value;
//	if (user_age < 18) {
//		alert('NO 18!');
//	}
//}

// Создайте меню, которое раскрывается/сворачивается при клике
//const menu = document.getElementById('menu');
//const menu2 = document.getElementById('menu2'); 

//menu2.style.display = 'none';

//menu.onclick = () => {
//	if (menu2.style.display === 'none'){
//		menu2.style.display = 'block';
//	} else{
//		menu2.style.display = 'none';
//	}
//}

// Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//Вывести список комментариев в документ, каждый в своем блоке.
//Добавьте каждому комментарию по кнопке для сворачивания его body.

const arr_coment = [
	{title : 'The first rule', body:'You do not talk about Fight Club'},
	{title : 'The second rule', body:'You do not talk about Fight Club'},
	{title : 'Third rule', body:'Someone yells "Stop!", goes limp, taps out, the fight is over'},
	{title : 'Fourth rule', body:'Only two guys to a fight'},
	{title : 'Sixth rule', body:'No shirts, no shoes'},
	{title : 'Seventh rule', body:'Fights will go on as long as they have to'},
	{title : 'The eighth and final rule', body:'If this is your first night at Fight Club, you have to fight'}
	];
//const div = document.createElement('div');
//document.body.appendChild(div);

//arr_coment.forEach(value => {
//	const num = document.createElement('div');
//	const rule = document.createElement('div')
//	const rule_button = document.createElement('button');
//	
//	num.innerText = value.title;
//	rule.innerText = value.body;
//	rule_button.innerText = 'magic';
//	
//	rule.style.display = 'none';
//	
//	rule_button.onclick = () => {
//		rule.style.display ? rule.style.display = 'block' : rule.style.display = 'none'
//	}
//	
//	div.appendChild(num);
//	num.appendChild(rule);
//	num.appendChild(rule_button);
//});

// створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

//const mag_button = document.createElement('button');
//mag_button.innerText = 'ok';
//
//mag_button.onclick = () => {
//	const name = document.forms.form1.name.value;
//	const age = document.forms.form1.age.value;
//	const job = document.forms.form2.job.value;
//	const experience = document.forms.form2.experience.value;
//	
//	console.log(name);
//	console.log(age);
//	console.log(job);
//	console.log(experience);
//	
//	document.forms.form1.name.value = '';
//	document.forms.form1.age.value = '';
//	document.forms.form2.job.value = '';
//	document.forms.form2.experience.value = '';
//}
//	
//document.body.appendChild(mag_button);


//????? Створити функцію, яка генерує таблицю.
//Перший аргумент визначає кількість строк.
//Другий параметр визначає кліькіть ячеєк в кожній строці.
//Третій параметр визначає елемент в який потрібно таблицю додати.

//function addtable(rows, colums, el){
//	const addel = document.createElement(el);
//	document.body.appendChild(addel);
//	
//	let table = document.createElement('table');
//	
//	for(i = 1; i <= rows; i++){
//		let addtr = document.createElement('tr')'
//		for(i = 1; i <= colums; i++){
//			let addtd = document.createElement('td')'
//			addtr.appendChild(addtd);
//		}	
//		table.appendChild(addtr);
//	}
//	el.appendChild(table);
//}
//addtable(3, 5, 'div');


// Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)

// Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// Сворити масив слів.
//Сворити інпут текстового типу.
//Якщо людина вводить слово і воно міститься в масиві не цензурних слів
//кинути алерт з попередженням.
//Перевірку робити при натисканні на кнопку

let word = ['php', 
	'drupal', 
	'ss', 
	'recruiter', 
	'deadline', 
	'pm',
	'js',
	'node',
	'react',
	'interview',
	'sfdc'
	]
	
//const input = document.createElement('input');
//const check_button = document.createElement('button');
//check_button.innerText = 'check';
//check_button.onclick = () => {
//	check_word = input.value;
//	word.includes(check_word.toLowerCase()) ? alert('warning!') : console.log(check_word);
//}

//document.body.appendChild(input);
//document.body.appendChild(check_button);
	
	
// Сворити масив слів.
//Сворити інпут текстового типу.
//???Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//Кинути алерт з попередженням у випадку якщо містить.
//Перевірку робити при натисканні на кнопку

//const input = document.createElement('input');
//const check_button = document.createElement('button');
//check_button.innerText = 'check';
//check_button.onclick = () => {
//	check_str = input.value;
//	let some = word.some(value =>{
//		check_str.toLowerCase().includes(value) ? alert('warning!') : console.log(check_str);
//	})
//}

//document.body.appendChild(input);
//document.body.appendChild(check_button);

// создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//???При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

let divmenu = document.createElement('div');
let ulmenu = document.createElement('ul');
document.body.appendChild(divmenu);
divmenu.appendChild(ulmenu);

let title = document.getElementsByTagName('h2');
for(value of title){
	console.log(value);
	let content = value.textContent;
	let menulist = document.createElement('li')
	menulist.innerText = content;
	menulist.onclick = () => {
		???
	}
	ulmenu.appendChild(menulist);
}




// взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
//Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
//1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
//2й - оставляет старше 29 лет включительно
//3й - оставляет тех у кого город киев
//Данные выводить в документ

//let divarr = document.createElement('div');
//usersWithAddress.forEach(value => {
//	let content = document.createElement('p');
//	content.innerText = JSON.stringify(value);
//	divarr.appendChild(content);
//})

//const check1 = document.createElement('input');
//const check2 = document.createElement('input');
//const check3 = document.createElement('input');
//check1.type = 'checkbox';
//check2.type = 'checkbox';
//check3.type = 'checkbox';
//const filter_button = document.createElement('button');
//filter_button.innerText = 'filter';

//document.body.appendChild(check1);
//document.body.appendChild(check2);
//document.body.appendChild(check3);
//document.body.appendChild(filter_button);
//document.body.appendChild(divarr);

//filter_button.onclick =() =>{
//	function text_filter(some_arr){
//		divarr.innerHTML = '';
//		let content = document.createElement('p');
//		some_arr.forEach(value => {
//			let content = document.createElement('p');
//			content.innerText = JSON.stringify(value);
//			divarr.appendChild(content);
//			})
//		document.body.appendChild(divarr);
//	}
	
//	if (check1.checked){	
//		let status_false = usersWithAddress.filter(value => {
//			return value.status === false
//		})
//	text_filter(status_false)
//	}
	
//	if (check2.checked){	
//		let age29 = usersWithAddress.filter(value => {
//			return value.age >= 29;
//		})
//	text_filter(age29);
//	}
	
//	if (check3.checked){	
//		let kyiv = usersWithAddress.filter(value => {
//			return value.address.city === 'Kyiv';
//		})
//	text_filter(kyiv);
//	}
	
//	if (check1.checked && check2.checked) {
//		let st_age = usersWithAddress.filter(value => {
//			return (value.status === false && value.age >= 29);
//		})
//	text_filter(st_age);
//	}
	
//	if (check1.checked && check3.checked) {
//		let st_kyiv = usersWithAddress.filter(value => {
//			return (value.status === false && value.address.city === 'Kyiv');
//		})
//	text_filter(st_kyiv);
//	}
	
//	if (check2.checked && check3.checked) {
//		let age_kyiv = usersWithAddress.filter(value => {
//			return (value.age >= 29 && value.address.city === 'Kyiv');
//		})
//	text_filter(age_kyiv);
//	}
	
//	if (check1.checked && check2.checked && check3.checked) {
//		let st_age_kyiv = usersWithAddress.filter(value => {
//			return (value.status === false && value.age >= 29 && value.address.city === 'Kyiv');
//		})
//	text_filter(st_age_kyiv);
//	}
//}
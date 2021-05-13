// DONE створити функцію яка виводить масив
//function arr(){
//	arrey = [];
//	console.log(arrey);
//}
//arr();

// DONE створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
//function arr(){
//	arrey = [];
//	for (let i=0; i<15; i++){
//		arrey.push(Math.floor((Math.random() * 300)));
//	}
//	console.log(arrey);
//}
//arr();

//DONE створити функцію яка приймає три числа та виводить та повертає найменьше.
//function minnum(a = 0, b = 0, c = 0){
//	if (a <= b && a <= c){
//		return a;
//	}
//	if (b < a && b <= c){
//		return b;
//	}
//	if (c < a && c < b){
//		return c;
//	}
//}
//console.log(minnum(6, 3, -30));

//DONE створити функцію яка приймає три числа та виводить та повертає найбільше.
//function maxnum(a = 0, b = 0, c = 0){
//	if (a >= b && a >= c){
//		return a;
//	}
//	if (b > a && b >= c){
//		return b;
//	}
//	if (c > a && c > b){
//		return c;
//	}
//}
//console.log(maxnum(6, 3, -30));

//DONE створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//function maxminnum(){
//	maxnum = arguments[0];
//	minnum = arguments[0];
//	for(i of arguments){
//		if(maxnum <= i){
//			maxnum = i;
//		}
//		if(minnum >= i){
//			minnum = i;
//		}
//	}
//	console.log(maxnum);
//	return minnum;
//}	
//console.log(maxminnum(32, 862, 2, 9, -36, 63, 1, -356, 8, 0));

// DONE in 2 створити функцію яка виводить масив

// DONE створити функцію яка повертає найбільше число з масиву
//function maxnum(){
//	let maxnum = arguments[0];
//	for(i of arguments){
//		if(maxnum <= i){
//			maxnum = i;
//		}
//	}
//	return maxnum;
//}
//console.log(maxnum(34, -24, 248, 0, 3, -244));

// DONE створити функцію яка повертає найменьше число з масиву
//function minnum(){
//	let minnum = arguments[0];
//	for(i of arguments){
//		if(minnum >= i){
//			minnum = i;
//		}
//	}
//	return minnum;
//}
//console.log(minnum(34, -24, 248, 0, 3, -244));

// DONE створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
//function summ(){
//	sum = 0;
//	for (i of arguments){
//		sum +=i;
//	}
//	return sum;
//}
//console.log(summ(23, 1, 5, 75));

// DONE створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//function middnum(){
//	midd = 0;
//	for (i of arguments){
//		midd +=i;
//	}
//	return midd/arguments.length;
//}
//console.log(middnum(23, 1, 5, 75));

// DONE Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
//function obj(){
//	return arguments.length;
//}
//console.log(obj(23, 'ghdscb', true, 5, 75));

// ?Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість ???полів??? в них

// DONE створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//function indexsum(){
//	let arr1 = arguments[0];
//	let arr2 = arguments[1];
//	let indexsum = [];
//	for (i = 0; i < arr1.length || i < arr2.length; i++){
//		indexsum.push(arr1[i] + arr2[i]);
//	}
//	return indexsum;
//}
//console.log(indexsum([1,2,3,4], [2,3,4,5]));
// Приклад
//  [1,2,3,4]
//  [2,3,4,5]
//  результат
//  [3,5,7,9]

// DONE*** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//function changeobj (arr, i){
//	const nexti = arr[i];
//	arr[i] = arr[i+1];
//	arr[i+1] = nexti;
//	return arr;
//}
//console.log(changeobj([2, 9, 7, 4, 0], 3));

// ??????????*** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//Двожина масиву від 2 до 100
//Приклад
//[1,0,6,0,3] => [1,6,3,0,0]
//[0,1,2,3,4] => [1,2,3,4,0]
//[0,0,1,0]   => [1,0,0,0]
//function nularr(a = []){
//	for (let i = 0; i < a.length; i++){
//		if (a[i] === 0) {
//			a.push(a.splice(i));
//		}
//	}
//	return a;
//}
//console.log(nularr([1,0,6,0,3]));

// Створити функцію яка :

//DONE Додає в боді блок з текстом "Hello owu"
//function add_hiowu(){
//	const hi_owu = document.createElement('div');
//	hi_owu.innerText = 'Hello owu';
//	document.body.appendChild(hi_owu);
//}
//add_hiowu();
	
// DONE Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//function add_txt_el(el_type, txt){
//	const type_el = document.createElement('el_type');
//	type_el.innerText = txt;
//	document.body.appendChild(type_el);
//}
//add_txt_el('div', 'ksfhguj');

// DONE приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//function car_el(car_arr, el_id){
//DONE Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//	for (let i of car_arr){
//		const div_car = document.createElement('div');
//		const el_car = document.createElement('el_id');
//		div_car.innerText = JSON.stringify(i);
//		document.body.append(el_car);
//		el_car.append(div_car)
//	}
//}
//const arrcar = [
//{
//	model : 'BMW',
//	year : 1967,
//	owner : true,
//	statusnow : 'sale',
//	color : 'black'},
//{
//	model : 'Volvo',
//	year : 1998,
//	owner : true,
//	statusnow : 'rent',
//	color : 'red'},
//{
//	model : 'Opel',
//	year : 2010,
//	owner : false,
//	statusnow : 'sale',
//	color : 'white'},
//{
//	model : 'Mustang',
//	year : 1955,
//	owner : false,
//	statusnow : 'svalka',
//	color : 'green'},
//{
//	model : 'MiniCuper',
//	year : 2017,
//	owner : true,
//	statusnow : 'uses',
//	color : 'yellow'}];
//car_el(arrcar, 'p');

// DONE приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//function car_el2(car_arr, el_id){
//	car_model = undefined
//	for (let i of car_arr){
//		car_model = i.model;
//		const li_car = document.createElement('li');
//		const el_car = document.createElement('el_id');
//		li_car.innerText = JSON.stringify(car_model);
//		document.body.append(el_car);
//		el_car.append(li_car)
//	}
//}
//car_el2(arrcar, 'p');

//DONE in 180 Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//DONE Для кожної властивості створити всередені блока автомоблія свій блок
//function car_el3(car_arr, el_id){
//	for (let i of car_arr){
//		for (let j in i){
//			car_prop = `${j} : ${i[j]}`;
//			const div_prop = document.createElement('div');
//			const div_car = document.createElement('div');
//			const el_car = document.createElement('el_id');
//			div_prop.innerText = car_prop;
//			document.body.append(el_car);
//			el_car.append(div_car);
//			div_car.append(car_prop);
//		}
//	}
//}
//car_el3(arrcar, 'p');





//(на основі минулого ДЗ)
//**-DONE функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
//та повертає масив цих з'єднаних об'єктів.
//Приклад масивів:
//let usersWithId = [
//	{id: 1, name: 'vasya', age: 31, status: false},
//	{id: 2, name: 'petya', age: 30, status: true},
//	{id: 3, name: 'kolya', age: 29, status: true},
//	{id: 4, name: 'olya', age: 28, status: false},];
//let citiesWithId = [
//	{user_id: 3, country: 'USA', city: 'Portland'},
//	{user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//	{user_id: 2, country: 'Poland', city: 'Krakow'},
//	{user_id: 4, country: 'USA', city: 'Miami'},];

//function user_city(usersWithId, citiesWithId){
//	for (i of usersWithId){
//		for (j of citiesWithId){
//			if (i.id === j.user_id){
//				i.adress = j;
//			}
//		}
//	}
//	return usersWithId;
//}
//console.log(user_city(usersWithId, citiesWithId));





//DONE ***- беремо завдання з правилами з укроку №3 :
//Та робимо це функцією.При цьому правила отримувати через аргумент.
//"Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

//let rules = [
//	{
//		title: 'Первое правило Бойцовского клуба.',
//		body: 'Никому не рассказывать о Бойцовском клубе.'
//	},
//	{
//		title: 'Второе правило Бойцовского клуба.',
//		body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//	},
//	{
//		title: 'Третье правило Бойцовского клуба.',
//		body: 'В схватке участвуют только двое.'
//	},
//	{
//		title: 'Четвертое правило Бойцовского клуба.',
//		body: 'Не более одного поединка за один раз.'
//	},
//	{
//		title: 'Пятое правило Бойцовского клуба.',
//		body: 'Бойцы сражаются без обуви и голые по пояс.'
//	},
//	{
//		title: 'Шестое правило Бойцовского клуба.',
//		body: 'Поединок продолжается столько, сколько потребуется.'
//	},
//	{
//		title: 'Седьмое правило Бойцовского клуба.',
//		body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//	},
//	{
//		title: 'Восьмое и последнее правило Бойцовского клуба.',
//		body: 'Новичок обязан принять бой.'
//	},
//];

//function f_rules(rules){
//	for (i of rules){
//		let key = document.createElement('div');
//		key.innerText = i.title;
//		key.style.fontSize = '30px';
//		key.style.fontWeight = 'bold';
//		key.style.padding = '10px';
//		let value = document.createElement('div');
//		value.innerText = i.body;
//		value.style.padding = '10px';
//		document.body.append(key);
//		document.body.append(value);
//	}
//}
//f_rules(rules);

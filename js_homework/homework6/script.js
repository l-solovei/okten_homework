// 1. создать массив с 20 числами.

let arrey = [4, 24, 8, 3, 5, 923, -15, 65, 0, 85, 862, -23, 10, 34, -99, 27, 2, 57, 63, -76,] ;

// при помощи метода sort и колбека  отсортировать массив.

//let arr_sort = arrey.sort((a, b) => {
//	return a - b;
//})
//console.log(arr_sort);

// при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

//let arr_sort = arrey.sort((a, b) => {
//	return b - a;
//})
//console.log(arr_sort);

// при помощи filter получить числа кратные 3

//let arr_filter = arrey.filter((value) => {
//	return value % 3 === 0;
//})
//console.log(arr_filter);
		
// при помощи filter получить числа кратные 10

//let arr_filter = arrey.filter((value) => {
//	return value % 10 === 0;
//})
//console.log(arr_filter);

// перебрать (проитерировать) массив при помощи foreach()

//let arr_foreach = arrey.forEach((value) => {
//	console.log(value);
//	return
//})

// перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

//let arr_map = arrey.map((value) => {
//	return value * 3;
//})
//console.log(arr_map);

// 2. создать массив со словами на 15-20 элементов.

let arrey_word = ['Mother', 
	'Passion', 
	'Smile', 
	'Love',
	'Eternity', 
	'Fantastic', 
	'Destiny', 
	'Freedom', 
	'Liberty', 
	'Tranquillity', 
	'Peace', 
	'Blossom', 
	'Sunshine', 
	'Sweetheart', 
	'Gorgeous', 
	'Cherish', 
	'Enthusiasm', 
	'Hope', 
	'Grace', 
	'Rainbow'];
	
// отсортировать его по алфавиту в восходящем порядке.

//let arr_sort1 = arrey_word.sort((a, b) => {
//	if(a > b){
//		return 1;
//	}
//	return -1;
//})
//console.log(arr_sort1);

// отсортировать его по алфавиту  в нисходящем порядке.

//let arr_sort1 = arrey_word.sort((a, b) => {
//	if(a > b){
//		return -1;
//	}
//	return 1;
//})
//console.log(arr_sort1);

// отфильтровать слова длиной менее 4х символов

//let arr_filter1 = arrey_word.filter((value) =>{
//	return value.length > 4;
//})
//console.log(arr_filter1);

// перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

//let arr_map1 = arrey_word.map((value) => {
//	return value = `${value}!`;
//});
//console.log(arr_map1);

//Все робити через функції масивів (foreach, map ...тд)
//Дан масив :

let users = [ 
	{name: 'vasya', age: 31, status: false}, 
	{name: 'petya', age: 30, status: true}, 
	{name: 'kolya', age: 29, status: true}, 
	{name: 'olya', age: 28, status: false}, 
	{name: 'max', age: 30, status: true}, 
	{name: 'anya', age: 31, status: false}, 
	{name: 'oleg', age: 28, status: false}, 
	{name: 'andrey', age: 29, status: true}, 
	{name: 'masha', age: 30, status: true}, 
	{name: 'olya', age: 31, status: false}, 
	{name: 'max', age: 31, status: true} ];
	
// відсортувати його за  віком (зростання , а потім окремо спадання)

//let users_sort2 = users.sort((a, b) => {
//	return a.age - b.age;
//})
//console.log(users_sort2);

//let users_sort2 = users.sort((a, b) => {
//	return b.age - a.age;
//})
//console.log(users_sort2);

// відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

//let users_sort2 = users.sort((a, b) => {
//	return a.name.length - b.name.length;
//})
//console.log(users_sort2);

//let users_sort2 = users.sort((a, b) => {
//	return b.name.length - a.name.length;
//})
//console.log(users_sort2);

// пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), 
//та зберегти це в новий масив (первинний масив залишиться без змін)

//let users_add_id = users.map((value, index) => {
//	value.id = index + 1
//	return value;
//})
//console.log(users_add_id);

// відсортувати його за індентифікатором

//let users_id_sort = users_add_id.sort((a, b) => {
//	return b.id - a.id;
//})


// наисать функцию калькулятора с 2мя числами и колбеком
// наисать функцию калькулятора с 3мя числами и колбеком

//=============================================
//=============================================
//=============КЛАССНАЯ РАБОТА=================
//=============================================
//=============================================




let cars = [ 
	{producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
	{producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
	{producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
	{producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
	{producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
	{producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
	{producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
	{producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
	{producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
	{producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
	{producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
	{producer:"mercedes",model: "e63", year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume: 3,power: 400}, 
	{producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
	
//Відфільтрувати масив за наступними крітеріями :
// двигун більше 3х літрів

//let cars_eg3 = cars.filter((value) => {
//	return value.volume >= 3;
//})
//console.log(cars_eg3);

// двигун = 2л

//let cars_eg2 = cars.filter((value) => {
//	return value.volume === 2;
//})
//console.log(cars_eg2);

// виробник мерс

//let cars_mers = cars.filter((value) => {
//	return value.producer === "mercedes";
//})
//console.log(cars_mers);

// двигун більше 3х літрів + виробник мерседес

//let cars_mers_eg3 = cars.filter((value) => {
//	return value.producer === "mercedes" && value.volume >= 3;
//})
//console.log(cars_mers_eg3);

// двигун більше 3х літрів + виробник субару

//let cars_subaru_eg3 = cars.filter((value) => {
//	return value.producer === "subaru" && value.volume >= 3;
//})
//console.log(cars_subaru_eg3);

// сили більше ніж 300

//let cars_pow300 = cars.filter((value) => {
//	return value.power >= 300;
//})
//console.log(cars_pow300);

// сили більше ніж 300 + виробник субару

//let cars_subaru_pow300 = cars.filter((value) => {
//	return value.producer === "subaru" && value.power >= 300;
//})
//console.log(cars_subaru_pow300);

// мотор серіі ej

//let cars_en_ej = cars.filter((value) => {
//	return value.engine.startsWith('ej');
//})
//console.log(cars_en_ej);

// сили більше ніж 300 + виробник субару + мотор серіі ej

//let cars_subaru_pow300_ej = cars.filter((value) => {
//	return value.producer === "subaru" && value.power >= 300 && value.engine.startsWith('ej');
//})
//console.log(cars_subaru_pow300_ej);

// двигун меньше 3х літрів + виробник мерседес

//let cars_mers_eglow3 = cars.filter((value) => {
//	return value.producer === "mercedes" && value.volume < 3;
//})
//console.log(cars_mers_eglow3);

// двигун більше 2л + сили більше 250

//let cars_eg2_pow250 = cars.filter((value) => {
//	return value.volume >= 2 && value.power >= 250;
//})
//console.log(cars_eg2_pow250);

// сили більше 250  + виробник бмв

//let cars_bmw_pow250 = cars.filter((value) => {
//	return value.producer === 'bmw' && value.power >= 250;
//})
//console.log(cars_bmw_pow250);

// взять слдующий массив

let usersWithAddress = [
	{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
	{id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
	{id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
	{id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
	{id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
	{id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
	{id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
	{id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
	{id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
	{id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
	{id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
	
// отсортировать его по id пользователей

//let users_sort_id = usersWithAddress.sort((a, b) => {
//	return a.id - b.id;
//})
//console.log(users_sort_id);

// отсортировать его по id пользователей в обратном опрядке

//let users_sort_id = usersWithAddress.sort((a, b) => {
//	return b.id - a.id;
//})
//console.log(users_sort_id);

// отсортировать его по возрасту пользователей

//let users_sort_age = usersWithAddress.sort((a, b) => {
//	return a.age - b.age;
//})
//console.log(users_sort_age);

// отсортировать его по возрасту пользователей в обратном порядке

//let users_sort_age = usersWithAddress.sort((a, b) => {
//	return b.age - a.age;
//})
//console.log(users_sort_age);

// отсортировать его по имени пользователей

//let users_sort_name = usersWithAddress.sort((a, b) =>{
//	if (a.name > b.name){
//		return 1;
//	}
//	return -1
//})
//console.log(users_sort_name);

// отсортировать его по имени пользователей в обратном порядке

//let users_sort_name = usersWithAddress.sort((a, b) =>{
//	if (a.name > b.name){
//		return -1;
//	}
//	return 1
//})
//console.log(users_sort_name);

// отсортировать его по названию улицы  в алфавитном порядке

//let users_sort_street = usersWithAddress.sort((a, b) =>{
//	if (a.address.street > b.address.street){
//		return 1;
//	}
//	return -1
//})
//console.log(users_sort_street);

// отсортировать его по номеру дома по возрастанию

//let users_sort_housenum = usersWithAddress.sort((a, b) => {
//	return a.address.number - b.address.number;
//})
//console.log(users_sort_housenum);

// отфильтровать (оставить) тех кто младше 30

//let users_low30 = usersWithAddress.filter((value) => {
//	return value.age < 30;
//})
//console.log(users_low30);

// отфильтровать (оставить) тех у кого отрицательный статус

//let users_falsestatus = usersWithAddress.filter((value) => {
//	return value.status === false;
//})
//console.log(users_falsestatus);

// отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

//let users_falsestatus_low30 = usersWithAddress.filter((value) => {
//	return value.age < 30 && value.status === false;
//})
//console.log(users_falsestatus_low30);

// отфильтровать (оставить) тех у кого номер дома четный

//let users_house2num = usersWithAddress.filter((value) => {
//	return !(value.address.number % 2);
//})
//console.log(users_house2num);


//1 створити об'єкт (не меньше 5ти властивостей) який описує
// собаку
let dog = {
	name : 'Jin',
	age : 3,
	owner : true,
	child : 4,
	breed : 'corgi'
};
// людину
let person = {
	name : 'Max',
	age : 23,
	sex : 'man',
	work : true,
	city : 'Lviv'
};
// автомобіль
let car = {
	model : 'BMW',
	year : 1967,
	owner : true,
	statusnow : 'sale',
	color : 'black'
};
// квартиру
let flat = {
	city : 'London',
	flocation : 'center',
	size : 3,
	owner : true,
	statusnow : 'rent'
};
// книгу
let book = {
	title : 'Harry Potter',
	autor : 'Rowling',
	year : 1992,
	film : true,
	tom : 7
};

//2 Створити масив та вивести його в консоль:
// з 5 собак
let arrdog = [
{	
	name : 'Jin',
	age : 3,
	owner : true,
	child : 4,
	breed : 'corgi'},
{	
	name : 'Patric',
	age : 5,
	owner : false,
	child : 1,
	breed : 'bulldog'},
{	
	name : 'Bruklin',
	age : 1,
	owner : true,
	child : 0,
	breed : 'mops'},
{	
	name : 'Lisa',
	age : 12,
	owner : false,
	child : 12,
	breed : 'shepherd'},
{	
	name : 'Emma',
	age : 8,
	owner : true,
	child : 6,
	breed : 'taksa'}];
// 3 5 людей
let arrperson = [
{	
	name : 'Max',
	age : 23,
	sex : 'man',
	work : true,
	city : 'Lviv'},
{	
	name : 'Maryna',
	age : 20,
	sex : 'woman',
	work : false,
	city : 'Kyiv'},
{	
	name : 'Roman',
	age : 27,
	sex : 'man',
	work : true,
	city : 'Kharkiv'},
{	
	name : 'Anna',
	age : 5,
	sex : 'woman',
	work : false,
	city : 'Odessa'},
{
	name : 'Vlad',
	age : 56,
	sex : 'man',
	work : true,
	city : 'Donetsk'}];
// з 5 автомобілів
let arrcar = [
{
	model : 'BMW',
	year : 1967,
	owner : true,
	statusnow : 'sale',
	color : 'black'},
{
	model : 'Volvo',
	year : 1998,
	owner : true,
	statusnow : 'rent',
	color : 'red'},
{
	model : 'Opel',
	year : 2010,
	owner : false,
	statusnow : 'sale',
	color : 'white'},
{
	model : 'Mustang',
	year : 1955,
	owner : false,
	statusnow : 'svalka',
	color : 'green'},
{
	model : 'MiniCuper',
	year : 2017,
	owner : true,
	statusnow : 'uses',
	color : 'yellow'}];

//3 створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// будинок
let house = {
	type : 'apartment',
	tenants : {
		first : 'Anna',
		second : 'Roma',
		third : 'Sasha'},
	rooms : ['kitchen', 'bedroom', 'bathroom'],
	flor : 3,
	furniture : true
};
// водій
let driver = {
	name : 'Ivan',
	age : 26,
	car : ['BMW', 'Opel', 'Mazda'],
	job : {title : 'manager', company : 'Serve'},
	pets : true
};
// іграшку
let toy = {
	type : 'soft',
	name : ['Daria', 'NoName', 'Vlad'],
	owner : {
		first : 'Masha',
		second : 'Petro',
		third : 'Mari'},
	animal : 'bear',
	ispresent : true
};
// стіл
let table = {
	size : 'small',
	material : {
		tabletop : 'derevo',
		leg : 'metal'},
	market : ['IKEA', 'Mebli', 'ZaraHouse'],
	uses : 'for work',
	price : 4999
}
	
// сумка
let bag = {
	size : 'big',
	color : 'black',
	marketprice : {
		'Zara' : 1700,
		'Mango' : 1500,
		'Bazar' : 600},
	uses : ['wokr', 'university', 'every day'],
	decor : false
}


//Дан массив:
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
				{name: 'max', age: 31, status: true}
			];
// звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// статус Андрія
let andrii_status = undefined
for (i of users){
	if (i.name === 'andrey'){
		andrii_status = i.status;
	}
}
console.log(andrii_status);
// статус Максима
let max_status = users[4].status;
console.log(max_status);
// ім'я передостаннього об'єкту
let name_10 = users[9].name;
console.log(name_10);
// ім'я третього об'єкта
let name_3 = users[2].name;
console.log(name_3);
// вік Олега
let oleg_age = users[6].age;
console.log(oleg_age);
// вік Олі
let olya_age = users[9].age;
console.log(olya_age);
// вік + ім'я 5го об'єкта
let name_5 = users[4].name;
let age_5 = users[4].age;
console.log(name_5, age_5);
// вік + сатус Анни
let anna_age = users[5].age;
let anna_status = users[5].status;
console.log(anna_age, anna_status);
//Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
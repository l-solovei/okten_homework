//1
//створити масив та вивести його в консоль:

//з 5 числових значень
//let arrey1 = [1, 2, 3, 4, 5];

//з 5 стічкових значень
//let arrey11 = ['a', 'b', 'c', 'd', 'e'];

//з 5 значень стрічкового, числового та булевого типу
//let arrey21 = [11, 12, 'hi', 'to', true];

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//let arrey31 = [];
//arrey31[0] = 1;
//arrey31[1] = 3.45;
//arrey31[2] = 'hey';
//arrey31[3] = false;

//console.log(arrey1, arrey11, arrey21, arrey31);

//7 За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//for(i=0; i<10; i++){
//	document.write(`<div> hey </div>`);
//}

//8 За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//for(i=0; i<10; i++){
//	document.write(`<div> hey ${i} </div>`);
//}

//9 За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//let i = 0;
//while (i<20){
//	document.write(`<h1> hey hey </h1>`);
//	i++
//}

//10 За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//let i = 0;
//while (i<20){
//	document.write(`<h1> hey hey ${i} </h1>`);
//	i++
//}

//11 Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//let arrey111 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for (i of arrey111){
//	console.log(i);
//}

//12 Cтворити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//let arrey112 = ['da', 'sf', 'fsggs', 'agsf', 'sgt', 'vdyhygbf', 'sgrrg', 'kjhh', 'iujngvg', 'ouh'];
//for (j of arrey112){
//	console.log(j);
//}

//13 Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//let arrey113 = [44444, 'sf', true, 'agsf', 4.657, false, 'sgrrg', -76535, 'iujngvg', 265.86535];
//for (k of arrey113){
//	console.log(k);
//}

//14 За допомогою if та typeof вивести тільки булеві елементи
//for (k of arrey113){
//	if(typeof k === "boolean"){
//		console.log(k);
//	}
//}
//15 За допомогою if та typeof вивести тільки числові елементи
//for (k of arrey113){
//	if (typeof k === "number"){
//		console.log(k);
//	}
//}
//16 За допомогою if та typeof вивести тільки рядкові елементи
//for (k of arrey113){
//	if (typeof k === "string"){
//		console.log(k);
//	}
//}
			
//17 Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//let emptyarrey17 = [];
//emptyarrey17[0] = 1;
//emptyarrey17[1] = 'frsryj';
//emptyarrey17[2] = true;
//emptyarrey17[3] = 3.965;
//emptyarrey17[4] = 'ogtyr';
//emptyarrey17[5] = 'yrdf';
//emptyarrey17[6] = -7753;
//emptyarrey17[7] = false;
//emptyarrey17[8] = 379;
//emptyarrey17[9] = true;
//for (e of emptyarrey17){
//	console.log(e);
//}

//18 Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for (i=0; i<=10; i++){
//	console.log(i);
//	document.write(i);
//}

//19 Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for (i=0; i<=100; i++){
//	console.log(i);
//	document.write(i + '<br/>');
//}

//20Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//for (i=0; i<=100; i+=2){
//	console.log(i);
//	document.write(i + '<br/>');
//}

//21-22 Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//for (i=1; i<=100; i++){
//	if(i%2 === 0){
//		console.log(i);
//		document.write(i + '<br/>');
//	}
//}

//23 Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//for (i=1; i<=100; i++){
//	if(i%2 === 1){
//		console.log(i);
//		document.write(i + '<br/>');
//	}
//}

//24 Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//for(min=0; min<=2; min++){
//	for(sec=0; sec<60; sec++){
//		console.log(min + ' : ' + sec);
//	}
//}

//25 Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//time = 0
//for(hour=0; hour<=2; hour++){
//	for(min=0; min<60; min++){
//		for(sec=0; sec<60; sec++){
//			if(time =='2 : 20 : 0'){
//				break}
//			time = hour + ' : '+min + ' : ' + sec
//			console.log(time);
//		}
//	}
//}



//37 Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//let arrey37 = ['a', 'b', 'c'];
//for (i=1; i<=3; i++){
//	arrey37.push(i);
//}
//console.log(arrey37);

//38-40
let arrey38 = [1, 2, 3];
//??Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let newarrey38 = [];
for (i = 0; i<arrey38.length; i++){
	newarrey38.push(arrey38.pop());
}
console.log(newarrey38);

//Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//for (i=4; i<=6; i++){
//	arrey38.push(i);
//}
//console.log(arrey38)

//Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
//for (i=6; i>=4; i--){
//	arrey38.unshift(i);
//}
//console.log(arrey38);


//41-42 
//let arr41 = ['js', 'css', 'jq'];
//Виведіть на екран перший елемент за допомогою shift()
//console.log(arr41.shift());
//Виведіть на екран останній елемент за допомогою pop()
//console.log(arr41.pop());

//43-47
let arr43 = [1, 2, 3, 4, 5];
//arr43.splice(0, 3); //перетворіть масив в [4, 5].
//arr43.splice(2, 3); //перетворіть масив в [1,2].
//arr43.splice(1, 2); //перетворіть масив в [1, 4, 5].
//arr43.splice(2, 0, 'a', 'b', 'c'); //зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//47 зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//arr43.splice(1, 0, 'a', 'b');
//arr43.splice(5, 0, 'c');
//arr43.splice(7, 0, 'e');
//console.log(arr43);

//48 Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr48 = [];
//for (i=1; i<=10; i++){
//	arr48.push(i);
	//if (i%2 === 0){
	//console.log(i);
	//}
//}
//49-50 Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let arr49 = [];
//for (i of arr48){
//	arr49.push(i);
//}
//console.log(arr49);



//55
let arr55 = [2,17,13,6,22,31,45,66,100,-18];
//1 перебрати його циклом while
//i = 0;
//while (i<arr55.length){
//	console.log(arr55[i]);
//	i++;
//}

//2 перебрати його циклом for
//for (i = 0; i<arr55.length; i++){
//	console.log(arr55[i]);
//}

//3 перебрати циклом while та вивести  числа тільки з непарним індексом
//i = 0;
//while (i<arr55.length){
//	if (i%2 === 1){
//		console.log(arr55[i]);
//	}
//	i++;
//}

//4 перебрати циклом for та вивести  числа тільки з непарним індексом
//for (i = 0; i<arr55.length; i++){
//	if (i%2 === 1){
//		console.log(arr55[i]);
//	}
//}

//5 перебрати циклом while та вивести  числа тільки парні  значення
//i = 0;
//while (i<arr55.length){
//	if (arr55[i]%2 === 0){
//		console.log(arr55[i]);
//	}
//	i++;
//}

//6 перебрати циклом for та вивести  числа тільки парні  значення
//for (i = 0; i<arr55.length; i++){
//	if (arr55[i]%2 === 0){
//		console.log(arr55[i]);
//	}
//}

//7 замінити кожне число кратне 3 на слово "okten"
//for (i = 0; i<arr55.length; i++){
//	if (arr55[i]%3 === 0){
//		arr55[i] = 'okten';
//	}
//}
//console.log(arr55);

//?? 8 вивести масив в зворотньому порядку.
let newarr55 = [];
for (let j = 0; j < arr55.length; j++){
	newarr55.unshift(arr55.shift());
}
console.log(newarr55);


//10
let arr10 = [];
//заповнити його 50 парними числами за допомоги циклу.
//for (i = 2; arr10.length<50; i +=2){
//	arr10.push(i);
//}
//console.log(arr10);

//заповнити його 50 непарними числами за допомоги циклу.
//for (i = 1; arr10.length<50; i +=2){
//	arr10.push(i);
//}
//console.log(arr10);

	
//????
//используя Math.random заполнить массив из ???(сколько хотите) элементов.
//диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
//let arr75 = [];
//for (i=0; i<15; i++){
//	arr75.push(Math.floor((Math.random() * 732) + 8));
//}
//console.log(arr75);

//2. вывести на консоль  каждый третий елемент
//for (j=2; j<arr75.length; j+=3){
//	console.log(arr75[j]);
//}

//3. вывести на консоль  каждый третий елемент но при условии что его значение является парным.
//for (j=2; j<arr75.length; j+=3){
//	if(arr75[j]%2 === 0){
//		console.log(arr75[j]);
//	}
//}

//4. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение изаписать их в другой массив.
//let newarr75 =[]
//for (j=2; j<arr75.length; j+=3){
//	if(arr75[j]%2 === 0){
//		newarr75.push(arr75[j]);
//		console.log(arr75[j]);
//	}
//}
//console.log(newarr75);

//5. Вывести каждый елемент массива у которого соседний с права элемент - парный	
//for (j=0; j<arr75.length; j++){
//	if(arr75[j-1]%2 === 0){
//		console.log(arr75[j]);
//	}
//}

	
	
//84 Які характеризують вартість окремої покупки. обрахувати середній чек.
//let arr84 = [100,250,50,168,120,345,188];
//let avbill = 0;
//for (a of arr84){
//avbill +=a;
//} 
//avbill /= (arr84.length);
//console.log(avbill);

//86 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//let arr86 = [];
//for (i = 0; i < 15; i++ ) {
//	arr86.push( Math.round( Math.random() * 100 ));
//}
//let newarr86 = [];
//for (a of arr86){
//	newarr86.push(a*5);
//}
//console.log(arr86)
//console.log(newarr86)




//87 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,додати його в інший масив.

//let arr87 = ['gddasyy', 'true', 10, -3.9544, false, ['fj', 57], 'fcfy', 53, 4.86, -637579];
//let numarr87 = [];
//for (a of arr87){
//	if (typeof a === 'number'){
//		numarr87.push(a);
//	}
//}
//console.log(numarr87);

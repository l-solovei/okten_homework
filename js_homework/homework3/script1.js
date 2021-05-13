//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// отримує текст з параграфа з id "content"
//let id_content = document.getElementById('content').textContent;
//console.log(id_content);
// отримує текст з блоку з id "rules"
//let id_rules = document.getElementById('rules').textContent;
//console.log(id_rules);
// замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').textContent = `замініть текст параграфа з id 'content' на будь-який інший`;

// замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').textContent = `замініть текст параграфа з id 'rules' на будь-який інший`;

// змініть ??кожному елементу?? колір фону на червоний
//let change_color = document.getElements;
//console.log(change_color)
//for (i of change_color){
//	change_color.style.backgroundColor = 'red'
//}
// змініть кожному елементу колір тексту на синій
// отримати весь список класів елемента з id=rules і вивести їх в console.log
let class_id_rules = document.getElementById('rules').classList;
console.log(class_id_rules);
// отримати всі елементи з класом fc_rules
let class_fc_rules = document.getElementsByClassName('fc_rules');
// поміняти колір тексту у всіх елементів fc_rules на червоний
for (i of class_fc_rules){
	i.style.color = 'red';
}

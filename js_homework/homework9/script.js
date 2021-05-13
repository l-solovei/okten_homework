//Треба реалізувати свій розпорядок дня. 
//Колбеками, промісами та асинк авейт.

//В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
//Має бути так
//1) прокинувся
//2) Поснідав
//3) почистав зуби 
//і т.д.

//Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
//Якщо ж все ок, то ви маєте прожити свій звичайний день.
//Кожна подія має бути з рандомною (не по зростанню) затримкою.


//прокинувся - випити чай - зібратись на роботу - випити кави з колегою - хад ворк - піти додому - послухати лекцію віктора - оговтатись від лекції віктора - поплакати - лягти спати

//Callback hell

//let nowstatus = '';
//
//function wakeup(isdone, cb){
//	setTimeout(() => {
//		if (isdone){
//			nowstatus = 'Morning';
//			cb(null, nowstatus);
//		}
//		else {
//			cb('WAKE UP NOW!!', null);
//		}
//	}, 3000)
//}

//function drinktea(nowstatus, istea, cb){
//	setTimeout(() => {
//		if (nowstatus === 'Morning' && istea){
//			nowstatus = 'Drink tea';
//			cb(null, nowstatus);
//		}
//		else {
//			cb('BUY TEA AND DRINK IT NOW!!', null);
//		}
//	}, 2000)
//}

//function gowork(nowstatus, day, cb){
//	setTimeout(() => {
//		if (nowstatus === 'Drink tea' && day !== ('Saturday' || 'Sunday')){
//			nowstatus = 'Go to work'
//			cb(null, nowstatus);
//		}
//		else{
//			cb('YOU CAN STAY HOME', null);
//		}
//	}, 4000)
//}

//function drinkcoffee(nowstatus, iscolleague, cb){
//	setTimeout(() => {
//		if (nowstatus === 'Go to work' && iscolleague){
//			nowstatus = 'Drink coffee with colleagues';
//			cb(null, nowstatus);
//		}
//		else{
//			cb('GO DRINK COFFEE', null);
//		}
//	}, 3000)
//}

//function workhard(nowstatus, isjobdone, cb){
//	setTimeout(() => {
//		if (nowstatus === 'Drink coffee with colleagues' && !isjobdone){
//			nowstatus = 'HARD WORK';
//			cb(null, nowstatus);
//		}
//		else{
//			cb("DON'T LIE", null);
//		}
//	}, 5000)
//}

//function gohome(nowstatus, hour, cb){
//	setTimeout(() => {
//		if (nowstatus === 'HARD WORK' && (hour > 17 || hour < 11)){
//			nowstatus = 'GO HOME';
//			cb(null, nowstatus);
//		}
//		else{
//			cb('YOU SHOULD WORK HARD', null);
//		}
//	}, 2000)
//}

//function listenlecture(nowstatus, day, cb){
//	setTimeout(() => {
//		if (nowstatus === 'GO HOME' && day === ('Tuesday' || 'Thursday' || 'Friday')){
//			nowstatus = "I'm listening to Victor's lecture"
//			cb(null, nowstatus);
//		}
//		else{
//			cb('YOU SHOULD STUDY', null);
//		}
//	}, 5000)
//}

//function cry(nowstatus, gotit, cb){
//	setTimeout(() =>{
//		if (nowstatus === "I'm listening to Victor's lecture" && !gotit){
//			nowstatus = "I'm crying after Victor's lecture";
//			cb(null, nowstatus);
//		}
//		else{
//			cb("Don't lie that you understand everything", null);
//		}
//	}, 2000)
//}
		

//wakeup(true, (err, nowstatus) => {
//		if (err) {
//			console.error(err);
//		}
//		else{
//			console.log(nowstatus);
//			
//			drinktea(nowstatus, true, (err, nowstatus) => {
//				if (err){
//					console.error(err);
//				}
//				else{
//					console.log(nowstatus);
//					
//					gowork(nowstatus, 'Monday', (err, nowstatus) => {
//						if (err){
//							console.error(err);
//						}
//						else{
//							console.log(nowstatus);
//							
//							drinkcoffee(nowstatus, true, (err, nowstatus) => {
//								if (err){
//									console.error(err);
//								}
//								else{
//									console.log(nowstatus);
//									
//									workhard(nowstatus, false, (err, nowstatus) => {
//										if (err){
//											console.err(err);
//										}
//										else{
//											console.log(nowstatus);
//											
//											gohome(nowstatus, 18, (err, nowstatus) =>{
//												if (err){
//													console.error(err);
//												}
//												else{
//													console.log(nowstatus);
//													
//													listenlecture(nowstatus, 'Tuesday', (err, nowstatus) => {
//														if (err){
//														console.err(err);
//														}
//														else{
//															console.log(nowstatus);
//											
//															cry(nowstatus, true, (err, nowstatus) =>{
//																if (err){
//																	console.error(err);
//																}
//																else{
//																console.log(nowstatus);
//																}
//															})
//														}
//													})
//												}
//											})
//										}
//									})
//								}
//							})
//						}
//					})
//				}
//			})
//		}
//})





//PROMISE

let nowstatus = '';

function wakeup(isdone){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isdone){
				nowstatus = 'Morning';
				resolve (nowstatus);
			}
			else {
				reject('WAKE UP NOW!!');
			}
		}, 3000)
	})
}

function drinktea(nowstatus, istea){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (nowstatus === 'Morning' && istea){
				nowstatus = 'Drink tea';
				resolve (nowstatus);
			}
			else {
				reject ('BUY TEA AND DRINK IT NOW!!');
			}
		}, 2000)
	})
}

function gowork(nowstatus, day){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (nowstatus === 'Drink tea' && day !== ('Saturday' || 'Sunday')){
				nowstatus = 'Go to work'
				resolve (nowstatus);
			}
			else{
				reject ('YOU CAN STAY HOME');
			}
		}, 4000)
	})
}

function drinkcoffee(nowstatus, iscolleague){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (nowstatus === 'Go to work' && iscolleague){
				nowstatus = 'Drink coffee with colleagues';
				resolve (nowstatus);
			}
			else{
				reject ('GO DRINK COFFEE');
			}
		}, 3000)
	})
}

function workhard(nowstatus, isjobdone){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (nowstatus === 'Drink coffee with colleagues' && !isjobdone){
				nowstatus = 'HARD WORK';
				resolve (nowstatus);
			}
			else{
				reject ("DON'T LIE");
			}
		}, 5000)
	})
}

function gohome(nowstatus, hour){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (nowstatus === 'HARD WORK' && (hour > 17 || hour < 11)){
				nowstatus = 'GO HOME';
				resolve (nowstatus);
			}
			else{
				reject ('YOU SHOULD WORK HARD');
			}
		}, 2000)
	})
}

function listenlecture(nowstatus, day){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (nowstatus === 'GO HOME' && day === ('Tuesday' || 'Thursday' || 'Friday')){
				nowstatus = "I'm listening to Victor's lecture"
				resolve (nowstatus);
			}
			else{
				reject ('YOU SHOULD STUDY');
			}
		}, 5000)
	})
}

function cry(nowstatus, gotit){
	return new Promise((resolve, reject) => {
		setTimeout(() =>{
			if (nowstatus === "I'm listening to Victor's lecture" && !gotit){
				nowstatus = "I'm crying after Victor's lecture";
				resolve (nowstatus);
			}
			else{
				reject("Don't lie that you understand everything");
			}
		}, 2000)
	})
}

//wakeup(true)
//	.then(nowstatus => {
//		console.log(nowstatus);
//		return drinktea(nowstatus, true);
//	})
//	.then(nowstatus => {
//		console.log(nowstatus);
//		return gowork(nowstatus, 'Monday');
//	})
//	.then(nowstatus => {
//		console.log(nowstatus);
//		return drinkcoffee(nowstatus, true);
//	})
//	.then(nowstatus =>{
//		console.log(nowstatus);
//		return workhard(nowstatus, false);
//	})
//	.then(nowstatus =>{
//		console.log(nowstatus);
//		return gohome(nowstatus, 18);
//	})
//	.then(nowstatus => {
//		console.log(nowstatus);
//		return listenlecture(nowstatus, 'Tuesday');
//	})
//	.then(nowstatus => {
//		console.log(nowstatus);
//		return cry(nowstatus, true);
//	})
//	.catch(reason => {
//		console.error(reason);
//	})
	
	
//ASYNC AWAIT

async function myday(){
	try{
		let morning = await wakeup(true);
		console.log(morning);
		
		let tea = await drinktea(morning, true);
		console.log(tea);
		
		let work = await gowork(tea, 'Monday');
		console.log(work);
		
		let coffee = await drinkcoffee(work,  true);
		console.log(coffee);
		
		let hard = await workhard(coffee, false);
		console.log(hard);
		
		let home = await gohome(hard, 18);
		console.log(home);
		
		let study = await listenlecture(home, 'Tuesday');
		console.log(study);
		
		let cryyy = await cry(study, true);
		console.log(cry);
	}
	catch(err){
			console.error(err);
	}
}

myday();
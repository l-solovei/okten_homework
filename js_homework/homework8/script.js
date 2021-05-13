//- Реализуйте записную книгу, хранящую данные в локальном хранилище.
//Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
//Данные вводить через соответсвующую форму.
//--Каждому контакту добавить кнопку для удаления контакта.
//--Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, 
//в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

let form = document.forms.contacts;
let us_contact = [];
let div = document.createElement('div');
document.body.appendChild(div);
let editform = document.forms.editcontact;

function newlist(contact_arr){
	contact_arr.forEach(value => {
		let contdiv = document.createElement('div');
		div.appendChild(contdiv);
	
		contdiv.innerText = `Name: ${value.name} 
		Number: ${value.number} 
		Email: ${value.email} 
		Company: ${value.company} 
		Departmen: ${value.departmen} 
		Birthday: ${value.birthday}`
		
		let del = document.createElement('button');
		let edit = document.createElement('button');
		del.innerText = 'delete';
		edit.innerText = 'edit';
		contdiv.appendChild(del);
		contdiv.appendChild(edit);
		
		del.onclick = () => {
			us_contact.splice(value.id, 1);
			div.innerHTML = '';
			newlist(us_contact);
		}
		edit.onclick = () => {
//			editform.style.display = 'block';
			
			editform.name.value = us_contact[value.id].name;
			editform.number.value = us_contact[value.id].number;
			editform.email.value = us_contact[value.id].email;
			editform.company.value = us_contact[value.id].company;
			editform.departmen.value = us_contact[value.id].departmen;
			editform.birthday.value = us_contact[value.id].birthday;	
	
			editform.edit.onclick = ev => {
				ev.preventDefault();
				us_contact[value.id].name = editform.name.value;
				us_contact[value.id].number = editform.number.value;
				us_contact[value.id].email = editform.email.value;
				us_contact[value.id].company = editform.company.value;
				us_contact[value.id].departmen = editform.departmen.value;
				us_contact[value.id].birthday = editform.birthday.value;
				//editform.style.display = 'none';
			}
			
			div.innerHTML = '';
			newlist(us_contact);
		}
	})
}
		

	
form.add.onclick = ev => {
	ev.preventDefault();
	let cont = {
		id : us_contact.length,
		name : form.name.value,
		number : form.number.value,
		email : form.email.value,
		company : form.company.value,
		departmen : form.departmen.value,
		birthday : form.birthday.value
	}
	
	us_contact.push(cont);
	div.innerHTML = '';
	newlist(us_contact);
	
	form.name.value = '';
	form.number.value = '';
	form.email.value = '';
	form.company.value = '';
	form.departmen.value = '';
	form.birthday.value = '';
}

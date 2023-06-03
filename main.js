const input = document.querySelector('.input_text');
const inputSearch = document.querySelector('.search_input');
const btnAdd = document.querySelector('button');
const listItem = document.querySelector('.list_items');
const darkMode = document.querySelector('.dark-mode');
const filterOption = document.querySelector(".filter-todo");

// add icon mode to html 
btnAdd.addEventListener('click', (e) => {
    e.preventDefault();

    // create div list
    let div = document.createElement('div');
    div.classList.add('list_item');
    listItem.appendChild(div);

    // create div text
    let text = document.createElement('div');
    text.classList.add('text');
    text.textContent = input.value;
    div.appendChild(text);

    //create div closet
    let divClose = document.createElement('div');
    divClose.innerHTML = '<i class="fa fa-close"></i>';
    divClose.classList.add('closet');
    div.appendChild(divClose);
    divClose.addEventListener('click', removel);

    // create div pen
    let divPen = document.createElement('div');
    divPen.innerHTML = '<i class="fa fa-pencil"></i>';
    divPen.classList.add('pen');
    div.appendChild(divPen);
    divPen.addEventListener('click', change_contant);

    // create div confirm
    let divConfirm = document.createElement('div');
    divConfirm.innerHTML = '<i class="fa fa-check"></i>';
    divConfirm.classList.add('confirm');
    div.appendChild(divConfirm);


    input.value = '';
});


// remove div.list_item
function removel(e) {
    const item = e.target;
    const todo = item.closest('.list_item');
    todo.remove();
};


// change Text contant 
function change_contant(e) {
    const item = e.target;
    const todo = item.closest('.list_item');
    const textDiv = todo.querySelector('.text');
    textDiv.style.display = "none";
    const change = document.createElement('input');
    // todo.style.justifyContent = 'space-between';
    change.value = textDiv.textContent;
    change.classList.add('input_change');
    todo.appendChild(change);
    const divPen = todo.querySelector('.pen');
    divPen.style.display = 'none';
    const divConfirm = todo.querySelector('.confirm');
    divConfirm.style.display = 'block';
    divConfirm.addEventListener('click', confirmbtn);
};



// confirm btn 
function confirmbtn(e) {
    const item = e.target;
    const confirm = item.closest('.list_item');
    const text = confirm.querySelector('.text');
    let change = confirm.querySelector('.input_change');
    text.textContent = change.value;
    change.remove();
    text.style.display = 'block';
    const divConfirm = confirm.querySelector('.confirm');
    divConfirm.style.display = 'none';
    const divPen = confirm.querySelector('.pen');
    divPen.style.display = 'block';
    // confirm.style.justifyContent = 'center';
};


// search input
inputSearch.addEventListener('input', () => {
    const searchValue = inputSearch.value.toLowerCase();
    const listItem = document.querySelectorAll('.list_item');
    listItem.forEach((element) => {
        const text = element.querySelector('.text');
        const textValue = text.textContent.toLowerCase();
        if (searchValue == "" || textValue.includes(searchValue)) {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        };
    });
    console.log(inputSearch.value);
});

// create dark mode 
function changeMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
};
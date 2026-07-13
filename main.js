

let mainInput = document.querySelector('#main-input');
let addBtn = document.querySelector('#add-btn');
let wrapperList = document.querySelector('#wrappwer-list');

let logList = document.querySelector('#log-list');

let elementCount = 0;
addBtn.addEventListener('click',()=>{
    console.log('si')
    let intputText = mainInput.value
    let newElement = `
    <div class="element" data-id="${elementCount}">
        ${intputText}
        <button class="delete-btn">x</button>
    </div>`;


    wrapperList.innerHTML += newElement;
    elementCount++;
})


// Escuchador de eventos en wrappwer-list > button.delete-btn para borrar el elemento en cuestion 
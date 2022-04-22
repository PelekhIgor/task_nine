const inpFirstE = document.getElementById('input1')
const inpLastE = document.getElementById('input2')
const inpTelE = document.getElementById('input3')
const btnE = document.getElementById('btn')
const listE = document.getElementById('list_container')

btnE.addEventListener('click', onAddTodo)
function onAddTodo (){
    const first = inpFirstE.value
    const last = inpLastE.value
    const tel = inpTelE.value
    if(!first.trim() || !last.trim() || !tel.trim()){
        alert('please add some text')
        return
    }

    if (!isNaN(first || last)){
        alert('please enter your name')
        return
    }
    if(isNaN(tel)){
        alert('please enter phone number')
        return
    }
    const liE = createToDoE(first,last,tel)
    addElement(liE,listE)
    inpFirstE.value = ' '
    inpLastE.value = ' '
    inpTelE.value = ' '
}
function createToDoE(first,last,tel){
    const container = createElement('li')
    const firstElem = createElement('div')
    const lastElem = createElement('div')
    const telElem = createElement('div')
    container.classList.add('cont')
    firstElem.textContent = first
    lastElem.textContent = last
    telElem.textContent = tel
    addElement(firstElem , container)
    addElement(lastElem , container)
    addElement(tel , container)
return container
}

function createElement(tag){
    return document.createElement(tag)
}
function addElement(element, container){
    container.append(element)
}



const inpFirstE = document.getElementById('input1')
const inpLastE = document.getElementById('input2')
const inpTelE = document.getElementById('input3')
const btnE = document.getElementById('btn')
const listE = document.getElementById('list_container')
const templateE = document.getElementById('template')
btnE.addEventListener('click', onAddTodo)

function onAddTodo (){
    const first = inpFirstE.value
    const last = inpLastE.value
    const tel = inpTelE.value
    if(!first.trim() || !last.trim() || !tel.trim() || isNaN(tel)){
        alert('please add some text')
        return
    }

    const liE = createToDoE(first,last,tel)
    addElement(liE,listE)
    inpFirstE.value = ' '
    inpLastE.value = ' '
    inpTelE.value = ' '
}
function createToDoE(first,last,tel){
     const liE = templateE.innerHTML
         .replace("{{first}}",first)
         .replace("{{last}}",last)
         .replace("{{tel}}",tel)
return liE
}

function addElement(element, container){
    container.innerHTML += element
}



const input=document.getElementById('Link-input')
const linkForm=document.getElementById('link-form')
const errorMsg=document.getElementById('err-msg')
const btn=document.getElementById('menu-btn')
const menu=document.getElementById('menu')


btn.addEventListener('click',navToggle);
function navToggle(){
    btn.classList.toggle('open');
     menu.classList.toggle('flex');
      menu.classList.toggle('hidden');
}

linkForm.addEventListener('submit',formSubmit);

function isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
        return false;
    else
        return true;
}

function formSubmit(e){
    e.preventDefault();

if(input.value===''){
    errorMsg.innerHTML='please enter something'
    input.classList.add('border-Red');
}
else if(!isUrlValid(input.value)){
    errorMsg.innerHTML='please enter a valid url'
    input.classList.add('border-Red');  
}
else{
errorMsg.innerHTML=''
input.classList.remove('border-Red');
input.classList.add('border-green-500');
input.value=''
alert('success')

}

}
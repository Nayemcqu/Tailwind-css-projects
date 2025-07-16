const menuBtn=document.querySelector('#menu-btn');
const Menus=document.querySelectorAll('.menu');
const menu=document.querySelector('#menu-container');

const panels=document.querySelectorAll('.panel');
const tabs=document.querySelector('.tabs')


panels.forEach((panel)=>{

panel.addEventListener('click',(e)=>{

panels.forEach((panel)=>{
  panel.children[0].classList.remove('border-b-4','border-orange-500');  
})

panelName=e.currentTarget.getAttribute('data-target');
panel.children[0].classList.add('border-b-4','border-orange-500');

for(const tab of tabs.children){
    if(tab.classList.contains(panelName)){
        tab.classList.add('flex');
            tab.classList.remove('hidden');
    }
    else{
            tab.classList.add('hidden'); 
    }
}

})

})

Menus.forEach((menu)=>{

menu.addEventListener('click',(e)=>{

    e.currentTarget.children[1].classList.toggle('hidden');
 e.currentTarget.children[1].classList.add('flex');
})

})



menuBtn.addEventListener('click',(e)=>{    
e.currentTarget.classList.toggle('open');
menu.classList.toggle('flex');
menu.classList.toggle('hidden');

})
const input=document.getElementById('input');
const list=document.getElementById('list');
const adaugare=document.getElementById('adaugare');
const stergere=document.getElementById('stergere');
const resetare=document.getElementById('resetare');
function f1(event){
    input.value=input.value.toUpperCase();
}
adaugare.addEventListener('click',function() {
    if (input.value){
        const li =document.createElement('li');
        li.textContent=input.value;
        list.append(li);
        input.value='';
    }else {
        alert('Introduceti text');
    }
    
});
resetare.resetEventListener('click',function(){

});
stergere.deleteEventListener('click',function(){
    
});
const button = document.getElementById('janela')

const modalWrapper = document.querySelector('.modal-wrapper')


button.onclick = ()=>{
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown',function(event){
    
    const isEsckey = event.key === 'Escape'
    if(isEsckey){
        modalWrapper.classList.add('invisible')
    }
})
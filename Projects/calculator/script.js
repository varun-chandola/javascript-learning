const display = document.getElementById('show');

const allBtns = document.querySelectorAll('button');
allBtns.forEach((eachBtn)=>{
    eachBtn.addEventListener('click' ,(e)=>{
        if(e.target.textContent == 'C'){
            display.value = ''
        }else if(e.target.textContent == '='){
            try{
                display.value = eval(display.value);
            }catch(error){
                display.value = 'Error';
            }
        }else{
                display.value = display.value + e.target.textContent;
        }
    })
})
let btn = document.querySelector('.btn')
let body = document.querySelector('.body')
btn.addEventListener('click',function(){
    if(body.style.backgroundColor === 'black'){
        body.style.backgroundColor = 'white'
        btn.textContent = 'Night'
    }else{
        body.style.backgroundColor = 'black'
        btn.textContent = 'Light'
    }
})
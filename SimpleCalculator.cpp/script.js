(function(){
    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.btn')
    let clear = document.querySelector('.btn-clear')
    let equal = document.querySelector('.btn-equal')


    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            if(value!="="){
                screen.value += value;
            }
        })
    });

    equal.addEventListener('click',function(e){
        let answer;
        if(screen.value == ''){
            screen.value = "Please enter";
        }
        else{
            console.log(screen.value)
            answer = eval(screen.value);
            screen.value = answer;
        }
    });

    clear.addEventListener('click',function(e){
        screen.value = "";
    })

})();
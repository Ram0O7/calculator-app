// theme changing logic
var theme = document.getElementsByTagName('link')[1];

const btnBody = document.getElementsByClassName('.btns');
const btns = document.getElementsByTagName('span');

for (let i = 4;i< 7; i++){
    btns[i].addEventListener('click', function () {
        if (i ==4 ) {
            theme.setAttribute('href', 'theme1.css');
        } else if (i==5) {
            theme.setAttribute('href', 'theme2.css');            
        } else {
            theme.setAttribute('href', 'theme3.css');            
        }
    });
}

// calculator logic
const consoleInput = document.getElementById('main-input');
const numBtns = document.querySelectorAll('.grid-items');
// console.log(consoleInput);
var result = '';
function consoleOutPut(result){
    consoleInput.setAttribute('value', result);
}


for (let j = 0; j < numBtns.length; j++){
    let btnValue = numBtns[j].innerText;
    // console.log(btnValue)
    numBtns[j].addEventListener('click', function() {
        if (btnValue == 1 || btnValue == 2 || btnValue == 3 || btnValue == 4 ||
            btnValue == 5 || btnValue == 6 || btnValue == 7 || btnValue == 8 || btnValue == 9 || btnValue == 0) {
                
                result += btnValue;
            consoleOutPut(result);
        }

    });
}






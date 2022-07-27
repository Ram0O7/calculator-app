// theme changing logic
var theme = document.getElementsByTagName('link')[1];

const btnBody = document.getElementsByClassName('.btns');
const btns = document.getElementsByTagName('span');

for (let i = 4; i < 7; i++) {
    btns[i].addEventListener('click', function () {
        if (i == 4) {
            theme.setAttribute('href', 'themes/theme1.css');
        } else if (i == 5) {
            theme.setAttribute('href', 'themes/theme2.css');
        } else {
            theme.setAttribute('href', 'themes/theme3.css');
        }
    });
}

// calculator logic
const consoleInput = document.getElementById('main-input');
const numBtns = document.querySelectorAll('.grid-items');

var result = '';
function consoleOutPut(result) {
    consoleInput.setAttribute('value', result);
}


for (let j = 0; j < numBtns.length; j++) {
    let btnValue = numBtns[j].innerText;

    numBtns[j].addEventListener('click', function () {
        result += btnValue;

        // evalution of the entered values

        if (btnValue == '=' || btnValue == 'DEL' || btnValue == 'RESET') {
            result = result.slice(0, result.length - 1)

            if (btnValue == 'DEL') {
                result = result.slice(0, result.length - 3);
                consoleOutPut(result);
            } else if (btnValue == 'RESET') {
                result = result.slice(0, result.length - 5);
                result = '';
                consoleOutPut(result);
            } else {
                result = eval(result);
                consoleOutPut(result);
            }
        }

        // Taking Number input 
        else {
            consoleOutPut(result);
            if (btnValue == '+' || btnValue == '-' || btnValue == '*' || btnValue == '/') {
                result += '';
            }
        }

    });


}






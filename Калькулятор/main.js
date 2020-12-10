const inputCalc = document.querySelector('.account'),
    resultCalc = document.querySelector('.result');
console.log('works');

let a = [];


function input(i) {
    inputCalc.value = inputCalc.value + i;

}

function sqrt() {
    console.log(inputCalc.value);
    k = Number(inputCalc.value);
    resultCalc.value = Math.sqrt(k);
    a.push('&radic;' + k + ' = ' + resultCalc.value);
    // console.log(a);
    if (a.length > 100) {
        a.shift();
        // console.log(a);
    }
    localStorage.setItem('a', JSON.stringify(a));
    // inputCalc.value = eval(inputCalc.value);
    let b = localStorage.getItem('a');
    b = JSON.parse(b);
    // console.log(b);

    let display = '<ul>';
    b.forEach(function (item, i, arr) {
        display += '<li>' + item + '</li>';
        display += '</ul>';
    });

    let calculations = document.querySelector('.display');
    calculations.innerHTML = display;
}



function result() {
    console.log(inputCalc.value);
    if (eval(inputCalc.value) === undefined) {
        resultCalc.value = '0,00';
        inputCalc.value = '0,00';

    } if (eval(inputCalc.value) == Infinity) {
        resultCalc.value = '0,00';
        inputCalc.value = 'Деление на ноль запрещено';
    }


    resultCalc.value = eval(inputCalc.value);

    // inputCalc.value = eval(inputCalc.value);

    a.push(inputCalc.value + ' = ' + resultCalc.value);
    // console.log(a);
    if (a.length > 100) {
        a.shift();
        // console.log(a);
    }
    localStorage.setItem('a', JSON.stringify(a));
    let b = localStorage.getItem('a');
    b = JSON.parse(b);
    // console.log(b);

    let display = '<ul>';
    b.forEach(function (item, i, arr) {
        display += '<li>' + item + '</li>';
        display += '</ul>';
    });

    let calculations = document.querySelector('.display');
    calculations.innerHTML = display;
    // colculations += b.value;
    // console.log(colculations);
}


function backspace() {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length - 1);
}

function reset() {
    resultCalc.value = '0,00';
    inputCalc.value = '0';
}


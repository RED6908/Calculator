function suma(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = number1 + number2;
    document.getElementById('resultado').value = result;    
}


function resta(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = number1 - number2;
    document.getElementById('resultado').value = result;   
}



function multiplicación(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = number1 * number2;
    document.getElementById('resultado').value = result;
    
}



function división(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = number1 / number2;
    document.getElementById('resultado').value = result;
    
}

function raíz(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let result = Math.sqrt(number1);
    
    document.getElementById('resultado').value = result;
    
}
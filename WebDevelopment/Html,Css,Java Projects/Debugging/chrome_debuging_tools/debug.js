

function performOperation(){
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);   
    const resultElement = document.getElementById('result');

    function multiply(a,b){

        debugger;

        return a*b
    }

    function display(result){

       

        

        resultElement.textContent = `the results are ${result}`;


    }

    if(!isNaN(num1) && !isNaN(num2)){

        let result = multiply(num1,num2)

        display(result)
    }else{
        
        resultElement.textContent = `please enter a valid number`;
    }




}
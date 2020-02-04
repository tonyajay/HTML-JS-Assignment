function add()
{
    num1 = Number(document.getElementById("firstNumber").value);
    num2 = Number(document.getElementById("secondNumber").value);
    document.getElementById("result").innerHTML = num1 + num2;
}

function subtract()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 - num2;
}

function multiply()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divide()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}
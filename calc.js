
const res = document.getElementById("result");

function appendText(input)
{
    res.value = res.value+input;
}

function clearText()
{
    res.value = "";
}

function evaluateText()
{
    try{
        res.value = eval(res.value);
        if(res.value==Infinity) res.value = "Can't divide by zero";
    }
    catch(error)
    {
        res.value = "Syntax Error!!";
    }
}
function average()
{
    num = Number(document.getElementById("reqnum").value);
    document.getElementById("result").innerHTML = (num*(num+1))/(2*(num+1));
}
function reverseString(str)
{
    if(!str || str.length < 2 || typeof str!== 'string')
    {
        return 'Not Valid';
    }
var revArray = [];

for(let i = str.length-1 ; i >= 0; i--)
revArray.push(str[i]);
return revArray.join('');
}
let string=prompt("Enter the String : ")
response = readline()
console.log(reverseString("Hello Ellucian!"))
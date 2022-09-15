// var v= 153;
// let temp;
// var lastdigit;
// var reversenumber=0;
// temp=v;
// while(temp>0)
// {
//     lastdigit=temp%10;
//     temp=temp-lastdigit;
//     temp=temp/10;
//     reversenumber=reversenumber+lastdigit;
    
// }
// console.log("reverse number:",reversenumber);
var v  = 123;
let temp;
let lastdigit;
var reversenumber=0;
temp=v;
while(temp>0)
{
    lastdigit=temp%10;
    temp=temp-lastdigit;
    temp=temp/10;
    reversenumber=reversenumber+lastdigit

}
console.log("reversenumber:"+reversenumber );
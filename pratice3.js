//Love Calculator

var user1 = prompt("Enter your name: ");
var user2 = prompt("Enter your partner name: ");   
var n = Math.random();
n = n * 100;
n = Math.floor(n)+ 1;
//alert("Your Love percentage is " + n + "%");
if(n > 70)
{
    alert("Your Love percentage is " + n + "%, you love each othere like kanye love kanye");
}
else {
    alert("Your Love percentage is " + n + "%")
}
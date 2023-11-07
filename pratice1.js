//name ins proper way
var name = prompt("what is your name?");
console.log(name);
var fname = name.slice(0,(name.length-(name.length-1)));
var remaniningletter = name.slice(1,name.length);
var final = fname.toUpperCase() + remaniningletter.toLowerCase();
alert(final);
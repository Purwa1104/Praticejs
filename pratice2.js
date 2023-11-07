//tweeter word limit
var msg = "hello,";
var name = "Puri";
var tweets = prompt("Compose your tweet");
var tweetLength = tweets.length;
var totalLength = 140;
var leftWords = totalLength - tweetLength;
console.log(leftWords);
alert(tweets.slice(0,140));
alert(msg + " " + name);
alert("You have written " + tweetLength + " charcter,you have " + leftWords + " charcter left.");
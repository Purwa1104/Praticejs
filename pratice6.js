//lyrics of 99 bottles
function beer(){
    var numberOfBottles = 99;
    while(numberOfBottles > 1){
        console.log( numberOfBottles + " bottles of beer on the wall," + numberOfBottles + " bottles of beer.Take one down and pass it around,");
        numberOfBottles--;
        console.log(numberOfBottles + " bottles of beer on the wall.");
    }
}
beer();
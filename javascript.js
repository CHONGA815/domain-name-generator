var myfirst ["the", "his", "our"];
var mysecond ["great", "big", "amazing"];
var mythird ["jogger", "raccoon", "dog"];

var Elements [myfirst, mysecond, mythird];
var Selectors ["first", "second", "third"];


function wordSelectorFromArray(theArray, theId){

    var firstLength = theArray.length-1;
    var myRandomNumber = Math.random()*firstLength;
    var myRoundedNumber = Math.floor(myRandomNumber);
    
    document.getElementById(theId).innerHTML = theArray[myRoundedNumber];
}
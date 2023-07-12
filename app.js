function num (num){
    
    var result = document.getElementById("result");
    result.value += num;
}
function clearResult(){
    var clearResult = document.getElementById("result") ;
    clearResult.value = "";
}
function equal(){
    var equal = document.getElementById("result");
    equal.value = eval(equal.value);
}
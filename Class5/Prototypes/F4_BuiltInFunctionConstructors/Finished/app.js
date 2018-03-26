String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;  
}

console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
    return this > 0;   
}

Number.prototype.isGreaterThenTen = function() {
    return this > 10;
}

Array.prototype.greaterThenFive = function(){
    var arr = [];
    for(var i = 0; i < this.length; i++){
        if(this[i] > 5){
            arr.push(true);
        }else{
            arr.push(false);
        }
    }
    return arr;
}

console.log((10).isGreaterThenTen())
console.log([1,2,3,10,-10].greaterThenFive())
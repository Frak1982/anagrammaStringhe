function isAnagramma(x, y) {

    var strArray1 = x.split("");
    var strArray2 = y.split("");

    if ((x.length != y.length) || (x == y)) {

        console.log(strArray1, strArray2); 
        console.log("L'anagramma è : " , false);

    }else {

        var confronto = strArray1.every(function(element, index) { 

            element === strArray2[index]; 
            if(strArray2.indexOf(element)>-1){ 
    
                return element = strArray2[strArray2.indexOf(element)];
    
            } 
        }); 
        console.log(strArray1, strArray2); 
        console.log("L'anagramma è : " , confronto);
    }
             
}


isAnagramma("listen", "netsirrl");


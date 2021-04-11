function bubbleSort(arrayInput){
    var priorIndexValue;
    var latterIndexValue;
    for(i=0; i<arrayInput.length; i++){
        priorIndexValue = arrayInput[i];
        latterIndexValue = arrayInput[i+1]
        // console.log(priorIndexValue);
        // console.log(latterIndexValue)
        arrayInput[i] = latterIndexValue;
        arrayInput[i+1] = priorIndexValue
        
    }
    return arrayInput;
}
console.log(bubbleSort([5,2,3,6]))
// Result should be [2, 3, 6, 5] 5 goes all the way to the back of the array
function insertionSort(arr) {
    //for each element in the arr, starting at idx 1
    for (let i = 1; i < arr.length; i++){
        let current = arr[i];
        //establish last element in sorted portion
        for (let j = i-1; j >=0; j--){
            if (current < arr[j]){
                //swap
                arr[j+1] = arr[j];
                arr[j] = current;
            }
        }
    }
    return arr;
}

module.exports = insertionSort;
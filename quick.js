/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start=0, end=arr.length-1){
    //initialize pivot point
    const pivot = arr[start];

    //initialize left pointer
    let left = start + 1;

    //partition array
    for (let j = start + 1; j <=end; j++){
        if (arr[j] < pivot){
            [arr[left], arr[j]] = [arr[j], arr[left]];
            left++;
        }
    }
    [arr[start], arr[left - 1]] = [arr[left - 1], arr[start]];
    return left-1;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left=0, right=arr.length-1) {
    //empty arr case
    if (arr.length === 0) return [];

    //base case: if left >= right, subarray is already sorted
    if (left >= right){
        return;
    }

    //get pivot index
    const pivotIdx = pivot(arr, left, right)

    //sort left subarray
    quickSort(arr, left, pivotIdx-1);

    //sort right subarray
    quickSort(arr, pivotIdx +1, right);

    return arr;
}


let arr = [8,6,4,2,1,3,5,7,9,100,11,99,13,69,54];
module.exports = { pivot, quickSort } ;
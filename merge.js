function merge(arr1, arr2) {
    const results = [];
    let a = 0;
    let b = 0;

    while (a < arr1.length && b < arr2.length){
        if (arr1[a] < arr2[b]){
            results.push(arr1[a]);
            a++;
        } else if (arr2[b] < arr1[a]){
            results.push(arr2[b]);
            b++;
        } else {
            results.push(arr1[a]);
            results.push(arr2[b]);
            a++;
            b++;
        }
    }

    if (a >= arr1.length){
        arr2.slice(b).forEach(function(val){
            results.push(val);
        })
    } else {
        arr1.slice(a).forEach(function(val){
            results.push(val);
        })
    }

    return results;
}

function mergeSort(arr) {
    //base case
    if (arr.length <= 1) return arr;

    //reg case
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

module.exports = { merge, mergeSort};
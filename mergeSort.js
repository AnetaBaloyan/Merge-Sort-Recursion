//Merge Sort
const forEach = function(arr, f) {
    const looper = function(n) {
        if(n >= arr.length) {
            return;
        }
        f(arr[n]);
        looper(n+1);
    };
    looper(0);
};

const merge = function(arr1, arr2) {
    const arr3 = [];
    const looper = function(arr1, arr2) {
        if(arr1.length === 0 && arr2.length === 0) {
            return;
        }
        if(arr1.length !== 0 && arr2.length !== 0) {
            if(arr1[0]>=arr2[0]) {
                arr3.push(arr2[0]);
                arr2.shift();
            } else {
                arr3.push(arr1[0]);
                arr1.shift();
            }
        } else if(arr1.length === 0) {
            const f = function(point) {
                arr3.push(point);
            };
            forEach(arr2, f);
            arr2.splice(0, arr2.length);
            //arr2.splice(0, arr2.length);
        } else {
            const f = function(point) {
                arr3.push(point);
            };
            forEach(arr1, f);
            arr1.splice(0, arr1.length);
        };
        looper(arr1, arr2);
    };
    
    looper(arr1, arr2);
    
    return arr3;
}; 

const mergeSort = function(arr1) {
    if(arr1.length > 1) {
        const arr2 = [];
        const arr3 = [];
        const m = Math.floor(arr1.length/2);
        const looper1 = function(n) {
            if(n === m) {
                return;
            }
            arr2.push(arr1[n]);
            looper1(n+1);
        };
        const looper2 = function(n) {
            if(n === arr1.length) {
                return;
            }
            arr3.push(arr1[n]);
            looper2(n+1);
        };
        looper1(0);
        looper2(m);
        const result = merge(mergeSort(arr2), mergeSort(arr3));
        return result;
    }
    return arr1;
};

console.log(mergeSort([7, 0, 1, -6, 0, 19, 2]));
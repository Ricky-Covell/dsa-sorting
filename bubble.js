const bubbleSort = (arr) => {
    const swapVals = (arr, i1, i2) => {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]] 
    }

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) swapVals(arr, j, j+1)
        }
    }
    return arr
}

module.exports = bubbleSort;
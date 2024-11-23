const merge = (arr1, arr2) => {
    let merged = []
    let idx1 = 0
    let idx2 = 0

    while (idx1 < arr1.length && idx2 < arr2.length) {
        if (arr2[idx2] > arr1[idx1]) {
            merged.push(arr1[idx1])
            idx1++
        } else {
            merged.push(arr2[idx2])
            idx2++
        }
    }

    while (idx1 < arr1.length) {
        merged.push(arr1[idx1])
        idx1++
    }

    while (idx2 < arr2.length) {
        merged.push(arr2[idx2])
        idx2++
    }

    return merged
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    const middleIdx = Math.floor(arr.length / 2)
    const leftHalf = mergeSort(arr.slice(0, middleIdx))
    const rightHalf = mergeSort(arr.slice(middleIdx))

    return merge(leftHalf, rightHalf)
}

module.exports = { merge, mergeSort};
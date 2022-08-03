const FixInput = function (input) {
    return Array.isArray(input) ? [...input] : Object.values(input)
}


const myEach = function (input, callback) {
    let newInput = FixInput(input)
    for (let index = 0; index < newInput.length; index++) {
        callback(newInput[index])
    }
    return input
}

const myMap = function (input, callback) {
    let newInput = FixInput(input)
    let newArr = []
    for (let index = 0; index < newInput.length; index++) {
        newArr.push(callback(newInput[index]))
    }
    return newArr
}

const myReduce = function (input, callback, acc) {
    let newInput = FixInput(input);

    //if acc is not provided, we set it equal to newInput[0], and remove one from the input list
    if (!acc) {
        acc = newInput[0]
        newInput = newInput.slice(1)
    }

    //callback function takes the curr value of acc, the current interation, and a reference to the collection(input)
    for (let i = 0; i < newInput.length; i++) {
        //at each iteration, we are passing it as an argument, and updating the acc value
        acc = callback(acc, newInput[i], newInput)
    }

    return acc
}

const myFind = function (collection, predicate) {
    let newInput = FixInput(collection)
    let found
    for (let i = 0; i < newInput.length; i++) {
        if (predicate(newInput[i])) {
            found = newInput[i]
            break
        }
    }
    return found
}

const myFilter = function (collection, predicate) {
    let newInput = FixInput(collection)
    let found = []
    for (let i = 0; i < newInput.length; i++) {
        if (predicate(newInput[i])) {
            found.push(newInput[i])
        }
    }
    return found
}

const mySize = function (collection) {
    let newInput = FixInput(collection)
    return newInput.length
}

const myFirst = function (array, n) {
    if (n) {
        let newArr = []
        for (let i = 0; i < n; i++) {
            newArr.push(array[i])
        }
        return newArr
    } else {
        return array[0]
    }
}

const myLast = function (array, n) {
    if (n) {
        let newArr = []
        for (let i = array.length - n; i < array.length; i++) {
            newArr.push(array[i])
        }
        return newArr
    } else {
        return array[array.length - 1]
    }
}

// console.log(myLast([1, 2, 3, 4], 2))

const myKeys = function (object) {
    let arr = []
    for (const key in object) {
        arr.push(key)
    }
    return arr
}

const myValues = function (object) {
    let arr = []
    for (const key in object) {
        arr.push(object[key])
    }
    return arr
}

const mySortBy = function (arr, callback) {
    let newArr = [...arr]
    newArr.sort((a, b) => {
        if (callback(a) < callback(b)) {
            return -1
        } else if (callback(a) > callback(b)) {
            return 1
        } else {
            return 0
        }
    })
    return newArr
}

const myFlatten = function (array, boolean, newArray = []) {
    if (!boolean) {
        array.forEach(element => {
            if (Array.isArray(element)) {
                myFlatten(element, boolean, newArray)
            } else {
                newArray.push(element)
            }
        });
        return newArray
    } else {
        array.forEach(element => {
            if (Array.isArray(element)) {
                element.forEach((thing) => newArray.push(thing))
            } else {
                newArray.push(element)
            }
        })
        return newArray
    }
}

console.log(myFlatten([1, [2, 3], [[4, 5], 6, [7, [8, 9]]]], true))


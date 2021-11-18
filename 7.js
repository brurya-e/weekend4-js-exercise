//filter- return only cell in condition

const filter = (arr, conditions) => {
    res = [];
    for (let i = 0; i < arr.length; i++)
        if (conditions(arr[i]))
            res.push(arr[i]);
    return res;
}

//forEcth  nake/chek for every cell on the array
const forEcth = (arr, doSomting) => {
    for (let i = 0; i < arr.length; i++)
        doSomting(arr[i]);
}

//map mack for every cell return new arr
const map = (arr, doSomting) => {
    res = [];
    for (let i = 0; i < arr.length; i++)
        res.push(doSomting(arr[i]));
    return res;
}
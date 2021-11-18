//filter- return only cell in condition

const filter = (arr, conditions) => {
    res = [];
    for (let i = 0; i < arr.length; i++)
        if (conditions(arr[i]))
            res.push(arr[i]);
    return res;
}

//forEcth  nake/chek for every cell
const forEcth = (arr, doSomting) => {
    res = [];
    for (let i = 0; i < arr.length; i++)
        res.push(doSomting(arr[i]));
    return res;
}

//map mack for every cell 
const map = (arr, doSomting) => {
    res = [];
    for (let i = 0; i < arr.length; i++)
        res.push(doSomting(arr[i]));
    return res;
}

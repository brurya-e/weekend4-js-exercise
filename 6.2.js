//first count all leter
//second count all leters that value bigger then 1;

const duplicate = str =>{
    let counts = {};
    let strArr = (str.toLowerCase()).split('') ;
    strArr.forEach(function(l) { counts[l] = (counts[l] || 0)+1; });

    let res = 0;
    for (key in counts){res+=(counts[key]>1);}
    return res;
}

console.log(duplicate('abcd'));
console.log(duplicate('aabbcde'));
console.log(duplicate('Aa11'));
console.log(duplicate('indivisibilities'));

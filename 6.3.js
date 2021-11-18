//1. marge
//2. sort
//3. remove duplicate

const orginazie = (str1, str2) => {

    const strArr = (str1 + str2).split('');
    strArr.sort();
    res = strArr.filter((a, b) => strArr.indexOf(a) === b).join('');

    return res;
}
orginazie('xyzwxxxxyyy','aaaabcdyxz');
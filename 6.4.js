//option1: using 6.2 return true if res==0;
//option2: nested loop' return false when find duplicate
//optin3: based on 6.3 remove duplicate and comper lhengh 

function isIsogram(str){
    str = str.toLowerCase();
    for(let i = 0; i < str.length; ++i) {
      for(let j = i + 1; j < str.length; ++j) {
        if(str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
 }

 console.log(isIsogram('abcd'));
 console.log(isIsogram('aba'));

//3
//  return str.split('').filter((item, pos, arr)=> arr.indexOf(item) == pos).length == str.length;
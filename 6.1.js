// Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

function accum(str) {
    let letters = str.split('');
    let words = [];

    for(let i = 0; i < letters.length; i++) {
        let temp ='';
        for(let j = 0; j<i ;j++){
            temp+=letters[i].toLowerCase();
        }
        words.push(letters[i].toUpperCase() + temp);
  }

  return words.join('-');
}
console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));

//short way:
// words.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));

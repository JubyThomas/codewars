var say = function(string1) {
    return function say2(string2)
    {
      return string1 +" "+ string2;
    }
 }

//  var say = function(string1) {
//     return function (string2) {
//       return [string1, string2].join(' ');
//     }
//   }

// var say = string1 => (string2) => string1 + ' ' + string2;
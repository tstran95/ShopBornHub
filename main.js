// var courses = [
//     "Java",
//     "PHP",
//     "Python"
// ];
// Array.prototype.map2 = function(x){
//   var newArr = [], arrayLength = this.length;
//   for(var i = 0; i < arrayLength; i++){
//     x(this[i] , i);
//   }
//   var b = "Lêu lêu";
//   return b;
// }
// var html = courses.map2((x) => {
//   return `<h1>${x}</h1>`;
// });
// console.log(html);
function add_two_numbers(callback, a, b) {
  return callback(a,b);
}
var x = add_two_numbers((a,b)=>{
    return a+b;
}, 4, 5);
console.log(x);
const numb = [1,2,3,4,5,6,7,8,9,10];
const result = numb.filter(checkAdult);

function checkAdult(num){
    return num <= 6;
}
console.log (result);
/*


    함수 만들기 연습
    2022/10/7

*/

//----------------------------------------------------------------------------------
//홀수이면 true 짝수이면 false리턴하는 함수
let isodd = function(n){
    if(n%2==1)
        return true
    else
        return false
}

//----------------------------------------------------------------------------------
let iseven =function(n){
    if (n % 2 == 0)
        return true
    else
        return false
}

//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
function getitems(arr, testFunction){
    let items = [];//testfunction(item)을 통과한 item들을 저장할 배열
    

    for(let item of arr) {
        if(testFunction(item))
            items.push(item);
    }
    return items;
}
let array = [23, 34, 56, 17, 90, 46, 77, 123, 481, 10]
console.log(getitems(array, isodd));
// console.log(array.filter(isodd));



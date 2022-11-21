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


// console.log(isodd(3))//true
// console.log(isodd(4))//false
//----------------------------------------------------------------------------------
//매개변수 arr에서 홀수만 뽑아서 새 배열에 지정하고 그 배열을 반환
let array = [23, 34, 56, 17, 90, 46, 77, 123, 481, 10]
function getodds(arr) {
    let odds = [];
    for(let item of array){
        if(isodd(item)==true)
            odds.push(item);

    }
    return odds;
}
console.log(getodds(array))
//----------------------------------------------------------------------------------
let iseven =function(n){
    if (n % 2 == 0)
        return true
    else
        return false
}
//----------------------------------------------------------------------------------
function getevens(arr){
    let evens = [ ];
    for(let item of array){
        if(iseven(item)==true)
            evens.push(item);
    }
    return evens;

}
console.log(getevens(array))
//----------------------------------------------------------------------------------
function getitems(arr, testfunction){
    let items = [];//testfunction(item)을 통과한 item들을 저장할 배열

    for(let item of arr) {
        if(testfunction(item))
            items.push(item);
    }
    return items;
}

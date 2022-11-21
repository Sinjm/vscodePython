/*함수 생성 방법
1.선언적 함수
function 함수명( ){}
2.익명 함수
let 변수명 = function ( ) {} 함수명이 생략된 함수 정의 자체를 함수에 저장
3.화살표 함수

*/
/*
    함수 만들기 연습
    2022.9.30
*/
//---------------------------------------
//함수 정의
//------------------------------------------
//선언적 함수
 function doublex (n=0) {    
    return n * 2;
}
console.log(doublex(100))



function square(n=0){
    return n**2;
}
console.log(square(3))



function average(a=0,b=0){
    return (a+b)/2;
}
console.log(average(9,10))


//익명 함수
let dx = function (n = 0) {
    return n * 2 
}
console.log(dx(100))
//---------------------------------------------


function sayHello(person="아무개"){ //default 값에 =뒤에 오는 값을 대입
   console.log(`안녕하세요. ${person}씨`)

}
sayHello();
sayHello("이순신")

function tagString(tagname, key) {
    console.log(`<${tagname}> ${key} </${tagname}>`)
}
tagString("h1","Javascript")

let a= [10 , 20, 30, 40, 50];
let sumArray =  function (array){
    
    let sum = 0;
    for(let i in array){
        sum= sum+array[i];
    }
    return sum;
}
console.log(sumArray(a));
//for(let item of array)
//sum+= item;





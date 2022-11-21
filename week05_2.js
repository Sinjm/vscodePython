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

let dx = (n)=>{
    return n * 2 

}
// let dx = function(n){
//     return n*2
// }

console.log(dx(100))


//---------------------------------------
//함수 호출
//------------------------------------------
//두수 a,b를 받아서 큰수 반환하기
let max =(a , b) =>{
    return(a > b)? a: b;
    
    //

    // if (a > b)
    //     return a;
    // else
    //     return b;
}
//세수 a,b,c를 받아서 가장 큰 수 반환하기
let max3 = (a, b, c) => {
    return (max(a, b) > c)? max(a, b): c;
}
//return max(max(a, b), c); 

//---------------------------
//배열 array에서 가장큰 값을 찾아서 반환
let maxvalue = (array) => {
    let max = 0;
    for(let i in array){ 
        if (array[i] > max )
        max = array[i]
}
return max;  
}








// let sumArray =  function (array){
//     let sum = 0;
//     for(let i in array){
//         sum= sum+array[i];
//     }
//     return sum;
// }
//---------------------------------------
//매개변수 array의 모든 원소가 number이면 true, 아니면 false를 반환하는 함수
let a= [10 , 20, 30, 40, 50,34,5,36,76767,343];
let isAllNumber = function(array){
    for(let item of array){
        if(typeof(item)!='number')
          return false;
    }
    return true;
}
console.log(isAllNumber(a))


// console.log(maxvalue(a));

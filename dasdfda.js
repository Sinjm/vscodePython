// let a = [2, 3, 19, 34, 33, 123, 56]
// //임의의 양의 정수 배열을 선언하고 홀수와 짝수로 분류하여 odd,even배열에 저장하기
// //출력 odd= [3,19,33,123]
// // for(let i in a){
// //     if(a[i]%2 == 1)
// //         console.log(a[i])
// // }

// let odd=[]
// let even=[]
// // console.log("---------------------")
// for(let item of a){
//     if(item % 2 == 1)
//     odd.push(item)
//     else
//     even.push(item)
// }
// // console.log(even)
// // console.log(odd)

// for(let i in a){
//     if(a[i] % 2 == 1)
//     odd.push(a[i])
//     else
//     even.push(a[i])
// }
// console.log(even,odd)
// console.log(`odd = [${odd}]`)
// console.log(`even = [${even}]`)



// 문제 1의 배열에서 while문을 이용
//  첫 요소부터 합계가 100을 넘지 않으면서 최대가 되는 때

// let a = [23, 34, 56, 33, 21, 10, 45, 100, 567];
// let sum = 0;
// let i = 0;
// // while(i< a.length){
// //     if(sum + a[i] < 100){
// //     sum = sum + a[i]
// //     i++
// //     }
// //     else
// //     {
// //         break
// //     }
// // }
// // console.log(`${i}개의 합계 : ${sum}`)

// function square(n){
//     return n**2;
// }
// console.log(square(3))

// function average(a,b){
//     return (a+b)/2;
// }
// console.log(average(2,3))
// function sayHello(name){
//     console.log(`안녕하세요 , ${name}씨`)
// }
// sayHello("이순신")

// //html code 문자열 생성하기
// // tagString(tagname,text)
// function tagstring(tagname, text){
//     console.log(`<${tagname}> ${text} </${tagname}>`)
// }   
// tagstring("h1","hello javascript")

// // // a=[10,20,30,40,50]
// // let sumArray = function(array){
// //     let sum = 0;
// //     for(let i in array){
// //         sum = sum +a[i]
    
// //     }
// //     return sum
// // }
// // console.log(sumArray(a))

// //배열의 원소가 모두 number이면 true, 아니면 false를 반환하는 함수
// a = [10]
// let isAllNumber = function(array){
//     for(let i in array)
//         if(typeof (a[i]) == Number){
//             return true
//         }
//         return false
// }
// console.log(isAllNumber(a))

// let max = (a,b) =>{
// //     if(a > b){
// //     return a
// //     }
// //     return b
//     return(a > b)? a: b;

// }
// console.log(max(10,10))

// let max3 = (a, b, c) =>{
//     return (max(a,b) > c)? max(a,b): c;
// }
// console.log(max3(5,0,100))
// a = [10, 20, 41, 23, 105, 341, 532, 90]
// let maxValue = (array) =>{
//     let max = 0;
//     for(let i in array){
//         if(max < arry[i])
//             max = array[i]
// //     }
// //     return max
// // }
// // console.log(maxValue(a))
// function welcome(customer="손님",host="홍길동"){
//     console.log(`어서오세요, ${customer} 저는 ${host}입니다.`)

// }
// welcome()
// welcome("이순신","강감찬")
// let printDIT = function () {
//     console.log("DIT~!");
// }
// printDIT()
// function callFive(cbf) {
//     for (let i = 1; i <= 5; i++) {
//         cbf(); //콜백함수 호출
//     }
// }
// callFive(printDIT)

// function Product(name,price){
//     this.name = name;
//     this.price = price;
//     this.intro = function(){
//         console.log(`${this.name}의 가격은 ${this.price}입니다.`)
//     }
// }

let P1 = new Product('샤프심',500);
P1.intro();

class Product {
    constructor(name,price){
        this.name = name;
        this.price = price;    
    }
    intro(){
        console.log(`${this.name}의 가격은 ${this.price}입니다.`)
    }
}

let p1 = new Product("볼펜", 100);
p1.intro();
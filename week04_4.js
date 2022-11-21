/*
프론트 앤드 프로그래밍1_2반
2022.09.27

배열에서 홀수와 짝수를 분류하여 각각의 배열에 저장하기
*/

let a = [23,34,56,33,21,10,45,100,567];

let odd = [];
let even = [];
//배열 a의 각원소가 홀수이면 odd, 짝수면 even에 저장하기 배열명.push이용하기
for(let item of a){
    if(item%2 == 1)
    odd.push(item);
    else
    even.push(item);
}





//배열명.push(a)- 객체.method(b)

console.log(odd, even);
console.log(`odd[]=${odd}`);
console.log(`even[]=${even}`);

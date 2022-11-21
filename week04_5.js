/*
프론트 앤드 프로그래밍1_2반
2022.09.27

배열에서 원소들의 합계구하기
*/

let a = [23, 34, 56, 33, 21, 10, 45, 100, 567];

let sum = 0;    //합계 계산용 변수
let i = 0;  //배열 원소에 대한 인덱스용 변수
while(i < a.length){
    sum= sum + a[i];
    i++;
    //sum= sum + a[i++];
}

console.log(`sum of a[] = ${sum}`);


/*
프론트 앤드 프로그래밍1_2반
2022.09.27

배열에서 원소들의 합계가 100을 넘지않는 최대 합계 구하기
*/

let a = [23, 34, 56, 33, 21, 10, 45, 100, 567];
let sum = 0;
let i = 0;

while(i < a.length){
    if (sum + a[i] <= 100){
        sum = sum + a[i];
        i++;
    }
    else
    {
        break;
    }
        
}
console.log(`${i}개의 합계 : ${sum}`);


//배열에서 짝수 원소들의 합계가 100을 넘지 않는 최대 합계 구하기

while(i < a.length)
    if(sum + a[i] <= 100){
            for (let item of a)
            if (item % 2 == 0)
            sum = sum + a[i]
            i++;
            }
            else
                {
            i++ 
              } 
console.log(`짝수 원소들의 합계는 ${sum}`)  
            

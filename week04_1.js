let a = ["korea","Japan","china","Indonasia"];

//for-in 반복문으로 처리하기
for(let i in a) {
    console.log(a[i]);

}

console.log("-----------------------------");
//for off 반복문으로 처리하기
for(let country of a){
    console.log(country);
}


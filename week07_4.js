/*
    class 정의 연습
    2022.10.18

*/
class Product {
    constructor (name, price) {
        //빈 객체 ()생성 this에 연결
        this.name = name;
        this.price = price;
  
    }
    intro( )  {
        console.log(`${this.name}:${this.price}`);
        }
    가격( )  {
            console.log(`${this.name}의 가격은 ${this.price}입니다.`);
        }
}


//---------------------------------------------------------------------------------
//위에서 정의한 product를 이용하여 객체 생성한다.
//-----------------------------------------------------------------------------------------
let name = "신재민"
let p1 = new Product("볼펜",100);
let p2 = new Product("휴대폰", 1000000);
p1.intro();
p2.intro();
p1.brand = "monami";
console.log(p1.brand);

p1.가격();
p2.가격();
//생성자함수는 속성중심으로 정의생성
//생성자 함수의 메서드는 프로토타입(공유)



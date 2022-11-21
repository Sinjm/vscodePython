/*
    생성자 함수 연습
    2022.10.14

*/
function Product(name, price){  
    //생성할 객체의 속성과 메소드를 정의
    //빈 객체 {}가 생성되어 this에 연결되어 있다고 가정한다.
    this.name = name; // this.a 생성하고 있는 객체 속성의 a /a=매개변수 a
    this.price = price;
  
}

Product.prototype.가격= function(){
    console.log(`${this.name}의 가격은 ${this.price}입니다.`)
}
Product.prototype.intro = function(){
    console.log(`${this.name}:${this.price}`);
}
//-----------------------------------------------------------------------------------------------------
//생성자 함수product를 이용하여 객체를 생성한다.
let name = "신재민"
let p1 = new Product("볼펜",100);
p1.intro();
let p2 = new Product("휴대폰", 1000000);
p2.intro();
p1.brand = "monami";
console.log(p1.brand);

p1.가격();
p2.가격();
//생성자함수는 속성중심으로 정의생성
//생성자 함수의 메서드는 프로토타입(공유)
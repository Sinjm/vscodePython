/*  
    학식 메뉴 판매기 객체 모델링 연습
    2022.10.18
*/
//class menu 정의 하기
class menu {
    constructor(title, price, count) {
        this.title = title
        this.price = price
        this.count = count
    }
    //--------------------------------------------------------------
    intro(주문가능개수 = 0){
        if(this.count >= 주문가능개수){
            if(this.count > 0)
                console.log(`[${this.title}] : ${this.price}원 (재고량 ${this.count}개)`)
            else
                console.log(`[${this.title}] : ${this.price}원 (재고량 : 품절)`)
        }
        
    }
    판매(판매개수){
        if (this.count >= 판매개수){
        this.count -= 판매개수;
        console.log(`${this.title} ${판매개수}개 판매 했습니다`)
        }
        else
        console.error(`${this.title}의 재고 량이 ${this.count}개라서 ${판매개수}개를 판매할 수 없습니다.`)
        
    }
    //재고량이 희망개수 이상이면 true 아니면 false반환
    판매가능(희망개수){
        if(this.count >= 희망개수)
        console.log(true)
        else
        console.log(false)
        
    }
    //재고량 보충 메서드
    입고(입고개수){
        this.count += 입고개수;
    }
    재고보정(보정개수){
        this.count+=보정개수;
    }
}
//-----------------------------------------------------------------------------
//메뉴들을 관리하면서 판매, 판매량 집계등을 수정하고 판매가 집계
class Kiosk {
    constructor (name) {
        this.name = name;
        this.menu = []
    }
    메뉴추가(menu){
        this.menu.push(menu)
    }
    메뉴보기(주문가능개수=1){
        console.log(`-----${this.name}-----`)
        for(let aMenu of this.menu)
        aMenu.intro(주문가능개수);
        console.log(`----------------------`)
    }
    //kiosk의 속성menu에 등록된 메뉴 제목과 일치하는 것이 있으면 해당 메뉴를 반환
    //일치하는 제목의 메뉴가 없다면 null을 반환
    메뉴찾기(메뉴명){
        for(let aMenu of this.menu){
            if(메뉴명==aMenu.title)  //찾았으면 해당 [메뉴] 객체 반환
                return aMenu
        }
        //못 찾으면 null 반환
        console.log(`찾는 메뉴 ${메뉴명}이 없습니다.`)
        return null
    }
    //메뉴명은 string 주문개수는 number
    //학식 haksik.주문하기('라면', 2)
    //1.메뉴명과 일치하는 메뉴가 존재하는지 확인한다.
    //2.존재하면 해당 메뉴의 메소드 '판매'호출한다.
    //3.존재하지 않으면 적절한 오류 메세지를 호출한다.
    주문하기(메뉴명='라면',주문개수=1){
        let 찾는메뉴 = this.메뉴찾기(메뉴명)
        if(찾는메뉴){
            찾는메뉴.판매(주문개수)
        }
    }
}
//-----------------------------------------------------------------------------
let m1 = new menu("제육덥밮", 4000, 10)
let m2 = new menu("짜장면", 3000, 50)
let m3 = new menu("김치찌개", 6000, 80)


let 학식 = new Kiosk("DIT 학생 식당")

학식.메뉴추가(new menu("제육덥밮", 4000, 10));
학식.메뉴추가(new menu("짜장면", 3000, 50));
학식.메뉴추가(new menu('라면', 2000, 30))
학식.메뉴보기()


학식.주문하기('제육덥밮',10)
학식.메뉴보기()
학식.주문하기()
학식.메뉴보기()


// m1.intro()
// m1.판매(5)
// m1.intro()
// m1.판매(3)
// m1.intro()
// m1.입고(12)
// m1.intro()
// //2개 판매 , 1개만 나간경우
// m1.판매(2)
// m1.재고보정(1)

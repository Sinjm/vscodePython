/*
    객체 정의 연습

*/

let st ={
        
        name:'홍길동',
        age:23,
        code:205012111,
        dept:"컴퓨터정보과",
        아는사람: [],
        주소:"부산진구 양지로54, 동의과학대학교",
    "좋아하는 색":"파랑",
    
        소개: function(){
            console.log(`안녕하세요, 저는 ${this.age}세 ${this.name}입니다.`)
        },
        사는곳:function(){
            console.log(`저는 ${this.주소}에 살고있습니다.`)
        },
        인사하기:function(name){
            if(this.아는사람.includes(name))
            console.log(`안녕하세요,${name}씨 또 만났네요.`);
            else{
            console.log(`안녕하세요, ${name}씨 저는 ${this.name}입니다.`);
            this.아는사람.push(name);
            }
        }
        //function(a){
        //console.log(`안녕하세요, ${name}씨 저는 ${this.name}입니다.`); 
        //객체 내부에서 자신의 이름을 참조해야 될 상황일때는 this를 붙인다.
};
    
//객체 정의 이후에도, 속성 메소드를 추가할 수 있다.
console.log(`st.mbti =${st.mbti}`);
st.mbti='INTP'
st.성격유형=function(){
    console.log(`제 mbti 코드는  ${this.mbti}입니다`);
}

console.log(`st.mbti =${st.mbti}`);
st.성격유형();//제 mbti 코드는 intp입니다.


 //a.현재상황();현재 두개의 항목을 가지고 있습니다.     







console.log(st["좋아하는 색"]);
console.log(st["name"])
st.소개();
st.사는곳();
st.인사하기("이순신");//안녕하세요 이순신씨,저는 홍길동입니다.
st.인사하기("이순신");//안녕하세요 이순신씨, 또 만났네요.

st.인사하기("강감찬")//안녕하세요 강감찬씨, 저는홍길동입니다.
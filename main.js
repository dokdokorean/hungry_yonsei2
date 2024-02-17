const loading_page = document.getElementById("load");
window.onload = function main(){
    
    korean_func()
    //현재 년도 표시
let date = new Date();
var year = date.getFullYear()
//현재 달 표시
var month = date.getMonth()
//현재 날짜 표시
var day = date.getDate()
//현재 요일 표시
var day1 = currentDate.getDay();

let min = date.getMinutes()/60;

let hours=date.getHours()+min;

function randomNum(min, max){
    var randNum = Math.floor(Math.random()*(max-min+1)) + min;
    return randNum;
}

if (day1>0 && day1 <6 && hours>8 && hours <20){
    document.getElementById('open').style.visibility='visible'
    document.getElementById('close').style.visibility='hidden'
}
else if(day1==6 && hours>10 && hours <15){
    document.getElementById('open').style.visibility='visible'
    document.getElementById('close').style.visibility='hidden'
}
else{
    document.getElementById('close').style.visibility='visible'
    document.getElementById('open').style.visibility='hidden'
}

if (day1 === 0) {
    if (randomNum(1,3)==1){
        document.getElementById('title1').innerText='오늘 하루도'
        document.getElementById('title2').innerText='화이팅 하세요!'
    }
    else if (randomNum(1,3)==2){
        document.getElementById('title1').innerText='오늘은 왠지'
        document.getElementById('title2').innerText='예감이 좋은데요?'
    }
    else if (randomNum(1,3)==3){
        document.getElementById('title1').innerText='끼니는 거르지 말고'
        document.getElementById('title2').innerText='꼭꼭 챙겨먹기!'
    }
    else{
        document.getElementById('title1').innerText='모든 일이'
        document.getElementById('title2').innerText='잘 풀릴거에요!'
    }
    document.getElementById('sun').style.borderBottom='2px solid #133B98'
    document.getElementById('sun').style.color='#133B98'
    document.getElementById('sun').style.fontWeight='700'

    document.getElementById('mon').style.borderBottom='none'
    document.getElementById('mon').style.color='#000'
    document.getElementById('mon').style.fontWeight='400'

    document.getElementById('tue').style.borderBottom='none'
    document.getElementById('tue').style.color='#000'
    document.getElementById('tue').style.fontWeight='400'

    document.getElementById('wed').style.borderBottom='none'
    document.getElementById('wed').style.color='#000'
    document.getElementById('wed').style.fontWeight='400'

    document.getElementById('thur').style.borderBottom='none'
    document.getElementById('thur').style.color='#000'
    document.getElementById('thur').style.fontWeight='400'

    document.getElementById('fri').style.borderBottom='none'
    document.getElementById('fri').style.color='#000'
    document.getElementById('fri').style.fontWeight='400'

    document.getElementById('sat').style.borderBottom='none'
    document.getElementById('sat').style.color='#0053ED'
    document.getElementById('sat').style.fontWeight='400'

    for (let element of document.getElementsByClassName("mon1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("tue1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("wed1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("thur1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("fri1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("sat1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("sun1")){
        element.style.display="block";
    }

  } else if (day1 === 1) {    
    if (randomNum(1,6)==1){
        document.getElementById('title1').innerText='오늘 수업도'
        document.getElementById('title2').innerText='화이팅 하세요!'
    }
    else if (randomNum(1,6)==2){
        document.getElementById('title1').innerText='오늘 하루도'
        document.getElementById('title2').innerText='화이팅 하세요!'
    }
    else if (randomNum(1,6)==3){
        document.getElementById('title1').innerText='오늘은 왠지'
        document.getElementById('title2').innerText='예감이 좋은데요?'
    }
    else if (randomNum(1,6)==4){
        document.getElementById('title1').innerText='끼니는 거르지 말고'
        document.getElementById('title2').innerText='꼭꼭 챙겨먹기!'
    }
    else if (randomNum(1,6)==5,6){
        document.getElementById('title1').innerText='활기찬 한주의 시작!'
        document.getElementById('title2').innerText='화이팅이에요!'
    }
    else{
        document.getElementById('title1').innerText='모든 일이'
        document.getElementById('title2').innerText='잘 풀릴거에요!'
    }
    document.getElementById('sun').style.borderBottom='none'
    document.getElementById('sun').style.color='#EC5F59'
    document.getElementById('sun').style.fontWeight='400'

    document.getElementById('mon').style.borderBottom='2px solid #133B98'
    document.getElementById('mon').style.color='#133B98'
    document.getElementById('mon').style.fontWeight='700'

    document.getElementById('tue').style.borderBottom='none'
    document.getElementById('tue').style.color='#000'
    document.getElementById('tue').style.fontWeight='400'

    document.getElementById('wed').style.borderBottom='none'
    document.getElementById('wed').style.color='#000'
    document.getElementById('wed').style.fontWeight='400'

    document.getElementById('thur').style.borderBottom='none'
    document.getElementById('thur').style.color='#000'
    document.getElementById('thur').style.fontWeight='400'

    document.getElementById('fri').style.borderBottom='none'
    document.getElementById('fri').style.color='#000'
    document.getElementById('fri').style.fontWeight='400'
    
    document.getElementById('sat').style.borderBottom='none'
    document.getElementById('sat').style.color='#0053ED'
    document.getElementById('sat').style.fontWeight='400'

    for (let element of document.getElementsByClassName("mon1")){
        element.style.display="block";
    }
    for (let element of document.getElementsByClassName("tue1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("wed1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("thur1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("fri1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("sat1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("sun1")){
        element.style.display="none";
    }

  } else if (day1 === 2) {
    if (randomNum(1,6)==1){
        document.getElementById('title1').innerText='오늘 수업도'
        document.getElementById('title2').innerText='화이팅 하세요!'
    }
    else if (randomNum(1,6)==2){
        document.getElementById('title1').innerText='오늘 하루도'
        document.getElementById('title2').innerText='화이팅 하세요!'
    }
    else if (randomNum(1,6)==3){
        document.getElementById('title1').innerText='오늘은 왠지'
        document.getElementById('title2').innerText='예감이 좋은데요?'
    }
    else if (randomNum(1,6)==4){
        document.getElementById('title1').innerText='끼니는 거르지 말고'
        document.getElementById('title2').innerText='꼭꼭 챙겨먹기!'
    }
    else if (randomNum(1,6)==5){
        document.getElementById('title1').innerText='한국인은 밥심!'
        document.getElementById('title2').innerText='오늘의 학식은?'
    }
    else{
        document.getElementById('title1').innerText='모든 일이'
        document.getElementById('title2').innerText='잘 풀릴거에요!'
    }
    document.getElementById('sun').style.borderBottom='none'
    document.getElementById('sun').style.color='#EC5F59'
    document.getElementById('sun').style.fontWeight='400'

    document.getElementById('mon').style.borderBottom='none'
    document.getElementById('mon').style.color='#000'
    document.getElementById('mon').style.fontWeight='400'
    
    document.getElementById('tue').style.borderBottom='2px solid #133B98'
    document.getElementById('tue').style.color='#133B98'
    document.getElementById('tue').style.fontWeight='700'

    document.getElementById('wed').style.borderBottom='none'
    document.getElementById('wed').style.color='#000'
    document.getElementById('wed').style.fontWeight='400'

    document.getElementById('thur').style.borderBottom='none'
    document.getElementById('thur').style.color='#000'
    document.getElementById('thur').style.fontWeight='400'

    document.getElementById('fri').style.borderBottom='none'
    document.getElementById('fri').style.color='#000'
    document.getElementById('fri').style.fontWeight='400'

    document.getElementById('sat').style.borderBottom='none'
    document.getElementById('sat').style.color='#0053ED'
    document.getElementById('sat').style.fontWeight='400'

    for (let element of document.getElementsByClassName("mon1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("tue1")){
        element.style.display="block";
    }
    for (let element of document.getElementsByClassName("wed1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("thur1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("fri1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("sat1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("sun1")){
        element.style.display="none";
    }

  } else if (day1 === 3) {
    if (randomNum(1,6)==1){
        document.getElementById('title1').innerText='오늘 수업도'
        document.getElementById('title2').innerText='화이팅 하세요!'
    }
    else if (randomNum(1,6)==2){
        document.getElementById('title1').innerText='오늘 하루도'
        document.getElementById('title2').innerText='화이팅 하세요!'
    }
    else if (randomNum(1,6)==3){
        document.getElementById('title1').innerText='오늘은 왠지'
        document.getElementById('title2').innerText='예감이 좋은데요?'
    }
    else if (randomNum(1,6)==4){
        document.getElementById('title1').innerText='끼니는 거르지 말고'
        document.getElementById('title2').innerText='꼭꼭 챙겨먹기!'
    }
    else if (randomNum(1,6)==5){
        document.getElementById('title1').innerText='한국인은 밥심!'
        document.getElementById('title2').innerText='오늘의 학식은?'
    }
    else{
        document.getElementById('title1').innerText='모든 일이'
        document.getElementById('title2').innerText='잘 풀릴거에요!'
    }
    document.getElementById('sun').style.borderBottom='none'
    document.getElementById('sun').style.color='#EC5F59'
    document.getElementById('sun').style.fontWeight='400'
    
    document.getElementById('mon').style.borderBottom='none'
    document.getElementById('mon').style.color='#000'
    document.getElementById('mon').style.fontWeight='400'

    document.getElementById('tue').style.borderBottom='none'
    document.getElementById('tue').style.color='#000'
    document.getElementById('tue').style.fontWeight='400'

    document.getElementById('wed').style.borderBottom='2px solid #133B98'
    document.getElementById('wed').style.color='#133B98'
    document.getElementById('wed').style.fontWeight='700'

    document.getElementById('thur').style.borderBottom='none'
    document.getElementById('thur').style.color='#000'
    document.getElementById('thur').style.fontWeight='400'

    document.getElementById('fri').style.borderBottom='none'
    document.getElementById('fri').style.color='#000'
    document.getElementById('fri').style.fontWeight='400'

    document.getElementById('sat').style.borderBottom='none'
    document.getElementById('sat').style.color='#0053ED'
    document.getElementById('sat').style.fontWeight='400'

    for (let element of document.getElementsByClassName("mon1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("tue1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("wed1")){
        element.style.display="block";
    }
    for (let element of document.getElementsByClassName("thur1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("fri1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("sat1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("sun1")){
        element.style.display="none";
    }

} else if (day1 === 4) {
    if (randomNum(1,6)==1){
        document.getElementById('title1').innerText='오늘 수업도'
        document.getElementById('title2').innerText='화이팅 하세요!'
    }
    else if (randomNum(1,6)==2){
        document.getElementById('title1').innerText='오늘 하루도'
        document.getElementById('title2').innerText='화이팅 하세요!'
    }
    else if (randomNum(1,6)==3){
        document.getElementById('title1').innerText='오늘은 왠지'
        document.getElementById('title2').innerText='예감이 좋은데요?'
    }
    else if (randomNum(1,6)==4){
        document.getElementById('title1').innerText='끼니는 거르지 말고'
        document.getElementById('title2').innerText='꼭꼭 챙겨먹기!'
    }
    else if (randomNum(1,6)==5){
        document.getElementById('title1').innerText='한국인은 밥심!'
        document.getElementById('title2').innerText='오늘의 학식은?'
    }
    else{
        document.getElementById('title1').innerText='모든 일이'
        document.getElementById('title2').innerText='잘 풀릴거에요!'
    }
    document.getElementById('sun').style.borderBottom='none'
    document.getElementById('sun').style.color='#EC5F59'
    document.getElementById('sun').style.fontWeight='400'
    
    document.getElementById('mon').style.borderBottom='none'
    document.getElementById('mon').style.color='#000'
    document.getElementById('mon').style.fontWeight='400'

    document.getElementById('tue').style.borderBottom='none'
    document.getElementById('tue').style.color='#000'
    document.getElementById('tue').style.fontWeight='400'

    document.getElementById('wed').style.borderBottom='none'
    document.getElementById('wed').style.color='#000'
    document.getElementById('wed').style.fontWeight='400'
    
    document.getElementById('thur').style.borderBottom='2px solid #133B98'
    document.getElementById('thur').style.color='#133B98'
    document.getElementById('thur').style.fontWeight='700'

    document.getElementById('fri').style.borderBottom='none'
    document.getElementById('fri').style.color='#000'
    document.getElementById('fri').style.fontWeight='400'

    document.getElementById('sat').style.borderBottom='none'
    document.getElementById('sat').style.color='#0053ED'
    document.getElementById('sat').style.fontWeight='400'

    for (let element of document.getElementsByClassName("mon1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("tue1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("wed1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("thur1")){
        element.style.display="block";
    }
    for (let element of document.getElementsByClassName("fri1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("sat1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("sun1")){
        element.style.display="none";
    }

} else if (day1 === 5) {
    if (randomNum(1,3)==1){
        document.getElementById('title1').innerText='주말이 코앞이에요!'
        document.getElementById('title2').innerText='조금만 더 힘내요!'
    }
    else if (randomNum(1,3)==2){
        document.getElementById('title1').innerText='이번주도'
        document.getElementById('title2').innerText='고생 많았어요!'
    }
    else{
        document.getElementById('title1').innerText='불타는 금요일!'
        document.getElementById('title2').innerText='오늘의 학식은?'
    }
    document.getElementById('sun').style.borderBottom='none'
    document.getElementById('sun').style.color='#EC5F59'
    document.getElementById('sun').style.fontWeight='400'
    
    document.getElementById('mon').style.borderBottom='none'
    document.getElementById('mon').style.color='#000'
    document.getElementById('mon').style.fontWeight='400'

    document.getElementById('tue').style.borderBottom='none'
    document.getElementById('tue').style.color='#000'
    document.getElementById('tue').style.fontWeight='400'

    document.getElementById('wed').style.borderBottom='none'
    document.getElementById('wed').style.color='#000'
    document.getElementById('wed').style.fontWeight='400'

    document.getElementById('thur').style.borderBottom='none'
    document.getElementById('thur').style.color='#000'
    document.getElementById('thur').style.fontWeight='400'

    document.getElementById('fri').style.borderBottom='2px solid #133B98'
    document.getElementById('fri').style.color='#133B98'
    document.getElementById('fri').style.fontWeight='700'

    document.getElementById('sat').style.borderBottom='none'
    document.getElementById('sat').style.color='#0053ED'
    document.getElementById('sat').style.fontWeight='400'

    for (let element of document.getElementsByClassName("mon1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("tue1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("wed1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("thur1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("fri1")){
        element.style.display="block";
    }
    for (let element of document.getElementsByClassName("sat1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("sun1")){
        element.style.display="none";
    }

} else if (day1 === 6) {
    document.getElementById('title1').innerText='이번주도'
    document.getElementById('title2').innerText='고생 많았어요!'

    document.getElementById('sun').style.borderBottom='none'
    document.getElementById('sun').style.color='#EC5F59'
    document.getElementById('sun').style.fontWeight='400'

    document.getElementById('mon').style.borderBottom='none'
    document.getElementById('mon').style.color='#000'
    document.getElementById('mon').style.fontWeight='400'

    document.getElementById('tue').style.borderBottom='none'
    document.getElementById('tue').style.color='#000'
    document.getElementById('tue').style.fontWeight='400'

    document.getElementById('wed').style.borderBottom='none'
    document.getElementById('wed').style.color='#000'
    document.getElementById('wed').style.fontWeight='400'

    document.getElementById('thur').style.borderBottom='none'
    document.getElementById('thur').style.color='#000'
    document.getElementById('thur').style.fontWeight='400'

    document.getElementById('fri').style.borderBottom='none'
    document.getElementById('fri').style.color='#000'
    document.getElementById('fri').style.fontWeight='400'
    
    document.getElementById('sat').style.borderBottom='2px solid #133B98'
    document.getElementById('sat').style.color='#133B98'
    document.getElementById('sat').style.fontWeight='700'

    for (let element of document.getElementsByClassName("mon1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("tue1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("wed1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("thur1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("fri1")){
        element.style.display="none";
    }
    for (let element of document.getElementsByClassName("sat1")){
        element.style.display="block";
    }
    for (let element of document.getElementsByClassName("sun1")){
        element.style.display="none";
    }
}
document.getElementById("date").innerText=year+'. '+(month+1)+'. '+day;

if (day1>0 && day1 <6 && hours>8 && hours <20){
    document.getElementById('open').style.visibility='visible'
    document.getElementById('close').style.visibility='hidden'
}
else if(day1==6 && hours>10 && hours <15){
    document.getElementById('open').style.visibility='visible'
    document.getElementById('close').style.visibility='hidden'
}
else{
    document.getElementById('close').style.visibility='visible'
    document.getElementById('open').style.visibility='hidden'
}
let options1 = {
    duration: 400,
    fill: "forwards"
};
let keyframesb = [
    {opacity: 1},
    {opacity: 0}
  ];
loading_page.animate(keyframesb, options1);
setTimeout(() => loading_page.style.display = 'none', 400);
}
function sub1(){
    window.open('sub1.html');
}
function sub2(){
  window.open('sub2.html');
}
function sub3(){
  window.open('sub3.html');
}
function sub4(){
  window.open('sub4.html');
}
function sub5(){
  window.open('sub5.html');
}
function sub6(){
  window.open('sub6.html');
}
function sub7(){
  window.open('sub7.html');
}
function sub8(){
  window.open('sub8.html');
}
function sub9(){
  window.open('sub9.html');
}
function sub10(){
  window.open('sub10.html');
}
function sub11(){
  window.open('sub11.html');
}
function sub12(){
  window.open('sub12.html');
}
function sub13(){
  window.open('sub13.html');
}
function sub14(){
  window.open('sub14.html');
}
function sub15(){
  window.open('sub15.html');
}
function sub16(){
  window.open('sub16.html');
}
function sub17(){
  window.open('sub17.html');
}
function sub18(){
  window.open('sub18.html');
}
function sub19(){
  window.open('sub19.html');
}
function sub20(){
  window.open('sub20.html');
}
function sub21(){
  window.open('sub21.html');
}
function sub22(){
    window.open('sub22.html');
}
var currentDate = new Date();

function updateDisplay() {

    // 현재 년도 표시
    var year = currentDate.getFullYear();
    // 현재 달 표시
    var month = currentDate.getMonth();
    // 현재 날짜 표시
    var day = currentDate.getDate();
    // 현재 요일 표시
    var day1 = currentDate.getDay();
  
    if (day1 === 0) {
        document.getElementById('sun').style.borderBottom='2px solid #133B98'
        document.getElementById('sun').style.color='#133B98'
        document.getElementById('sun').style.fontWeight='700'

        document.getElementById('mon').style.borderBottom='none'
        document.getElementById('mon').style.color='#000'
        document.getElementById('mon').style.fontWeight='400'

        document.getElementById('tue').style.borderBottom='none'
        document.getElementById('tue').style.color='#000'
        document.getElementById('tue').style.fontWeight='400'

        document.getElementById('wed').style.borderBottom='none'
        document.getElementById('wed').style.color='#000'
        document.getElementById('wed').style.fontWeight='400'

        document.getElementById('thur').style.borderBottom='none'
        document.getElementById('thur').style.color='#000'
        document.getElementById('thur').style.fontWeight='400'

        document.getElementById('fri').style.borderBottom='none'
        document.getElementById('fri').style.color='#000'
        document.getElementById('fri').style.fontWeight='400'

        document.getElementById('sat').style.borderBottom='none'
        document.getElementById('sat').style.color='#0053ED'
        document.getElementById('sat').style.fontWeight='400'

        for (let element of document.getElementsByClassName("mon1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("tue1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("wed1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("thur1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("fri1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("sat1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("sun1")){
            element.style.display="block";
        }

      } else if (day1 === 1) {        
        document.getElementById('sun').style.borderBottom='none'
        document.getElementById('sun').style.color='#EC5F59'
        document.getElementById('sun').style.fontWeight='400'

        document.getElementById('mon').style.borderBottom='2px solid #133B98'
        document.getElementById('mon').style.color='#133B98'
        document.getElementById('mon').style.fontWeight='700'

        document.getElementById('tue').style.borderBottom='none'
        document.getElementById('tue').style.color='#000'
        document.getElementById('tue').style.fontWeight='400'

        document.getElementById('wed').style.borderBottom='none'
        document.getElementById('wed').style.color='#000'
        document.getElementById('wed').style.fontWeight='400'

        document.getElementById('thur').style.borderBottom='none'
        document.getElementById('thur').style.color='#000'
        document.getElementById('thur').style.fontWeight='400'

        document.getElementById('fri').style.borderBottom='none'
        document.getElementById('fri').style.color='#000'
        document.getElementById('fri').style.fontWeight='400'
        
        document.getElementById('sat').style.borderBottom='none'
        document.getElementById('sat').style.color='#0053ED'
        document.getElementById('sat').style.fontWeight='400'

        for (let element of document.getElementsByClassName("mon1")){
            element.style.display="block";
        }
        for (let element of document.getElementsByClassName("tue1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("wed1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("thur1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("fri1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("sat1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("sun1")){
            element.style.display="none";
        }

      } else if (day1 === 2) {
        
        document.getElementById('sun').style.borderBottom='none'
        document.getElementById('sun').style.color='#EC5F59'
        document.getElementById('sun').style.fontWeight='400'

        document.getElementById('mon').style.borderBottom='none'
        document.getElementById('mon').style.color='#000'
        document.getElementById('mon').style.fontWeight='400'
        
        document.getElementById('tue').style.borderBottom='2px solid #133B98'
        document.getElementById('tue').style.color='#133B98'
        document.getElementById('tue').style.fontWeight='700'

        document.getElementById('wed').style.borderBottom='none'
        document.getElementById('wed').style.color='#000'
        document.getElementById('wed').style.fontWeight='400'

        document.getElementById('thur').style.borderBottom='none'
        document.getElementById('thur').style.color='#000'
        document.getElementById('thur').style.fontWeight='400'

        document.getElementById('fri').style.borderBottom='none'
        document.getElementById('fri').style.color='#000'
        document.getElementById('fri').style.fontWeight='400'

        document.getElementById('sat').style.borderBottom='none'
        document.getElementById('sat').style.color='#0053ED'
        document.getElementById('sat').style.fontWeight='400'

        for (let element of document.getElementsByClassName("mon1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("tue1")){
            element.style.display="block";
        }
        for (let element of document.getElementsByClassName("wed1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("thur1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("fri1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("sat1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("sun1")){
            element.style.display="none";
        }

      } else if (day1 === 3) {
        document.getElementById('sun').style.borderBottom='none'
        document.getElementById('sun').style.color='#EC5F59'
        document.getElementById('sun').style.fontWeight='400'
        
        document.getElementById('mon').style.borderBottom='none'
        document.getElementById('mon').style.color='#000'
        document.getElementById('mon').style.fontWeight='400'

        document.getElementById('tue').style.borderBottom='none'
        document.getElementById('tue').style.color='#000'
        document.getElementById('tue').style.fontWeight='400'

        document.getElementById('wed').style.borderBottom='2px solid #133B98'
        document.getElementById('wed').style.color='#133B98'
        document.getElementById('wed').style.fontWeight='700'

        document.getElementById('thur').style.borderBottom='none'
        document.getElementById('thur').style.color='#000'
        document.getElementById('thur').style.fontWeight='400'

        document.getElementById('fri').style.borderBottom='none'
        document.getElementById('fri').style.color='#000'
        document.getElementById('fri').style.fontWeight='400'

        document.getElementById('sat').style.borderBottom='none'
        document.getElementById('sat').style.color='#0053ED'
        document.getElementById('sat').style.fontWeight='400'

        for (let element of document.getElementsByClassName("mon1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("tue1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("wed1")){
            element.style.display="block";
        }
        for (let element of document.getElementsByClassName("thur1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("fri1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("sat1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("sun1")){
            element.style.display="none";
        }

    } else if (day1 === 4) {
        document.getElementById('sun').style.borderBottom='none'
        document.getElementById('sun').style.color='#EC5F59'
        document.getElementById('sun').style.fontWeight='400'
        
        document.getElementById('mon').style.borderBottom='none'
        document.getElementById('mon').style.color='#000'
        document.getElementById('mon').style.fontWeight='400'

        document.getElementById('tue').style.borderBottom='none'
        document.getElementById('tue').style.color='#000'
        document.getElementById('tue').style.fontWeight='400'

        document.getElementById('wed').style.borderBottom='none'
        document.getElementById('wed').style.color='#000'
        document.getElementById('wed').style.fontWeight='400'
        
        document.getElementById('thur').style.borderBottom='2px solid #133B98'
        document.getElementById('thur').style.color='#133B98'
        document.getElementById('thur').style.fontWeight='700'

        document.getElementById('fri').style.borderBottom='none'
        document.getElementById('fri').style.color='#000'
        document.getElementById('fri').style.fontWeight='400'

        document.getElementById('sat').style.borderBottom='none'
        document.getElementById('sat').style.color='#0053ED'
        document.getElementById('sat').style.fontWeight='400'

        for (let element of document.getElementsByClassName("mon1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("tue1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("wed1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("thur1")){
            element.style.display="block";
        }
        for (let element of document.getElementsByClassName("fri1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("sat1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("sun1")){
            element.style.display="none";
        }

    } else if (day1 === 5) {
        document.getElementById('sun').style.borderBottom='none'
        document.getElementById('sun').style.color='#EC5F59'
        document.getElementById('sun').style.fontWeight='400'
        
        document.getElementById('mon').style.borderBottom='none'
        document.getElementById('mon').style.color='#000'
        document.getElementById('mon').style.fontWeight='400'

        document.getElementById('tue').style.borderBottom='none'
        document.getElementById('tue').style.color='#000'
        document.getElementById('tue').style.fontWeight='400'

        document.getElementById('wed').style.borderBottom='none'
        document.getElementById('wed').style.color='#000'
        document.getElementById('wed').style.fontWeight='400'

        document.getElementById('thur').style.borderBottom='none'
        document.getElementById('thur').style.color='#000'
        document.getElementById('thur').style.fontWeight='400'

        document.getElementById('fri').style.borderBottom='2px solid #133B98'
        document.getElementById('fri').style.color='#133B98'
        document.getElementById('fri').style.fontWeight='700'

        document.getElementById('sat').style.borderBottom='none'
        document.getElementById('sat').style.color='#0053ED'
        document.getElementById('sat').style.fontWeight='400'

        for (let element of document.getElementsByClassName("mon1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("tue1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("wed1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("thur1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("fri1")){
            element.style.display="block";
        }
        for (let element of document.getElementsByClassName("sat1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("sun1")){
            element.style.display="none";
        }

    } else if (day1 === 6) {
        document.getElementById('sun').style.borderBottom='none'
        document.getElementById('sun').style.color='#EC5F59'
        document.getElementById('sun').style.fontWeight='400'

        document.getElementById('mon').style.borderBottom='none'
        document.getElementById('mon').style.color='#000'
        document.getElementById('mon').style.fontWeight='400'

        document.getElementById('tue').style.borderBottom='none'
        document.getElementById('tue').style.color='#000'
        document.getElementById('tue').style.fontWeight='400'

        document.getElementById('wed').style.borderBottom='none'
        document.getElementById('wed').style.color='#000'
        document.getElementById('wed').style.fontWeight='400'

        document.getElementById('thur').style.borderBottom='none'
        document.getElementById('thur').style.color='#000'
        document.getElementById('thur').style.fontWeight='400'

        document.getElementById('fri').style.borderBottom='none'
        document.getElementById('fri').style.color='#000'
        document.getElementById('fri').style.fontWeight='400'
        
        document.getElementById('sat').style.borderBottom='2px solid #133B98'
        document.getElementById('sat').style.color='#133B98'
        document.getElementById('sat').style.fontWeight='700'

        for (let element of document.getElementsByClassName("mon1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("tue1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("wed1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("thur1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("fri1")){
            element.style.display="none";
        }
        for (let element of document.getElementsByClassName("sat1")){
            element.style.display="block";
        }
        for (let element of document.getElementsByClassName("sun1")){
            element.style.display="none";
        }
    }
    document.getElementById('date').innerText = year+'. ' + (month + 1) + '. ' + day;
  }
  
  var tomorrow1 = document.getElementById('tomorrow');
  tomorrow1.addEventListener('click', function (event) {
    
    if (currentDate.getDay() === 6) { // 토요일인 경우
      currentDate.setDate(currentDate.getDate() - 6); // 6일을 빼서 이번 주 일요일로 이동
    } else {
      currentDate.setDate(currentDate.getDate() + 1); // 다음 날짜로 설정
    }
    updateDisplay();
  });
  
  
  var yesterday1 = document.getElementById('yesterday');
  yesterday1.addEventListener('click', function (event) {
    if (currentDate.getDay() === 0) { // 일요일인 경우
      currentDate.setDate(currentDate.getDate() + 6); // 6일을 더해서 이전 주 토요일로 이동
    } else {
      currentDate.setDate(currentDate.getDate() - 1); // 이전 날짜로 설정
    }
    updateDisplay();
  });

 var sunday_update = document.getElementById('sun');
 sunday_update.addEventListener('click',function (event){
    if (currentDate.getDay() === 1) { // 월요일인 경우
        currentDate.setDate(currentDate.getDate() -1);
      } 
    else if (currentDate.getDay() === 2) { //화요일인 경우
        currentDate.setDate(currentDate.getDate() - 2); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 3) { //수요일인 경우
        currentDate.setDate(currentDate.getDate() - 3); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 4) { //목요일인 경우
        currentDate.setDate(currentDate.getDate() - 4); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 5) { //금요일인 경우
        currentDate.setDate(currentDate.getDate() - 5); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 6) { //토요일인 경우
        currentDate.setDate(currentDate.getDate() - 6); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 0) { //일요일인 경우
        currentDate.setDate(currentDate.getDate()); // 이전 날짜로 설정
      }
      updateDisplay();
    })
 var monday_update = document.getElementById('mon');
 monday_update.addEventListener('click',function (event){
    if (currentDate.getDay() === 1) { // 월요일인 경우
        currentDate.setDate(currentDate.getDate());
      } 
    else if (currentDate.getDay() === 2) { //화요일인 경우
        currentDate.setDate(currentDate.getDate() - 1); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 3) { //수요일인 경우
        currentDate.setDate(currentDate.getDate() - 2); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 4) { //목요일인 경우
        currentDate.setDate(currentDate.getDate() - 3); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 5) { //금요일인 경우
        currentDate.setDate(currentDate.getDate() - 4); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 6) { //토요일인 경우
        currentDate.setDate(currentDate.getDate() - 5); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 0) { //일요일인 경우
        currentDate.setDate(currentDate.getDate() + 1); // 이전 날짜로 설정
      }
      updateDisplay();
    })
 var tuesday_update = document.getElementById('tue');
 tuesday_update.addEventListener('click',function (event){
    if (currentDate.getDay() === 1) { // 월요일인 경우
        currentDate.setDate(currentDate.getDate() + 1);
      } 
    else if (currentDate.getDay() === 2) { //화요일인 경우
        currentDate.setDate(currentDate.getDate()); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 3) { //수요일인 경우
        currentDate.setDate(currentDate.getDate()-1); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 4) { //목요일인 경우
        currentDate.setDate(currentDate.getDate() - 2); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 5) { //금요일인 경우
        currentDate.setDate(currentDate.getDate() - 3); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 6) { //토요일인 경우
        currentDate.setDate(currentDate.getDate() - 4); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 0) { //일요일인 경우
        currentDate.setDate(currentDate.getDate() + 2 ); // 이전 날짜로 설정
      }
      updateDisplay();
    })
    var wendnesday_update = document.getElementById('wed');
    wendnesday_update.addEventListener('click',function (event){
       if (currentDate.getDay() === 1) { // 월요일인 경우
           currentDate.setDate(currentDate.getDate() + 2);
         } 
       else if (currentDate.getDay() === 2) { //화요일인 경우
           currentDate.setDate(currentDate.getDate() + 1); // 이전 날짜로 설정
         }
         else if (currentDate.getDay() === 3) { //수요일인 경우
           currentDate.setDate(currentDate.getDate()); // 이전 날짜로 설정
         }
         else if (currentDate.getDay() === 4) { //목요일인 경우
           currentDate.setDate(currentDate.getDate() - 1); // 이전 날짜로 설정
         }
         else if (currentDate.getDay() === 5) { //금요일인 경우
           currentDate.setDate(currentDate.getDate() - 2); // 이전 날짜로 설정
         }
         else if (currentDate.getDay() === 6) { //토요일인 경우
           currentDate.setDate(currentDate.getDate() - 3); // 이전 날짜로 설정
         }
         else if (currentDate.getDay() === 0) { //일요일인 경우
           currentDate.setDate(currentDate.getDate() + 3); // 이전 날짜로 설정
         }
         updateDisplay();
       })
var thursday_update = document.getElementById('thur');
 thursday_update.addEventListener('click',function (event){
    if (currentDate.getDay() === 1) { // 월요일인 경우
        currentDate.setDate(currentDate.getDate() + 3);
      } 
    else if (currentDate.getDay() === 2) { //화요일인 경우
        currentDate.setDate(currentDate.getDate() + 2); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 3) { //수요일인 경우
        currentDate.setDate(currentDate.getDate() + 1); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 4) { //목요일인 경우
        currentDate.setDate(currentDate.getDate()); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 5) { //금요일인 경우
        currentDate.setDate(currentDate.getDate() - 1); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 6) { //토요일인 경우
        currentDate.setDate(currentDate.getDate() - 2); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 0) { //일요일인 경우
        currentDate.setDate(currentDate.getDate() + 4); // 이전 날짜로 설정
      }
      updateDisplay();
    })
var friday_update = document.getElementById('fri');
 friday_update.addEventListener('click',function (event){
    if (currentDate.getDay() === 1) { // 월요일인 경우
        currentDate.setDate(currentDate.getDate() + 4);
      } 
    else if (currentDate.getDay() === 2) { //화요일인 경우
        currentDate.setDate(currentDate.getDate() + 3); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 3) { //수요일인 경우
        currentDate.setDate(currentDate.getDate() + 2); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 4) { //목요일인 경우
        currentDate.setDate(currentDate.getDate() + 1); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 5) { //금요일인 경우
        currentDate.setDate(currentDate.getDate()); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 6) { //토요일인 경우
        currentDate.setDate(currentDate.getDate() - 1); // 이전 날짜로 설정
      }
      else if (currentDate.getDay() === 0) { //일요일인 경우
        currentDate.setDate(currentDate.getDate() + 5); // 이전 날짜로 설정
      }
      updateDisplay();
    }) 
    var satday_update = document.getElementById('sat');
    satday_update.addEventListener('click',function (event){
       if (currentDate.getDay() === 1) { // 월요일인 경우
           currentDate.setDate(currentDate.getDate() + 5);
         } 
       else if (currentDate.getDay() === 2) { //화요일인 경우
           currentDate.setDate(currentDate.getDate() + 4); // 이전 날짜로 설정
         }
         else if (currentDate.getDay() === 3) { //수요일인 경우
           currentDate.setDate(currentDate.getDate() + 3); // 이전 날짜로 설정
         }
         else if (currentDate.getDay() === 4) { //목요일인 경우
           currentDate.setDate(currentDate.getDate() + 2); // 이전 날짜로 설정
         }
         else if (currentDate.getDay() === 5) { //금요일인 경우
           currentDate.setDate(currentDate.getDate() + 1); // 이전 날짜로 설정
         }
         else if (currentDate.getDay() === 6) { //토요일인 경우
           currentDate.setDate(currentDate.getDate()); // 이전 날짜로 설정
         }
         else if (currentDate.getDay() === 0) { //일요일인 경우
           currentDate.setDate(currentDate.getDate() + 6); // 이전 날짜로 설정
         }
         updateDisplay();
       })
       var sunday_update = document.getElementById('sun');
       sunday_update.addEventListener('click',function (event){
          if (currentDate.getDay() === 1) { // 월요일인 경우
              currentDate.setDate(currentDate.getDate() -1);
            } 
          else if (currentDate.getDay() === 2) { //화요일인 경우
              currentDate.setDate(currentDate.getDate() - 2); // 이전 날짜로 설정
            }
            else if (currentDate.getDay() === 3) { //수요일인 경우
              currentDate.setDate(currentDate.getDate() - 3); // 이전 날짜로 설정
            }
            else if (currentDate.getDay() === 4) { //목요일인 경우
              currentDate.setDate(currentDate.getDate() - 4); // 이전 날짜로 설정
            }
            else if (currentDate.getDay() === 5) { //금요일인 경우
              currentDate.setDate(currentDate.getDate() - 5); // 이전 날짜로 설정
            }
            else if (currentDate.getDay() === 6) { //토요일인 경우
              currentDate.setDate(currentDate.getDate() - 6); // 이전 날짜로 설정
            }
            else if (currentDate.getDay() === 6) { //일요일인 경우
              currentDate.setDate(currentDate.getDate()); // 이전 날짜로 설정
            }
            updateDisplay();
          })
          var sunday_update = document.getElementById('sun');
          sunday_update.addEventListener('click',function (event){
             if (currentDate.getDay() === 1) { // 월요일인 경우
                 currentDate.setDate(currentDate.getDate() -1);
               } 
             else if (currentDate.getDay() === 2) { //화요일인 경우
                 currentDate.setDate(currentDate.getDate() - 2); // 이전 날짜로 설정
               }
               else if (currentDate.getDay() === 3) { //수요일인 경우
                 currentDate.setDate(currentDate.getDate() - 3); // 이전 날짜로 설정
               }
               else if (currentDate.getDay() === 4) { //목요일인 경우
                 currentDate.setDate(currentDate.getDate() - 4); // 이전 날짜로 설정
               }
               else if (currentDate.getDay() === 5) { //금요일인 경우
                 currentDate.setDate(currentDate.getDate() - 5); // 이전 날짜로 설정
               }
               else if (currentDate.getDay() === 6) { //토요일인 경우
                 currentDate.setDate(currentDate.getDate() - 6); // 이전 날짜로 설정
               }
               else if (currentDate.getDay() === 6) { //일요일인 경우
                 currentDate.setDate(currentDate.getDate()); // 이전 날짜로 설정
               }
               updateDisplay();
             })
             var sunday_update = document.getElementById('sun');
             sunday_update.addEventListener('click',function (event){
                if (currentDate.getDay() === 1) { // 월요일인 경우
                    currentDate.setDate(currentDate.getDate() -1);
                  } 
                else if (currentDate.getDay() === 2) { //화요일인 경우
                    currentDate.setDate(currentDate.getDate() - 2); // 이전 날짜로 설정
                  }
                  else if (currentDate.getDay() === 3) { //수요일인 경우
                    currentDate.setDate(currentDate.getDate() - 3); // 이전 날짜로 설정
                  }
                  else if (currentDate.getDay() === 4) { //목요일인 경우
                    currentDate.setDate(currentDate.getDate() - 4); // 이전 날짜로 설정
                  }
                  else if (currentDate.getDay() === 5) { //금요일인 경우
                    currentDate.setDate(currentDate.getDate() - 5); // 이전 날짜로 설정
                  }
                  else if (currentDate.getDay() === 6) { //토요일인 경우
                    currentDate.setDate(currentDate.getDate() - 6); // 이전 날짜로 설정
                  }
                  else if (currentDate.getDay() === 6) { //일요일인 경우
                    currentDate.setDate(currentDate.getDate()); // 이전 날짜로 설정
                  }
                  updateDisplay();
                })    
var reload=document.getElementById('reload');
reload.addEventListener('click',function(event){
  location.reload()
})
var learnus=document.getElementById('learnus');
learnus.addEventListener('click',function(event){
    window.open('https://ys.learnus.org/login/method/sso.php')
})
var sports=document.getElementById('sports');
sports.addEventListener('click',function(event){
    window.open('https://uni.yonsei.ac.kr/fmcs/1')
})
  
var china = document.getElementById('china');
    china.addEventListener('click', function morning0(event){
        china_func()
    }
    );
var noon1 = document.getElementById('korean');
    noon1.addEventListener('click', function noon0(event){
        korean_func()
    });

function china_func(){
    document.getElementById('korean').style.color='#BBBBBB'
    document.getElementById('korean').style.backgroundColor='#fff'
    document.getElementById('korean').style.fontFamily='Pretendard-regular'
    document.getElementById('korean').style.border='0.3px solid var(--bbbbbb, rgba(187, 187, 187, 0.73))'

    document.getElementById('china').style.color='#fff'
    document.getElementById('china').style.fontFamily='Pretendard-sb'
    document.getElementById('china').style.backgroundColor='#133B98'
    document.getElementById('china').style.border='0.3px solid var(--bbbbbb, rgba(187, 187, 187, 0.73))'

    document.getElementById('korea').style.display='none'
    document.getElementById('chinese').style.display='block'
}

function korean_func(){
    document.getElementById('china').style.color='#BBBBBB'
    document.getElementById('china').style.backgroundColor='#fff'
    document.getElementById('china').style.fontFamily='Pretendard-regular'
    document.getElementById('china').style.border='0.3px solid var(--bbbbbb, rgba(187, 187, 187, 0.73))'

    document.getElementById('korean').style.color='#fff'
    document.getElementById('korean').style.backgroundColor='#133B98'
    document.getElementById('korean').style.border='0.3px solid var(--bbbbbb, rgba(187, 187, 187, 0.73))'
    document.getElementById('korean').style.fontFamily='Pretendard-sb'


    document.getElementById('korea').style.display='block'
    document.getElementById('chinese').style.display='none'
}

//list open animation
let keyframes = [
    {opacity: 0},
    {opacity: 0.5}
  ];
let keyframes1 = [
    {opacity: 0},
    {opacity: 1}
  ];
let options1 = {
        duration: 300,
        fill: "forwards"
  };
var list1 =document.getElementById('menu');
list1.addEventListener('click',function(event){
    document.getElementById('list').style.display='block';
    document.getElementById('list1').style.display='block';

    document.getElementById('list').animate(keyframes, options1);
    document.getElementById('list1').animate(keyframes1, options1);

    setTimeout(()=>{},300);
})

//list close animation
let keyframes0 = [
    {opacity: 0.5},
    {opacity: 0}
  ];
let keyframes2 = [
    {opacity: 1},
    {opacity: 0}
  ];

var list2 =document.getElementById('list');
list2.addEventListener('click',function(event){
    document.getElementById('list').animate(keyframes0, options1);
    document.getElementById('list1').animate(keyframes2, options1);
    setTimeout(() => document.getElementById('list').style.display='none', 300);
    setTimeout(() => document.getElementById('list1').style.display='none', 300);
})


const loading_page = document.getElementById("load");
window.onload = function main(){
    menu_load()
    koreanfunc()
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
function main_pageload(){
      
  koreanfunc()
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
}
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
function tomorrow1() {
    if (currentDate.getDay() === 6) { // 토요일인 경우
      currentDate.setDate(currentDate.getDate() - 6); // 6일을 빼서 이번 주 일요일로 이동
    } else {
      currentDate.setDate(currentDate.getDate() + 1); // 다음 날짜로 설정
    }
    updateDisplay();
  };
  function yesterday1() {
    if (currentDate.getDay() === 0) { // 일요일인 경우
      currentDate.setDate(currentDate.getDate() + 6); // 6일을 더해서 이전 주 토요일로 이동
    } else {
      currentDate.setDate(currentDate.getDate() - 1); // 이전 날짜로 설정
    }
    updateDisplay();
  };
function sundayupdate(){
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
    };
function mondayupdate(){
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
    }
function tuesdayupdate (){
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
    }
function wendnesdayupdate(){
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
       }
function thursdayupdate(){
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
    }
function fridayupdate(){
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
    }
function saturdayupdate(){
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
       }
function reload1(){
  window.location.reload()
}
function learnus(){
    window.open('https://ys.learnus.org/login/method/sso.php')
}
function yonsei(){
    window.open('https://www.yonsei.ac.kr/wj/')
}
function portal(){
    window.open('https://portal.yonsei.ac.kr/ui/index.html')
}
function mail(){
    window.open('https://zm901.mailplug.com/member/login?host_domain=yonsei.ac.kr&')
}
function sports(){
    window.open('https://uni.yonsei.ac.kr/fmcs/1')
}
function house(){
    window.open('https://wjdorm.yonsei.ac.kr/wjdorm/index.do')
}
function facility(){
  window.open('https://space.yonsei.ac.kr/')
}
function bus(){
  window.open('https://ysbusticket.yonsei.ac.kr/')
}
  
function chinafunc(){
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

function koreanfunc(){
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
//list close animation
let keyframes0 = [
    {opacity: 0.5},
    {opacity: 0}
  ];
let keyframes2 = [
    {opacity: 1},
    {opacity: 0}
  ];

  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('nav li div');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        links.forEach(function(otherLink) {
          otherLink.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  });
  function plaza() {
    var div = document.getElementById('plaza-list');
    var main_div = document.getElementById('main-plaza');
    if (div.style.height === '460px') {
        document.getElementById('down-arrow-plaza').style.transform='rotate(360deg)'; 
        div.style.height = '0px';
        main_div.style.height = '140px'
    } else { // 확장되지 않은 상태라면 확장하고 요소 보임
      div.style.height = '460px';
      main_div.style.height = '590px'
      document.getElementById('down-arrow-plaza').style.transform='rotate(180deg)'; 
    }
  }
  function union() {
    var div = document.getElementById('union-list');
    var main_div = document.getElementById('main-union');
    if (div.style.height === '300px') {
        document.getElementById('down-arrow-union').style.transform='rotate(360deg)'; 
        div.style.height = '0px';
        main_div.style.height = '140px'
    } else { // 확장되지 않은 상태라면 확장하고 요소 보임
      div.style.height = '300px';
      main_div.style.height = '410px'
      document.getElementById('down-arrow-union').style.transform='rotate(180deg)'; 
    }
  }
  function cy() {
    var div = document.getElementById('cy-list');
    var main_div = document.getElementById('main-cy');
    if (div.style.height === '170px') {
        document.getElementById('down-arrow-cy').style.transform='rotate(360deg)'; 
        div.style.height = '0px';
        main_div.style.height = '140px'
    } else { // 확장되지 않은 상태라면 확장하고 요소 보임
      div.style.height = '170px';
      main_div.style.height = '290px'
      document.getElementById('down-arrow-cy').style.transform='rotate(180deg)'; 
    }
  }
  function jung() {
    var div = document.getElementById('jung-list');
    var main_div = document.getElementById('main-jung');
    if (div.style.height === '170px') {
        document.getElementById('down-arrow-jung').style.transform='rotate(360deg)'; 
        div.style.height = '0px';
        main_div.style.height = '140px'
    } else { // 확장되지 않은 상태라면 확장하고 요소 보임
      div.style.height = '170px';
      main_div.style.height = '290px'
      document.getElementById('down-arrow-jung').style.transform='rotate(180deg)'; 
    }
  }
  function baek() {
    var div = document.getElementById('baek-list');
    var main_div = document.getElementById('main-baek');
    if (div.style.height === '200px') {
        document.getElementById('down-arrow-baek').style.transform='rotate(360deg)'; 
        div.style.height = '0px';
        main_div.style.height = '200px'
    } else { // 확장되지 않은 상태라면 확장하고 요소 보임
      div.style.height = '200px';
      main_div.style.height = '400px'
      document.getElementById('down-arrow-baek').style.transform='rotate(180deg)'; 
    }
  }
function changeContent(clickedElement) {
  var content = document.getElementById("content");
  var newText;
  switch (clickedElement.innerText) {
    case "홈":
     newText = `
     <header id="header" style=" height:300px;border-radius: 0px 0px 20px 20px; background-color:#21252C;" >
            <p id="title1">오늘 수업도</p>
            <p id="title2">화이팅하세요!</p>
            <div style="position:absolute; top:210px;width: 90%; background-color:white; left:50%; transform:translate(-50%,0); height:65px; border-radius:15px; display:flex; text-decoration:none; align-items:center;">
                <img style="position:relative; margin-left:10px; top:-1px; width: 20px; margin-right:5px;" src="speaker.png">
                <span style="color:#21252C; font-size:14px; font-family:'pretendard-medium';">식자재 수급상황에 따라 메뉴가 변경될 수 있어요.</span>
            </div>
            <img id="reload" onclick="reload1()" src="reload.png">
        </header> 
                    <div id="main">
                    <div id="main-title">
                        <p id="main1">카페테리아 현</p>
                        <img id="open" src="open1.png">
                        <img id="close" src="close1.png">
                        <img id="info-main" onclick="sub15()" src="pointer.png">
                    </div>
                    <div id="main-date">
                        <div id="main-date1">
                            <img src="yesterday.png" onclick="yesterday1()" id="yesterday">
                            <img src="tomorrow.png" onclick="tomorrow1()" id="tomorrow">
                            <p id="date">0000.00.00</p>
                        </div>
                        <div id="day">
                            <p onclick="sundayupdate()"id="sun">일</p>
                            <p onclick="mondayupdate()" id="mon">월</p>
                            <p onclick="tuesdayupdate()" id="tue">화</p>
                            <p onclick="wednesdayupdate()" id="wed">수</p>
                            <p onclick="thursdayupdate()" id="thur">목</p>
                            <p onclick="fridayupdate()"id="fri">금</p>
                            <p onclick="saturdayupdate()" id="sat">토</p>
                        </div>
                    </div>
                    <div id="content1">
                        <div id="select">
                            <div onclick="koreanfunc()" id="korean">
                                <p>오늘의 특식</p>
                            </div>
                            <div onclick="chinafunc()" id="china">
                                <p>조식백반</p>
                            </div>
                        </div>
                        <div id="korea">
                            <!--월요일-->
                            <div class="mon1">
                                <div id="baek-mon">
                                    <p id="menu1-mon">중 식</p>
                                    <p id="k-menu2-mon">미역국</p>
                                    <p id="k-menu3-mon">1,000원</p>
                                </div>
                                <div id="a-menu-mon">
                                    <p id="menu1-mon">A메뉴</p>
                                    <p id="a-menu2-mon">얼큰소고기콩나물해장국</p>
                                    <p id="a-menu3-mon">5,000원</p>
                                </div>
                                <div id="b-menu-mon">
                                    <p id="menu1-mon">B메뉴</p>
                                    <p id="b-menu2-mon">닭갈비덮밥</p>
                                    <p id="b-menu3-mon">6,000원</p>
                                </div>
                                <div id="c-menu-mon">
                                    <p id="menu1-mon">C메뉴</p>
                                    <p id="c-menu2-mon">잔치국수</p>
                                    <p id="c-menu3-mon">5,000원</p>
                                </div>
                                <div id="d-menu-mon">
                                    <p id="menu1-mon">D메뉴</p>
                                    <p id="d-menu2-mon">일식카레,소시지&새우튀김</p>
                                    <p id="d-menu3-mon">7,000원</p>
                                </div>
                                <div id="e-menu-mon">
                                    <p id="menu1-mon">E메뉴</p>
                                    <p id="e-menu2-mon">일식카레,소시지&새우튀김</p>
                                    <p id="e-menu3-mon">7,000원</p>
                                </div>
                                <div id="f-menu-mon">
                                    <p id="menu1-mon">F메뉴</p>
                                    <p id="f-menu2-mon">일식카레,소시지&새우튀김</p>
                                    <p id="f-menu3-mon">7,000원</p>
                                </div>
                            </div>
                            <!--화요일-->
                            <div class="tue1">
                                <div id="baek-tue">
                                    <p id="menu1-tue">중 식</p>
                                    <p id="k-menu2-tue">미역국</p>
                                    <p id="k-menu3-tue">1,000원</p>
                                </div>
                                <div id="a-menu-tue">
                                    <p id="menu1-tue">A메뉴</p>
                                    <p id="a-menu2-tue">얼큰소고기콩나물해장국</p>
                                    <p id="a-menu3-tue">5,000원</p>
                                </div>
                                <div id="b-menu-tue">
                                    <p id="menu1-tue">B메뉴</p>
                                    <p id="b-menu2-tue">닭갈비덮밥</p>
                                    <p id="b-menu3-tue">6,000원</p>
                                </div>
                                <div id="c-menu-tue">
                                    <p id="menu1-tue">C메뉴</p>
                                    <p id="c-menu2-tue">잔치국수</p>
                                    <p id="c-menu3-tue">5,000원</p>
                                </div>
                                <div id="d-menu-tue">
                                    <p id="menu1-tue">D메뉴</p>
                                    <p id="d-menu2-tue">일식카레,소시지&새우튀김</p>
                                    <p id="d-menu3-tue">7,000원</p>
                                </div>
                                <div id="e-menu-tue">
                                    <p id="menu1-tue">E메뉴</p>
                                    <p id="e-menu2-tue">일식카레,소시지&새우튀김</p>
                                    <p id="e-menu3-tue">7,000원</p>
                                </div>
                                <div id="f-menu-tue">
                                    <p id="menu1-tue">F메뉴</p>
                                    <p id="f-menu2-tue">일식카레,소시지&새우튀김</p>
                                    <p id="f-menu3-tue">7,000원</p>
                                </div>
                            </div>

                            <div class="wed1">
                                <div id="baek-wed">
                                    <p id="menu1-wed">중 식</p>
                                    <p id="k-menu2-wed">미역국</p>
                                    <p id="k-menu3-wed">1,000원</p>
                                </div>
                                <div id="a-menu-wed">
                                    <p id="menu1-wed">A메뉴</p>
                                    <p id="a-menu2-wed">얼큰소고기콩나물해장국</p>
                                    <p id="a-menu3-wed">5,000원</p>
                                </div>
                                <div id="b-menu-wed">
                                    <p id="menu1-wed">B메뉴</p>
                                    <p id="b-menu2-wed">닭갈비덮밥</p>
                                    <p id="b-menu3-wed">6,000원</p>
                                </div>
                                <div id="c-menu-wed">
                                    <p id="menu1-wed">C메뉴</p>
                                    <p id="c-menu2-wed">잔치국수</p>
                                    <p id="c-menu3-wed">5,000원</p>
                                </div>
                                <div id="d-menu-wed">
                                    <p id="menu1-wed">D메뉴</p>
                                    <p id="d-menu2-wed">일식카레,소시지&새우튀김</p>
                                    <p id="d-menu3-wed">7,000원</p>
                                </div>
                                <div id="e-menu-wed">
                                    <p id="menu1-wed">E메뉴</p>
                                    <p id="e-menu2-wed">일식카레,소시지&새우튀김</p>
                                    <p id="e-menu3-wed">7,000원</p>
                                </div>
                                <div id="f-menu-wed">
                                    <p id="menu1-wed">F메뉴</p>
                                    <p id="f-menu2-wed">일식카레,소시지&새우튀김</p>
                                    <p id="f-menu3-wed">7,000원</p>
                                </div>
                            </div>

                            <div class="thur1">
                                <div id="baek-thur">
                                    <p id="menu1-thur">중 식</p>
                                    <p id="k-menu2-thur">미역국</p>
                                    <p id="k-menu3-thur">1,000원</p>
                                </div>
                                <div id="a-menu-thur">
                                    <p id="menu1-thur">A메뉴</p>
                                    <p id="a-menu2-thur">얼큰소고기콩나물해장국</p>
                                    <p id="a-menu3-thur">5,000원</p>
                                </div>
                                <div id="b-menu-thur">
                                    <p id="menu1-thur">B메뉴</p>
                                    <p id="b-menu2-thur">닭갈비덮밥</p>
                                    <p id="b-menu3-thur">6,000원</p>
                                </div>
                                <div id="c-menu-thur">
                                    <p id="menu1-thur">C메뉴</p>
                                    <p id="c-menu2-thur">잔치국수</p>
                                    <p id="c-menu3-thur">5,000원</p>
                                </div>
                                <div id="d-menu-thur">
                                    <p id="menu1-thur">D메뉴</p>
                                    <p id="d-menu2-thur">일식카레,소시지&새우튀김</p>
                                    <p id="d-menu3-thur">7,000원</p>
                                </div>
                                <div id="e-menu-thur">
                                    <p id="menu1-thur">E메뉴</p>
                                    <p id="e-menu2-thur">일식카레,소시지&새우튀김</p>
                                    <p id="e-menu3-thur">7,000원</p>
                                </div>
                                <div id="f-menu-thur">
                                    <p id="menu1-thur">F메뉴</p>
                                    <p id="f-menu2-thur">일식카레,소시지&새우튀김</p>
                                    <p id="f-menu3-thur">7,000원</p>
                                </div>
                            </div>

                            <div class="fri1">
                                <div id="baek-fri">
                                    <p id="menu1-fri">중 식</p>
                                    <p id="k-menu2-fri">미역국</p>
                                    <p id="k-menu3-fri">1,000원</p>
                                </div>
                                <div id="a-menu-fri">
                                    <p id="menu1-fri">A메뉴</p>
                                    <p id="a-menu2-fri">얼큰소고기콩나물해장국</p>
                                    <p id="a-menu3-fri">5,000원</p>
                                </div>
                                <div id="b-menu-fri">
                                    <p id="menu1-fri">B메뉴</p>
                                    <p id="b-menu2-fri">닭갈비덮밥</p>
                                    <p id="b-menu3-fri">6,000원</p>
                                </div>
                                <div id="c-menu-fri">
                                    <p id="menu1-fri">C메뉴</p>
                                    <p id="c-menu2-fri">잔치국수</p>
                                    <p id="c-menu3-fri">5,000원</p>
                                </div>
                                <div id="d-menu-fri">
                                    <p id="menu1-fri">D메뉴</p>
                                    <p id="d-menu2-fri">일식카레,소시지&새우튀김</p>
                                    <p id="d-menu3-fri">7,000원</p>
                                </div>
                                <div id="e-menu-fri">
                                    <p id="menu1-fri">E메뉴</p>
                                    <p id="e-menu2-fri">일식카레,소시지&새우튀김</p>
                                    <p id="e-menu3-fri">7,000원</p>
                                </div>
                                <div id="f-menu-fri">
                                    <p id="menu1-fri">F메뉴</p>
                                    <p id="f-menu2-fri">일식카레,소시지&새우튀김</p>
                                    <p id="f-menu3-fri">7,000원</p>
                                </div>
                            </div>

                            <div class="sat1">
                                <img src="sat-img.png" id="sat-img">
                                <p id="sat-ment"><span style="color: #133B98; font-family: 'Pretendard-sb';font-weight: bold;">토요일</span>은 유동적인 메뉴 변경으로 미리 파악하기 어려워요</p>
                            </div>
                            <div class="sun1">
                                <img src="sun-img.png" id="sun-img">
                                <p><span style="color: #EC5F59; font-family: 'Pretendard-sb'; font-weight: bold;">일요일</span>은 운영하지 않아요</p>
                            </div>
                        </div>
                        <div id="chinese">
                            <div class="mon1">
                                <div id="mor-mon">
                                    <p id="mor-mon1">오늘의 메뉴</p>
                                    <p id="mor-mon-line"></p>
                                    <p id="mor-mon-menu1">미역국</p>
                                    <p id="mor-mon-menu2">동구랑</p>
                                    <p id="mor-mon-menu3">갈비</p>
                                </div>
                                <div id="mor-runtime">
                                    <p id="mor-runtime1">운영시간</p>
                                    <p id="mor-runtime-line"></p>
                                    <p id="mor-runtime-time"></p>
                                </div>
                                <div id="mor-optime">
                                    <p id="mor-optime1">운영일정</p>
                                    <p id="mor-optime-line"></p>
                                    <p id="mor-optime-time1"></p>
                                    <p id="mor-optime-time2"></p>
                                </div>
                            </div>
                            <div class="tue1">
                                <div id="mor-mon">
                                    <p id="mor-mon1">오늘의 메뉴</p>
                                    <p id="mor-mon-line"></p>
                                    <p id="mor-tue-menu1">미역국</p>
                                    <p id="mor-tue-menu2">동구랑</p>
                                    <p id="mor-tue-menu3">갈비</p>
                                </div>
                                <div id="mor-runtime">
                                    <p id="mor-runtime1">운영시간</p>
                                    <p id="mor-runtime-line"></p>
                                    <p id="mor-runtime-time"></p>
                                </div>
                                <div id="mor-optime">
                                    <p id="mor-optime1">운영일정</p>
                                    <p id="mor-optime-line"></p>
                                    <p id="mor-optime-time1"></p>
                                    <p id="mor-optime-time2"></p>
                                </div>
                            </div>
                            <div class="wed1">
                                <div id="mor-mon">
                                    <p id="mor-mon1">오늘의 메뉴</p>
                                    <p id="mor-mon-line"></p>
                                    <p id="mor-wed-menu1">미역국</p>
                                    <p id="mor-wed-menu2">동구랑</p>
                                    <p id="mor-wed-menu3">갈비</p>
                                </div>
                                <div id="mor-runtime">
                                    <p id="mor-runtime1">운영시간</p>
                                    <p id="mor-runtime-line"></p>
                                    <p id="mor-runtime-time"></p>
                                </div>
                                <div id="mor-optime">
                                    <p id="mor-optime1">운영일정</p>
                                    <p id="mor-optime-line"></p>
                                    <p id="mor-optime-time1"></p>
                                    <p id="mor-optime-time2"></p>
                                </div>
                            </div>
                            <div class="thur1">
                                <div id="mor-mon">
                                    <p id="mor-mon1">오늘의 메뉴</p>
                                    <p id="mor-mon-line"></p>
                                    <p id="mor-thur-menu1">미역국</p>
                                    <p id="mor-thur-menu2">동구랑</p>
                                    <p id="mor-thur-menu3">갈비</p>
                                </div>
                                <div id="mor-runtime">
                                    <p id="mor-runtime1">운영시간</p>
                                    <p id="mor-runtime-line"></p>
                                    <p id="mor-runtime-time"></p>
                                </div>
                                <div id="mor-optime">
                                    <p id="mor-optime1">운영일정</p>
                                    <p id="mor-optime-line"></p>
                                    <p id="mor-optime-time1"></p>
                                    <p id="mor-optime-time2"></p>
                                </div>
                            </div>
                            <div class="fri1">
                                <div id="mor-mon">
                                    <p id="mor-mon1">오늘의 메뉴</p>
                                    <p id="mor-mon-line"></p>
                                    <p id="mor-fri-menu1">미역국</p>
                                    <p id="mor-fri-menu2">동구랑</p>
                                    <p id="mor-fri-menu3">갈비</p>
                                </div>
                                <div id="mor-runtime">
                                    <p id="mor-runtime1">운영시간</p>
                                    <p id="mor-runtime-line"></p>
                                    <p id="mor-runtime-time"></p>
                                </div>
                                <div id="mor-optime">
                                    <p id="mor-optime1">운영일정</p>
                                    <p id="mor-optime-line"></p>
                                    <p id="mor-optime-time1"></p>
                                    <p id="mor-optime-time2"></p>
                                </div>
                            </div>
                            <div class="sat1">
                                <img src="sun-img.png" id="sun-img">
                                <p><span style="color: #EC5F59; font-family: 'Pretendard-sb'; font-weight: bold;">토요일</span>은 운영하지 않아요</p>

                            </div>
                            <div class="sun1">
                                <img src="sun-img.png" id="sun-img">
                                <p><span style="color: #EC5F59; font-family: 'Pretendard-sb'; font-weight: bold;">일요일</span>은 운영하지 않아요</p>
                            </div>    
                        </div>
                    </div>
      `;
      setTimeout(() => main_pageload(),0);
      break;
    case "편의시설":
      newText = `
      <div id="facility-header" style=" letter-spacing:-1px;height:300px;border-radius: 0px 0px 20px 20px; background-color:#21252C;" >
        <p id="facility-title">편의시설</p>
        <div style="position:absolute; top:210px;width: 90%; background-color:white; left:50%; transform:translate(-50%,0); height:65px; border-radius:15px; display:flex; text-decoration:none; align-items:center;">
            <img style="position:relative; margin-left:10px; top:-1px; width: 20px; margin-right:5px;" src="speaker.png">
            <span style="color:#21252C; font-family:'pretendard-medium';">최종 업데이트 - 2024.3.4 기준</span>
        </div>
    </div>        
    <div id="main-plaza">
        <div id="plaza-img">
                <div id="plaza-list" style="display: flex;">
                    <div style="position:absolute; font-size:14px; margin:5px; width:40%; left:30px; font-family:  'pretendard-light'; top:60px;">
                        <div style="font-family: 'pretendard-sb'; height:30px; color:#333D4B; border-bottom:1px solid #E5E5E5; ">
                            카페/디저트
                        </div>
                        <p onclick="sub1()">카페 딕셔너리</p>
                        <p onclick="sub3()">카페 GEE</p>
                        <p onclick="sub2()">카페 샐러데이즈</p>
                        <p onclick="sub5()">호야토스트</p>
                        <p onclick="sub4()">뚜레쥬르</p>
                    </div>
                    <div style="position:absolute; font-size:14px; margin:5px; width:40%; right:15px; font-family:  'pretendard-light'; top:60px;">
                        <div style="font-family:'pretendard-sb'; height:30px; color:#333D4B; border-bottom:1px solid #E5E5E5; ">
                            일반음식점
                        </div>
                        <p onclick="sub7()">BNC</p>
                    </div>
                    <div style="position:absolute; font-size:14px; margin:5px; width:40%; right:15px; font-family:  'pretendard-light'; top:150px;">
                        <div style="font-family:'pretendard-sb'; height:30px; color:#333D4B; border-bottom:1px solid #E5E5E5; ">
                            판매점
                        </div>
                        <p onclick="sub11()">누리샘</p>
                        <p onclick="sub10()">구내서점</p>
                    </div>
                    <div style="position:absolute; font-size:14px; margin:5px; width:80%; left:30px; display:flex; font-family:  'pretendard-light'; top:270px;">
                        <div style="font-family:'pretendard-sb'; width:100%; height:30px; display:block; color:#333D4B; border-bottom:1px solid #E5E5E5; ">
                            편의시설
                        </div>
                        <p onclick="sub12()" style="position:absolute;width:50%; top:30px;left:0px;">POD센터</p>
                        <p onclick="sub9()" style="position:absolute;width:50%; top:30px;right:0px;">유니룩스(빨래방)</p>
                        <p onclick="sub8()" style="position:absolute;width:50%; top:70px;left:0px;">구내안경원</p>
                        <p onclick="sub14()" style="position:absolute;width:50%; top:110px; left:0px;">우편취급국</p>
                        <p onclick="sub13()" style="position:absolute;width:50%; top:70px; right:0px;">GS25</p>
                    </div>
                </div>
                <img src="plaza-img.png">
                <p style="position: absolute; color:white; bottom:0px; left:25px; font-size:23px; font-family:pretendard-medium;">연세플라자</p>
                <button id="down-arrow-plaza" style="position:absolute; bottom:15px; right:15px; width:30px; height:30px; border-radius:15px; background-color: none; border:none;" onclick="plaza()"><img style="position:absolute; left:6.5px; top:10px; width: 17px; height:11px;"  src="down-arrow.png"></button>
            </div>
    </div>
    <div id="main-union">
        <div id="union-img" >
            <div id="union-list" style="display: flex;">
                <div style="position:absolute; font-size:14px; margin:5px; width:40%; left:30px; font-family:  'pretendard-light'; top:60px;">
                    <div style="font-family: 'pretendard-sb'; height:30px; color:#333D4B; border-bottom:1px solid #E5E5E5; ">
                        카페/디저트
                    </div>
                    <p onclick="sub17()" >카페 GEE</p>
                    <p onclick="sub16()">행복한 달팽이</p>
                    <p onclick="sub18()">AWAKE BREAD</p>
                </div>
                <div style="position:absolute; font-size:14px; margin:5px; width:40%; right:15px; font-family:  'pretendard-light'; top:60px;">
                    <div style="font-family:'pretendard-sb'; height:30px; color:#333D4B; border-bottom:1px solid #E5E5E5; ">
                        일반음식점
                    </div>
                    <p onclick="sub15()">카페테리아 현</p>
                </div>
                <div style="position:absolute; font-size:14px; margin:5px; width:80%; left:30px; font-family:  'pretendard-light'; top:210px;">
                    <div style="font-family:'pretendard-sb'; height:30px; color:#333D4B; border-bottom:1px solid #E5E5E5; ">
                        편의시설
                    </div>
                    <p onclick="sub20()">GS25 학생회관점</p>
                </div>
            </div>
            <img src="union-img.png">
            <p style="position: absolute; color:white; bottom:0px; left:25px; font-size:23px; font-family:pretendard-medium;">학생회관</p>
            <button id="down-arrow-union" style="position:absolute; bottom:15px; right:15px; width:30px; height:30px; border-radius:15px; background-color: none; border:none;" onclick="union()"><img style="position:absolute; left:6.5px; top:10px; width: 17px; height:11px;"  src="down-arrow.png"></button>
        </div>
    </div>
    <div id="main-cy">
        <div id="cy-img" >
            <div id="cy-list" style="display: flex;">
                <div style="position:absolute; font-size:14px; margin:5px; width:80%; left:30px; font-family:  'pretendard-light'; top:60px;">
                    <div style="font-family: 'pretendard-sb'; height:30px; color:#333D4B; border-bottom:1px solid #E5E5E5; ">
                        편의시설
                    </div>
                    <p onclick="sub22()">GS25 청연학사점</p>
                </div>
            </div>
            <img src="cy-img.png">
            <p style="position: absolute; color:white; bottom:0px; left:25px; font-size:23px; font-family:pretendard-medium;">청연학사</p>
            <button id="down-arrow-cy" style="position:absolute; bottom:15px; right:15px; width:30px; height:30px; border-radius:15px; background-color: none; border:none;" onclick="cy()"><img style="position:absolute; left:6.5px; top:10px; width: 17px; height:11px;"  src="down-arrow.png"></button>
        </div>
    </div>
    <div id="main-jung">
        <div id="jung-img" >
            <div id="jung-list" style="display: flex;">
                <div style="position:absolute; font-size:14px; margin:5px; width:80%; left:30px; font-family:  'pretendard-light'; top:60px;">
                    <div style="font-family: 'pretendard-sb'; height:30px; color:#333D4B; border-bottom:1px solid #E5E5E5; ">
                        카페
                    </div>
                    <p onclick="sub21()">카페 딕셔너리</p>
                </div>
            </div>
            <img src="jung-img.png">
            <p style="position: absolute; color:white; bottom:0px; left:25px; font-size:23px; font-family:pretendard-medium;">정의관</p>
            <button id="down-arrow-jung" style="position:absolute; bottom:15px; right:15px; width:30px; height:30px; border-radius:15px; background-color: none; border:none;" onclick="jung()"><img style="position:absolute; left:6.5px; top:10px; width: 17px; height:11px;"  src="down-arrow.png"></button>
        </div>
    </div>
    <div id="main-baek">
        <div id="baek-img" >
            <div id="baek-list" style="display: flex;">
                <div style="position:absolute; font-size:14px; margin:5px; width:80%; left:30px; font-family:  'pretendard-light'; top:60px;">
                    <div style="font-family: 'pretendard-sb'; height:30px; color:#333D4B; border-bottom:1px solid #E5E5E5; ">
                        편의시설
                    </div>
                    <p onclick="sub22()">GS25 청연학사점</p>
                </div>
            </div>
            <img src="baek-img.png">
            <p style="position: absolute; color:white; bottom:0px; left:25px; font-size:23px; font-family:pretendard-medium;">백운관</p>
            <button id="down-arrow-baek" style="position:absolute; bottom:15px; right:15px; width:30px; height:30px; border-radius:15px; background-color: none; border:none;" onclick="baek()"><img style="position:absolute; left:6.5px; top:10px; width: 17px; height:11px;"  src="down-arrow.png"></button>
        </div>
    </div>`;
      break;
    case "웹사이트":
      newText = `
      <div id="site-header">
        <img id="main-site-img" style="border-radius: 0px 0px 20px 20px;" src="site_bg.png">
        <p style=" position:absolute;letter-spacing:-1px;font-size:30px; left:23px;top:95px;font-family: 'pretendard-sb';" >교내 웹사이트</p>
        <div id="learnus" onclick="learnus()" style="position:relative; top:-190px; display: flex; align-items: center;">
                <a style="display: flex; align-items: center; text-decoration: none;">
                    <img src="learnus.png" style="margin-left: 20%; width:95px"> <!-- 이미지 오른쪽에 약간의 여백 추가 -->
                    <img style="position:absolute; right:10px; width: 30px;" src="tomorrow.png">
                </a>
            </div>
            <div id="yonsei" onclick="yonsei()" style="position:relative; top:-180px;display: flex; align-items: center;">
                <a style="display: flex; align-items: center; text-decoration: none;">
                    <img src="yonsei.png" style="margin-left:8px; margin-right: 1px; width:40px"> <!-- 이미지 오른쪽에 약간의 여백 추가 -->
                    <span style="color: #333D4B; letter-spacing:-0.7px; font-family:'Yonsei-Light';">연세대학교 홈페이지</span> <!-- 텍스트 스타일 및 색상 추가 -->
                    <img style="position:absolute; right:10px; width: 30px;" src="tomorrow.png">
                </a>
            </div>
    </div>
    <body>
            <div id="big-button">
                <div id="portal" onclick="portal()">
                    <div style="position:absolute; top:15px; align-items:center; left:10px; height:35px; width:35px;border-radius:25px; background-color:white;">
                        <img style="position: absolute;width:21px; left:6.75px; top:9.5px;" src="portal.png">
                    </div>
                    <p style="position:absolute; top:45px;left:10px; font-family:'pretendard-sb'; color:white; letter-spacing:-1px; font-size:18px;">연세포털</p>
                    <p style="position:absolute; top:79px;left:10px;font-family:'pretendard-medium'; color:#A3C2EB;  font-size:11px;">YONSEI PORTAL</p>
                    <div style="position:absolute; bottom:10px; align-items:center; right:10px; height:30px; width:30px;border-radius:15px; background-color:#E8E8ED;">
                        <img style="position: absolute;width:17px; left:6px; top:7px;" src="arrow-site.png">
                    </div>
                </div>
                <div id="mail" onclick="mail()">
                    <div style="position:absolute; top:15px; align-items:center; left:10px; height:35px; width:35px;border-radius:25px; background-color:white;">
                        <img style="position: absolute;width:17px; left:8.6px; top:10px;" src="mail.png">
                    </div>
                    <p style="position:absolute; top:45px;left:10px; font-family:'pretendard-sb'; color:white; letter-spacing:-1px;font-size:18px;">웹메일</p>
                    <p style="position:absolute; top:79px;left:10px;font-family:'pretendard-medium'; color:#A3C2EB;  font-size:11px;">YONSEI MAIL</p>
                    <div style="position:absolute; bottom:10px; align-items:center; right:10px; height:30px; width:30px;border-radius:15px; background-color:#E8E8ED;">
                        <img style="position: absolute;width:17px; left:6px; top:7px;" src="arrow-site.png">
                    </div>
                </div>
                <div id="sports" onclick="sports()">
                    <div style="position:absolute; top:15px; align-items:center; left:10px; height:35px; width:35px;border-radius:25px; background-color:white;">
                        <img style="position: absolute;width:21px; left:6.6px; top:10px;" src="sports.png">
                    </div>
                    <p style="position:absolute; top:45px;left:10px; font-family:'pretendard-sb'; color:white; letter-spacing:-1px;font-size:18px;">스포츠센터</p>
                    <p style="position:absolute; top:79px;left:10px;font-family:'pretendard-medium'; color:#A3C2EB;  font-size:11px;">SPORTS CENTER</p>
                    <div style="position:absolute; bottom:10px; align-items:center; right:10px; height:30px; width:30px;border-radius:15px; background-color:#E8E8ED;">
                        <img style="position: absolute;width:17px; left:6px; top:7px;" src="arrow-site.png">
                    </div>
                </div>
                <div id="house" onclick="house()">
                    <div style="position:absolute; top:15px; align-items:center; left:10px; height:35px; width:35px;border-radius:25px; background-color:white;">
                        <img style="position: absolute;width:17px; left:8.1px; top:11.5px;" src="house.png">
                    </div>
                    <p style="position:absolute; top:45px;left:10px; font-family:'pretendard-sb'; color:white; letter-spacing:-1px;font-size:18px;">원주생활관</p>
                    <p style="position:absolute; top:79px;left:10px;font-family:'pretendard-medium'; color:#A3C2EB;  font-size:11px;">HOUSING OFFICE</p>
                    <div style="position:absolute; bottom:10px; align-items:center; right:10px; height:30px; width:30px;border-radius:15px; background-color:#E8E8ED;">
                        <img style="position: absolute;width:17px; left:6px; top:7px;" src="arrow-site.png">
                    </div>
                </div>
                <div id="facility" onclick="facility()">
                    <div style="position:absolute; top:15px; align-items:center; left:10px; height:35px; width:35px;border-radius:25px; background-color:white;">
                        <img style="position: absolute;width:15px; left:9.5px; top:8px;" src="facility.png">
                    </div>
                    <p style="position:absolute; top:45px;left:10px; font-family:'pretendard-sb'; color:white; letter-spacing:-1px;font-size:18px;">공간대관시스템</p>
                    <p style="position:absolute; top:79px;left:10px;font-family:'pretendard-medium'; color:#C8C8C8;  font-size:11px;">FACILITY RENT</p>
                    <div style="position:absolute; bottom:10px; align-items:center; right:10px; height:30px; width:30px;border-radius:15px; background-color:#E8E8ED;">
                        <img style="position: absolute;width:17px; filter:brightness(20%); left:6px; top:7px;" src="arrow-site.png">
                    </div>
                </div>
                <div id="bus" onclick="bus()">
                    <div style="position:absolute; top:15px; align-items:center; left:10px; height:35px; width:35px;border-radius:25px; background-color:white;">
                        <img style="position: absolute;width:17px; left:8.3px; top:6.8px;" src="bus.png">
                    </div>
                    <p style="position:absolute; top:45px;left:10px; font-family:'pretendard-sb'; color:white; letter-spacing:-1px;font-size:18px;">버스예약시스템</p>
                    <p style="position:absolute; top:79px;left:10px;font-family:'pretendard-medium'; color:#C8C8C8;  font-size:11px;">BUS RESERVATION</p>
                    <div style="position:absolute; bottom:10px; align-items:center; right:10px; height:30px; width:30px;border-radius:15px; background-color:#E8E8ED;">
                        <img style="position: absolute;width:17px; filter:brightness(20%); left:6px; top:7px;" src="arrow-site.png">
                    </div>
                </div>
            </div>
      `;
      break;
    case "문의하기":
      newText = `
      <div id="support-header" style=" height:300px;border-radius: 0px 0px 20px 20px; background-color:#21252C;" >
        <p id="support-title"style="letter-spacing:-1px;" >지원 및 문의</p>
        <div style="position:absolute; top:210px;width: 90%; background-color:white; left:50%; transform:translate(-50%,0); height:65px; border-radius:15px; display:flex; text-decoration:none; align-items:center;">
            <img style="position:relative; margin-left:15px; top:-1px; width: 20px; margin-right:5px;" src="headphone.png">
            <span style="color:#21252C; font-family:'pretendard-medium';">피드백, 불만사항, 관련문의를 받고 있어요.</span>
        </div>
    </div>
    <div style="position:relative; width:90%; background-color:#FFCB39; height:140px; left:50%; transform:translate(-50%,0); top:30px;border-radius:15px; ">
        <img src="kakao.png" style="position:absolute;width:38px; top:20px;left:25px;">
        <p style="position: absolute; font-family:'pretendard-sb'; font-size:20px; color:#000000;left: 25px;; top:55px;">카카오톡 플러스친구</p>
        <p style="position: absolute; font-family:'pretendard-regular'; font-size:13px; color:#604C14;left: 25px;; top:95px;">카카오톡 검색창에 <span style="font-family:'pretendard-sb';">연세대 학식모지</span> 검색하기</p>
    </div>
    <div style="position: relative; width:90%; background-color:white; height:300px; left:50%; transform:translate(-50%,0); top:60px; border-radius:15px;">
        <img src="mail.png" style="position:absolute; top: 30px;left: 25px;; width: 32px;">
        <p style="position: absolute; top:50px; left:21px; font-family:pretendard-sb; color:#003378; font-size:23px;">이메일 문의</p>
        <div style="position:absolute;bottom:77px; border-bottom:1px #E5E5E5 solid; left:50%; transform:translate(-50%,0); height:70px; width: 88%;">
            <p style="position: absolute; font-family:pretendard-sb; color:#212121; left:0px;">개발 및 운영</p>
            <p style="position: absolute; font-family:pretendard-regular; font-size:14px; top:2px; color:#333D4B;right:0px;">23 의공학부 배진우</p>
            <p style="position: absolute; font-family:pretendard-regular; font-size:14px; color:#333D4B;bottom:-5px; right:0px;">gravity0225@naver.com</p>
        </div>
        <div style="position:absolute;bottom:10px; left:50%; transform:translate(-50%,0); height:70px; width: 88%;">
            <p style="position: absolute; font-family:pretendard-sb; color:#212121; left:0px;">디자인</p>
            <p style="position: absolute; font-family:pretendard-regular; font-size:14px; top:2px; color:#333D4B;right:0px;">19 디자인예술학부 진기원</p>
            <p style="position: absolute; font-family:pretendard-regular; font-size:14px; color:#333D4B; bottom:0px; right:-2px;">jwon_822@yonsei.ac.kr</p>
        </div>
    </div>       
      `;
      break;
    default:
      newText = ``;
  }
  content.innerHTML = newText;
}
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
function reload(){
  location.reload()
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
  function toggleVisibilityAndExpand() {
    var div = document.getElementById('plaza-list');
    if (div.style.height === '530px') { // 이미 확장된 상태라면 축소하고 요소 숨김
      div.style.height = '0px';
    } else { // 확장되지 않은 상태라면 확장하고 요소 보임
      div.style.height = '530px';
    }
  }
function changeContent(clickedElement) {
  var content = document.getElementById("content");
  var newText;
  switch (clickedElement.innerText) {
    case "홈":
     newText = `
     <header id="header">
                    <p id="title1">오늘 수업도</p>
                    <p id="title2">화이팅하세요!</p>
                    <img id="reload" onlick="reload()" src="reload.png">
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
                        <p id="info1"><img id="info1-img" src="info1.png"> 위 메뉴는 식자재 수급상황에 따라 변경될 수 있습니다.</p>
                    </div>
      `;
      setTimeout(() => main_pageload(),0);
      break;
    case "편의시설":
      newText = `<p id="facility-title">편의시설</p>
      <div id="plaza-img">
          <div id="plaza-list" style="display: flex;">
              <div style="position:absolute; font-size:14px; margin:5px; width:40%; left:30px; font-family:  'pretendard-light'; top:60px;">
                  <div style="font-family: 'pretendard-sb'; height:30px; color:#333D4B; border-bottom:1px solid #E5E5E5; ">
                      카페/디저트
                  </div>
                  <p>카페 딕셔너리</p>
                  <p>카페 GEE</p>
                  <p>카페 둥둥</p>
                  <p>호야토스트</p>
                  <p>뚜레쥬르</p>
              </div>
              <div style="position:absolute; font-size:14px; margin:5px; width:40%; right:15px; font-family:  'pretendard-light'; top:60px;">
                  <div style="font-family:'pretendard-sb'; height:30px; color:#333D4B; border-bottom:1px solid #E5E5E5; ">
                      일반음식점
                  </div>
                  <p>BNC</p>
              </div>
              <div style="position:absolute; font-size:14px; margin:5px; width:40%; right:15px; font-family:  'pretendard-light'; top:150px;">
                  <div style="font-family:'pretendard-sb'; height:30px; color:#333D4B; border-bottom:1px solid #E5E5E5; ">
                      판매점
                  </div>
                  <p>누리샘</p>
                  <p>누리서점</p>
              </div>
              <div style="position:absolute; font-size:14px; margin:5px; width:80%; left:30px; font-family:  'pretendard-light'; top:270px;">
                  <div style="font-family:'pretendard-sb'; height:30px; color:#333D4B; border-bottom:1px solid #E5E5E5; ">
                      편의시설
                  </div>
                  <p>POD센터</p>
                  <p>유니룩스(빨래방)</p>
                  <p>구내안경원</p>
                  <p>우리은행</p>
                  <p>우편취급국</p>
                  <p>GS25</p>
  
              </div>
          </div>
          <img src="plaza-img.png">
          <p style="position: absolute; color:white; bottom:0px; left:25px; font-size:23px; font-family:pretendard-medium;">연세플라자</p>
          <button class="down-arrow" style="position:absolute; bottom:15px; right:25px; width:30px; background: none; border:none;" onclick="toggleVisibilityAndExpand()"><img style="width: 30px;" src="down-arrow.png"></button>
      </div>`;
      break;
    case "웹사이트":
      newText = `
      <div id="site-header">
        <img src="site_bg.png">
        <p>주요 웹사이트</p>
    </div>
    <body>
        <div id="site-main">
            <div id="learnus" onclick="learnus()" style="display: flex; align-items: center;">
                <a style="display: flex; align-items: center; text-decoration: none;">
                    <img src="learnus.png" style="margin-left: 10px; width:110px"> <!-- 이미지 오른쪽에 약간의 여백 추가 -->
                    <img style="position:absolute; right:0px; width: 30px;" src="tomorrow.png">
                </a>
            </div>
            <div id="yonsei" onclick="yonsei()" style="display: flex; align-items: center;">
                <a style="display: flex; align-items: center; text-decoration: none;">
                    <img src="yonsei.png" style="margin-right: 1px; width:50px"> <!-- 이미지 오른쪽에 약간의 여백 추가 -->
                    <span style="color: #333D4B; font-family:'Yonsei-Light';">연세대학교 홈페이지</span> <!-- 텍스트 스타일 및 색상 추가 -->
                    <img style="position:absolute; right:0px; width: 30px;" src="tomorrow.png">
                </a>
            </div>
            <div id="portal" onclick="portal()" style="display: flex; align-items: center;">
                <a style="display: flex; align-items: center; text-decoration: none;">
                    <img src="portal.png" style="position:relative; left:10px; margin-right: 24px; width:27px"> <!-- 이미지 오른쪽에 약간의 여백 추가 -->
                    <span style="color: #333D4B; font-family:'Yonsei-Light';">연세포탈서비스</span> <!-- 텍스트 스타일 및 색상 추가 -->
                    <img style="position:absolute; right:0px; width: 30px;" src="tomorrow.png">
                </a>
            </div>
            <div id="mail" onclick="mail()" style="display: flex; align-items: center;">
                <a style="display: flex; align-items: center; text-decoration: none;">
                    <img src="mail.png" style="position:relative; left:12px; margin-right: 27px; width:22px"> <!-- 이미지 오른쪽에 약간의 여백 추가 -->
                    <span style="color: #333D4B; font-family:'Yonsei-Light';">웹메일</span> <!-- 텍스트 스타일 및 색상 추가 -->
                    <img style="position:absolute; right:0px; width: 30px;" src="tomorrow.png">
                </a>
            </div>
            <div id="sports" onclick="sports()" style="display: flex; align-items: center;">
                <a style="display: flex; align-items: center; text-decoration: none;">
                    <img src="sports.png" style="position:relative; left:12px; margin-right: 27px; width:22px"> <!-- 이미지 오른쪽에 약간의 여백 추가 -->
                    <span style="color: #333D4B; font-family:'Yonsei-Light';">스포츠센터</span> <!-- 텍스트 스타일 및 색상 추가 -->
                    <img style="position:absolute; right:0px; width: 30px;" src="tomorrow.png">
                </a>
            </div>
            <div id="house" onclick="house()" style="display: flex; align-items: center;">
                <a style="display: flex; align-items: center; text-decoration: none;">
                    <img src="house.png" style="position:relative; left:12px; margin-right: 27px; width:22px"> <!-- 이미지 오른쪽에 약간의 여백 추가 -->
                    <span style="color: #333D4B; font-family:'Yonsei-Light';">원주생활관</span> <!-- 텍스트 스타일 및 색상 추가 -->
                    <img style="position:absolute; right:0px; width: 30px;" src="tomorrow.png">
                </a>
            </div>
            <div id="facility" onclick="facility()" style="display: flex; align-items: center;">
                <a style="display: flex; align-items: center; text-decoration: none;">
                    <img src="facility.png" style="position:relative; left:12px; margin-right: 27px; width:22px"> <!-- 이미지 오른쪽에 약간의 여백 추가 -->
                    <span style="color: #333D4B; font-family:'Yonsei-Light';">공간대관시스템</span> <!-- 텍스트 스타일 및 색상 추가 -->
                    <img style="position:absolute; right:0px; width: 30px;" src="tomorrow.png">
                </a>
            </div>
            <div id="bus" onclick="bus()" style=" border:none;display: flex; align-items: center;">
                <a style="display: flex; align-items: center; text-decoration: none;">
                    <img src="bus.png" style="position:relative; left:12px; margin-right: 27px; width:22px"> <!-- 이미지 오른쪽에 약간의 여백 추가 -->
                    <span style="color: #333D4B; font-family:'Yonsei-Light';">통학버스 예약 시스템</span> <!-- 텍스트 스타일 및 색상 추가 -->
                    <img style="position:absolute; right:0px; width: 30px;" src="tomorrow.png">
                </a>
            </div>
        </div>
    </body>
      `;
      break;
    case "문의하기":
      newText = "<h3>Contact Content</h3><p>Reach out to us.</p>";
      break;
    default:
      newText = "";
  }
  content.innerHTML = newText;
}
//หน้า last - time นำโค้ดมาจาก libary โดยจะเก็บค่าไว้ใน localstorage

//จะเป็นการเก็บข้อมูลเวลาที่ใช้งานในเว็บล่าสุด

const today = new Date(); //รับค่าคลาส date ของ javascript 
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+' '+time;

const lastTimeLoginEle = document.getElementById('last-time-login'); //ดึงมาจาก html

//เช็คว่าเราเคยเข้ามามั้ย ถ้าเข้ามาครั้งแรกจะ ไม่แสดงอะไรเลย
if(localStorage.getItem('lastTimeLogin') !== null){
    lastTimeLoginEle.textContent = 'Last time: '+ localStorage.getItem('lastTimeLogin'); //ถ้าเข้ามาแล้วจะเข้ามารันในนี้
}

window.addEventListener('load', () => localStorage.setItem('lastTimeLogin', dateTime));

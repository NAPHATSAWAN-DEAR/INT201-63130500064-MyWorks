import {CookieUtil} from './cookie-script.js';
//มีการใช้การทำงาน ของ cookie ผ่านหน้า คุกกี้สคริป 

const welcomeTextEle = document.getElementById('welcome');                                                      // สร้างตัวแปร welcomeTextEle โดยดึง Element ที่มี id เป็น welcome 
const userNameEle = document.getElementById('user-name');                                                      // สร้างตัวแปร userNameEle เพื่อเก็บค่าของ Element ที่มี id เเป็น user-name 
const signInBtnEle = document.getElementById('sign-in');                                                      // สร้างตัวแปร welcomeTextEle เพื่อเก็บค่าของ Element ที่มี id เป็น welcome 
const signOutBtnEle = document.getElementById('sign-out');                                                    // สร้างตัวแปร welcomeTextEle เพื่อเก็บค่าของ Element ที่มี id เป็น welcome 

signInBtnEle.addEventListener('click', signIn); //สร้างการทำงาน ถ้าเรา click มันจะเข้าไปทำงานใน function signIn

signOutBtnEle.addEventListener('click', signOut);

if(CookieUtil.get('user') != null){
    signInBtnEle.hidden = true;
    signOutBtnEle.hidden = false;
    welcomeTextEle.hidden = false;
    userNameEle.hidden = false;
    userNameEle.textContent = CookieUtil.get('user');
}


function signIn(){
    //ถ้าเรากดsignin เข้ามา จะทำการแสดงข้อความ sign-out , welcome , user-name
    //โดย singin จะทำงานโดยใช้cookie ที่ตั้งไว้ว่า name เป็น user value เป็น test001 และตั้งวันหมดอายุไว้ที่ 1 มกรา 2022
    CookieUtil.set('user', 'Tester001', new Date('January 1, 2022'));
    signInBtnEle.hidden = true; //ข้อความ
    signOutBtnEle.hidden = false; //ข้อความ
    welcomeTextEle.hidden = false; //ข้อความ
    userNameEle.hidden = false; //ข้อความ

    userNameEle.textContent = CookieUtil.get('user');
}

function signOut(){
    //จะมีการทำงาน unset ค่าของuser และจะแสดงข้อความ signIn เพื่อให้user กลับเข้ามา signIn อีกครั้ง
    CookieUtil.unset('user')
    signInBtnEle.hidden = false;
    signOutBtnEle.hidden = true;
    welcomeTextEle.hidden = true;
    userNameEle.hidden = true;
}
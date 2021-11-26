//มีการใช้งานlocalStorage
const bodyEle = document.getElementsByTagName('body')[0]                                                         //จะเป็น body อันแรกสุด

const lightThemeIcon = document.getElementById('icon-light')                                                    // สร้างตัวแปร welcomeTextEle โดยดึง Element ที่มี id เป็น welcome พระอาทิตย์ 
const darkThemeIcon = document.getElementById('icon-dark')                                                     // สร้างตัวแปร welcomeTextEle โดยดึง Element ที่มี id เป็น welcome พระจันทร์

window.addEventListener('load', darkMode) // เอาไว้รีโหลดใช้เมื่อเรารีโหลดหน้า หน้าของเราจะเก็บ darkmode ล่าสุดที่เราเก็บไว้ 
//สมมติว่าถ้าเรา เปิดเป็นlight เมื่อโหลดหน้า หน้าก็ยังเป็น light

lightThemeIcon.addEventListener('click', darkMode) //สร้างการทำงาน ถ้าเรา click มันจะเข้าไปทำงานใน darkMode
darkThemeIcon.addEventListener('click', darkMode) //สร้างการทำงาน ถ้าเรา click มันจะเข้าไปทำงานใน darkMode

//รับอีเว้นเข้ามา 
function darkMode(e){
//กด light จะเป็น สีดำ 
//โดยที่เราจะเช็คเงื่อนไขว่าถ้า target.id เป็น lightcolor รึเปลล่า ถ้าใช่ พื้นหลังจะทำการเปลี่ยนเป็นสีดำ และ icon รูปพระอาทิตย์จะถูกซ่อน แล้วรูปพระจันทร์จะโชว์แทน
//หรือ ถ้า เราเช็คเงี่อนไขแล้วได้ว่า ในlocalStorage เก็บไว้ว่าใช้ bgcolor เป็น darkColor และ nodetype เป้น 9 ก็จะเข้าเงี่อนไข
    if(e.target.id === 'lightColor' || localStorage.getItem('bgColor') === 'darkColor' && e.target.nodeType == 9){
        bodyEle.style.backgroundColor = '#222';
        lightThemeIcon.hidden = true;
        darkThemeIcon.hidden = false;

        //เอาไว้เปลี่ยน localstorage ให้เป็นค่าที่เราเปลี่ยนล่าสุด
        if(e.target.nodeType == 1){
            localStorage.setItem('bgColor', 'darkColor');
        } 
    }

//แต่ถ้าเราเช็คแล้วไม่เข้าเงื่อนไขที่ เป็นทั้ง lightColor และเป็น bg darkColor ก็จะทำการเปลี่ยนพื้นหลัง
    else{
        bodyEle.style.backgroundColor = 'white';
        lightThemeIcon.hidden = false;
        darkThemeIcon.hidden = true;

        if(e.target.nodeType == 1) {
            localStorage.setItem('bgColor', 'lightColor');
        }
    }

}
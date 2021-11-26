import {products} from './product.js';

const sIconEle = document.getElementById('search-icon');     //สร้างตัวแปรที่มีชื่อว่า sIconEle เพื่อสร้าง search-icon ที่กำหนดไว้ใน product.html
sIconEle.addEventListener('click', hidden);     //สร้างการทำงาน ถ้าเราclick มันจะเข้าไปทำงานใน function hidden

const sFormEle = document.getElementById('shoeName');    //สร้างตัวแปรที่มีชื่อว่า sFormEle เพื่อสร้าง shoeName ที่กำหนดไว้ใน product.html

const sButtonEle = document.getElementById('searchBtn');   //สร้างตัวแปรที่มีชื่อว่า sButtonEle เพื่อสร้าง searchBtn ที่กำหนดไว้ใน product.html
sButtonEle.addEventListener('click', hiddenOtherProduct);   //สร้างการทำงาน ถ้าเราclick มันจะเข้าไปทำงานใน function hiddenOtherProduct

function hidden(){
    // ยังไม่กด จะโชว์ แว่นขยาย
    if(sFormEle.hidden == false){
        sFormEle.hidden = true;
        sButtonEle.hidden = true;
    }
    
    //เมื่อคลิกปุ่มแล้ว จะโชว์ ช่องเสิร์จ กับ ปุ่มเสิร์จ
    else{
        sFormEle.hidden = false;
        sButtonEle.hidden = false;
    }

    // if(sFormEle.style.visibility == 'hidden'){
    //     sFormEle.style.visibility = 'visible';
    //     sButtonEle.style.visibility = 'visible';
    // }
    // else{
    //     sFormEle.style.visibility = 'hidden';
    //     sButtonEle.style.visibility = 'hidden';
    // }
}

//เอาไว้ตอน search สินค้า ถ้าเราค้นหาสินค้าที่มีขื่อว่า Nike Air Force 1 Fontanka ก็จะแสดงสินค้าที่มีชื่อว่า Nike Air Force 1 Fontanka 
//ถ้าสินค้าไหนที่ไม่มีชื่อ Nike Air Force 1 Fontanka จะถูกทำการซ่อน

function hiddenOtherProduct() {
    
    products.forEach(product => {
        const pDivEle = document.getElementById(product.productId);
        if(product.productName.toLowerCase().includes(sFormEle.value.toLowerCase())){
            pDivEle.hidden = false;
        }
        else{
            pDivEle.hidden = true;
        }
    })
}
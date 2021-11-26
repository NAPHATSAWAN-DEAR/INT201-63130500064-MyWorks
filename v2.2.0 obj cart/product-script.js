import {products} from './product.js';
import {Cart} from './cart.js';
const divProductsEle = document.querySelector('#products'); //เป็นสร้างตัวแปร ที่เอาไว้รับค่าที่แสดงหน้า product.html ที่มีชื่อว่า id product 
divProductsEle.setAttribute('class', 'grid grid-cols-1 gap-6 px-10 sm:grid-cols-2 lg:grid-cols-4 mt-4')//เข้าถึง

//หน้าที่เอาไว้แสดงสินค้าโดยนำ css เข้ามาช่วย


//ที่ใช้ foreach เพราะเราเก็บสินค้าเป็น array โดยที่เราจะเรียกสินค้าออกมาผ่าน foreach การทำงานคือ สร้าง product 

products.forEach(product => {
    const divProductEle = document.createElement('div');                                            // เราจะสร้าง div เปล่าขึ้นมา
    divProductEle.setAttribute('id', product.productId);                                              // กำหนด id ของ div โดยเอาจาก id ใน product.js
    // กำหนดรูปแบบของ div ที่เก็บ product แต่ละชิ้น
    divProductEle.setAttribute('class', 'rounded-lg overflow-hidden bg-gray-100 pb-4' );
    
    const pProductImgEle = document.createElement('img');                                               // เราจะสร้าง img เปล่าขึ้นมา
    pProductImgEle.setAttribute('src', product.img);                                                   // กำหนด src ของ 'img' โดยเอาจาก product.img ใน product.js
    divProductEle.appendChild(pProductImgEle);                                                          //นำ (pProductImgEle เข้าไปต่อที่ divProductEle (#products)
    
    const pProductIdEle = document.createElement('p');                                              // เราจะสร้าง p เปล่าขึ้นมา
    pProductIdEle.textContent = product.productId;                                                        //นำข้อมูลproductIdใน product.js มาแสดงผล
    // กำหนดรูปแบบของ p ที่เก็บ product แต่ละชิ้น
    pProductIdEle.setAttribute('class', '-mt-12 w-full bottom-0 leading-4 py-4 text-xl font-semibold text-right px-6');
    divProductEle.appendChild(pProductIdEle);                                                           //นำ (pProductIdEle เข้าไปต่อที่ divProductEle (#products)

    
    const pProductNameEle = document.createElement('p');
    pProductNameEle.textContent = product.productName;                                            //นำข้อมูล productName ใน product.js มาแสดงผล
    // กำหนดรูปแบบของ p ที่เก็บ product แต่ละชิ้น
    pProductNameEle.setAttribute('class', 'text-xl font-semibold px-6 mt-4');
    divProductEle.appendChild(pProductNameEle);                                                     //นำ ((pProductNameEle เข้าไปต่อที่ divProductEle (#products)
    
    const pProductStockEle = document.createElement('p');
    pProductStockEle.textContent = 'Available : ' + product.productStock;                            //นำข้อมูล productStock ใน product.js มาแสดงผล
    // กำหนดรูปแบบของ p ที่เก็บ product แต่ละชิ้น
    pProductStockEle.setAttribute('class', 'font-semibold px-6 text-gray-500');
    divProductEle.appendChild(pProductStockEle);                                                     //นำ ((pProductStockEle เข้าไปต่อที่ divProductEle (#products)


    const divBuyEle = document.createElement('div');
    divBuyEle.setAttribute('class', 'flex flex-row justify-between px-6');

    const pProductPriceEle = document.createElement('p');
    pProductPriceEle.textContent = product.productPrice + ' Baht';
    pProductPriceEle.setAttribute('class', 'font-semibold text-gray-500');
    divBuyEle.appendChild(pProductPriceEle);
    
    const pProductBuyEle = document.createElement('button');// เราจะสร้าง button เปล่าขึ้นมา
    pProductBuyEle.setAttribute('type', 'button');  // กำหนดรูปแบบของ button ให้เป็น แบบ tpye เป็น ปุ่ม
    
    //เป็นการเช็คสินค้าใน stock โดยที่เมื่อเราคลิกไปแล้ว ไม่มีสินค้าใน stock จะทำการแจ้งเตือนว่า สินค้านี้ไม่มีใน stock  แต่ถ้าเมื่อคลิกไปแล้ว แล้วมีสินค้า จะทำการเพิ่มสินค้าไปในตะกร้า
    if(product.productStock === 0){
        pProductBuyEle.setAttribute('class', 'w-40 bg-gray-400 hover:bg-gray-600 text-white py-2 px-4 rounded -mt-4');
        pProductBuyEle.textContent = 'Sold Out';
        pProductBuyEle.addEventListener('click', function(e){alert(`${e.target.parentNode.id} is out of stock.`);});
    }
    else{
        pProductBuyEle.setAttribute('class', 'w-40 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded -mt-4');
        pProductBuyEle.textContent = 'Buy';
        pProductBuyEle.addEventListener('click', Cart.addCart);
    }

    divBuyEle.appendChild(pProductBuyEle); //นำ ((pProductBuyEle เข้าไปต่อที่ divBuyEle 
    divProductEle.appendChild(divBuyEle); //นำ ((divBuyEle เข้าไปต่อที่ divProductEle (#products)

    divProductsEle.appendChild(divProductEle); //นำ ((divProductEle เข้าไปต่อที่ divProductsEle
}
);


import {products} from './product.js';
const countCartEle = document.getElementById('cart-count');
const deleteCartBtnEle = document.getElementById('delete-cart');
const showCartBtn = document.getElementById('show-cart');

if(JSON.parse(localStorage.getItem('cart')) === null){
    localStorage.setItem('cart', JSON.stringify([]));
}

export let Cart = {
    cart: JSON.parse(localStorage.getItem('cart')), //JSON.parseเปลี่ยนจากstringเป็นobj
    //รับ อีเว้น
    addCart(e){//function
        const id = e.target.parentNode.parentNode.id;
        // let productIndex = Cart.cart.findIndex(item => item.productId == id);
        const productIndex = Cart.findId(id); //หาว่าในตระกร้ามี id แล้วยัง ถ้ามีจะรีเทินเป็น 1 ถ้าไม่มี -1
        const p = products.find(product => product.productId == id); // หาid
        if(productIndex === -1) {    //ถ้าไม่เจอ productนี้ในตะกร้า
            alert(`${id} added in your cart`);
            Cart.cart.push({
            productId: id,
            productName: p.productName,
            productPrice: p.productPrice,
            qty: 1
            }) // เพิ่มครั้งแรกครั้งเดียว
        }
        // * เช็คว่าซื้อถึงจำนวนที่มีทั้งหมดหรือยัง
        else if(Cart.cart[productIndex].qty == p.productStock){
            alert(`You have purchased all ${id}`);
        }
        else{
            Cart.cart[productIndex].qty++;
        }

        localStorage.setItem('cart', JSON.stringify(Cart.cart));
        countCartEle.textContent = Cart.countCart();
    },

    removeCart(){
        Cart.cart = []
        localStorage.setItem('cart', JSON.stringify(Cart.cart));
        countCartEle.textContent = Cart.countCart();
        alert(`Remove all products in the cart.`);
    },

    countCart(){
        return Object.values(this.cart).reduce((temp, {qty}) => temp + qty, 0)
    },

    findId(id){
        return this.cart.findIndex(item => item.productId == id)
    },

    showCart(){//เอาไว้โช้ว์สินค้าในตะกร้าที่เราเพิ่มไป ทั้งหมด
        Cart.cart.sort((a,b) => a.productId.localeCompare(b.productId)) //เรียง id จากน้อยไปมาก พจนานุกรม
        let test = ''; // รอรับค่า
         
        Cart.cart.forEach(ele => {
            test += `Id: ${ele.productId}, Name: ${ele.productName}, Price: ${ele.productPrice}, qty: ${ele.qty}\n`
        })//เอาของทั้งหมดในคลาสมาต่อกันเรื่อยๆ

        alert(test) // บอกว่ามีอะไรบ้างในข้างบน

    }
}

deleteCartBtnEle.addEventListener('click', Cart.removeCart);
countCartEle.textContent = Cart.countCart();
showCartBtn.addEventListener('click', Cart.showCart)
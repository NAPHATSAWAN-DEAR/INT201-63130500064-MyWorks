let products = [
    { id: 1, price: 10 },
    { id: 2, price: 5 }
  ];
  
  let newProduct = { id: 3, price: 20 };
  console.log(products);
  products = [...products, { id: newProduct.id, price: newProduct.price }];

// products[product.length].id = newProduct.id;

//shallow copy
newProduct.price = 100;
console.log(products);

//...   1) spread operator 






//...   2)rest parameter

//destructuring +rest parameter
function getStudentsInClass(instructor, ta, ...students) {
    return students;
  }
  let studentSec2 = getStudentsInClass('Umaporn', 'Tisanai', 'A', 'B', 'C');
  console.log(studentSec2);
  
  [instructor, ta, ...student] = ['Umaporn', 'Tisanai', 'A', 'B', 'C'];
  console.log(student);
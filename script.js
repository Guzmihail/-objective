
/*1.Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */
var cifreMax  =   +prompt('Введите число от 0 до 999');
var boxObject = {
    numers: Math.round(Math.random (0) + cifreMax) ,
    units: 0,
    tens: 0,
    hundreds: 0,
}; if(boxObject <= 9){
    boxObject.units = boxObject.numers;
}else if(boxObject.numers <= 999){
    boxObject.units = Math.floor(boxObject.numers % 10);
    boxObject.tens = Math.floor(boxObject.numers /10 % 10 );
    boxObject.hundreds = Math.floor (boxObject.numers /100 % 10);
}else{
    boxObject = 0;
    console.log('Вы ввели число за диапазоном 0 - 999');
}
console.log(boxObject);

/*2.Продолжить работу с интернет-магазином:
    a.	В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
    b.	Реализуйте такие объекты.
    c.	Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

var productCart = [ 
{
    name: 'shop_1',
    price: 200,
    quantity: 1
},
{
    name: 'shop_2',
    price: 300,
    quantity: 2
},
{
    name: 'shop_3',
    price: 150,
    quantity: 5
}
]

function totalContPrice () {
    var totalPrice = 0;
    for(var i = 0; i < productCart.lenght;  i++) {
        var itemTotal = productCart[i].quantity * productCart[i].price;
        totalPrice += itemTotal;
    }
    return totalPrice;
}

console.log(totalContPrice());


/*Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы. */

var productCatalot = {
    quantity: 100,
    gen: 'mascul',
    color: 'red, black, mov',
    materail: 'coton, bunbac',
    size: 'xxl, l, m, s',
    bran: 'adidas',
    name: 'jeans',
    price: 10
}
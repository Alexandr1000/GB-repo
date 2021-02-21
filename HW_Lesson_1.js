let products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse'},
    {price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
    {id: 5}
];


let renderProduct = ( id = 'NaN', title = 'null', price = 'NaN') => {
    return `<div class="product-item" style = 'border: 1px solid red; display:inline-block; margin: 10px;padding:10px'>
                <h3>Наименование:${title}</h3>
                <p>Цена${price}</p>
                <p>Артикул: ${id}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
    }
    
let renderProducts = (list) => {
    let productList = list.map((item) => {
        return renderProduct(item.id,item.title, item.price);
    });

    document.querySelector('.productsOne').innerHTML = productList.join('');
}



let renderProducts2 = (list) => {
    list.forEach(element => {
        document.querySelector('.productsTwo').innerHTML += renderProduct(element.id,element.title, element.price);
    });
}



renderProducts(products);

renderProducts2(products);

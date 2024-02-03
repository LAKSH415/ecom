let params = new URLSearchParams(window.location.search);
let price = params.get('price');
let name = params.get('name');
let orig = params.get('orig');
let category = params.get('category');
let src = params.get('src');
let img=document.querySelector(".product-info-img-1");
img.src=src;
document.querySelector(".product-info-cat").innerText=`${category}`;
document.querySelector(".product-info-name").innerText=`${name}`;
document.querySelector(".product-info-price").innerText=`${price}`;
document.querySelector(".product-info-orig").innerText=`${orig}`;
let button=document.querySelector(".back");
function handleClick(){
    window.location.href ='index.html';
}
//checking
button.addEventListener('click', handleClick);


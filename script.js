let buttons=document.querySelectorAll(".view");
function handleClick(){
    window.location.href = `info.html?category=${this.parentElement.children[1].innerText}&name=${this.parentElement.children[2].innerText}&price=${this.parentElement.children[3].innerText}&orig=${this.parentElement.children[4].innerText}&src=${this.parentElement.children[0].src}`;
}
for(button of buttons){
    button.addEventListener('click', handleClick);
}

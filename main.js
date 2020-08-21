const colorBtn = document.querySelector('.colorBtn'); 
// className
const bodyBcg = document.querySelector('body');
// tagName
const colors = ["yellow","black" ,"red", "green", "grey","#3b5998", "lightblue"];

colorBtn.addEventListener('click',changeColor);
    function changeColor(){
    // bodyBcg.style.backgroundColor = "orange";
    // bodyBcg.style.backgroundColor = colors[0];
    let random = Math.floor(Math.random()*colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}
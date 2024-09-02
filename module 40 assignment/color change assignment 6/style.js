const btn = document.getElementById("button");
const randomColor = () => {
    let value = "0123456789ABCDEF";
    let cons = "#";

    for(let i=0; i<6; i++){
        cons = cons + value[Math.floor(Math.random()*16)];
    }
    return cons;
};

console.log(randomColor());
function changeRandomColor (){
    document.body.style.backgroundColor = randomColor();
}
btn.addEventListener("click",changeRandomColor);
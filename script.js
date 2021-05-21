let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
let color = document.getElementById("color").value;
let background = document.getElementById("background");
let width = 30;
let tool = "Кисточка";
let button = document.getElementById("tool");

let displayWidth = cnv.clientWidth;
let displayHeight = cnv.clientHeight;
cnv.width = displayWidth;
cnv.height = displayHeight;
ctx.fillStyle = background.value;
ctx.fillRect(0, 0, cnv.width, cnv.height);

document.getElementById("color").oninput = function(){
    color = this.value;
}

document.getElementById("size").oninput = function(){
    width = this.value;
}

document.getElementById("save_image").onclick = function(){
    let image = cnv.toDataURL("image/jpg");
    this.href = image;
}

cnv.onmousedown = (e) => {
    setTimeout(() => {
        cnv.onmousemove = (event) => {
            if(tool == "Кисточка")
                ctx.fillStyle = color;
            else
                ctx.fillStyle = background.value;
            ctx.fillRect(event.offsetX - width/2, event.offsetY- width/2, width, width);
        };
    }, 1);
    if(tool == "Кисточка")
                ctx.fillStyle = color;
            else
                ctx.fillStyle = background.value;
    ctx.fillRect(e.offsetX - width/2, e.offsetY- width/2, width, width);
    cnv.onmouseup = () => {
        cnv.onmousemove = null;
    };
}

background.addEventListener('input', changeBackground);

function changeBackground(){
    ctx.fillStyle = background.value;
    ctx.fillRect(0, 0, cnv.width, cnv.height);
}

button.addEventListener("click", changeTool);

function changeTool(){
    let btn = document.getElementById("tool");
    if(btn.textContent == "Кисточка"){
        btn.textContent = "Ластик";
        tool = "Ластик";
    }
    else{
        btn.textContent = "Кисточка";
        tool = "Кисточка";
    }
}
window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
        
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.linewidth = 5;
    ctx.strokeRect(0,0,200,200);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.linewidth = 5;
    ctx.strokeRect(100,100,200,200);
    ctx.closePath();
    ctx.stroke();
});


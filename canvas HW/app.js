let canvas = document.getElementById('Canvas');
let ctx = canvas.getContext('2d');
ctx.fillRect(0,0, 100, 100)
ctx.fillStyle  = 'blue';
ctx.fillRect(100,100,100,100);
ctx.fillStyle = 'green';
ctx.fillRect (200,200, 100,100);
ctx.fillStyle = 'green';
ctx.fillRect (300,100, 100,100);
ctx.fillStyle  = 'blue';
ctx.fillRect(200,0,100,100);
ctx.fillStyle = 'green';
ctx.fillRect (400,0, 100,100);
ctx.fillStyle = 'green';
ctx.fillRect (100,300, 100,100);
ctx.fillStyle = 'green';
ctx.fillRect (0,400, 100,100);
ctx.fillStyle  = 'blue';
ctx.fillRect(0,200,100,100);
ctx.fillStyle  = 'violet';
ctx.fillRect(400,200,100,100);
ctx.fillStyle  = 'violet';
ctx.fillRect(300,300,100,100);
ctx.fillStyle  = 'violet';
ctx.fillRect(200,400,100,100);
ctx.fillStyle  = 'violet';
ctx.fillRect(500,100,100,100);
ctx.fillStyle  = 'violet';
ctx.fillRect(600,0,100,100);
ctx.fillStyle  = 'blue';
ctx.fillRect(600,200,100,100);
ctx.fillStyle  = 'blue';
ctx.fillRect(500,300,100,100);
ctx.fillStyle  = 'blue';
ctx.fillRect(400,400,100,100);
ctx.fillStyle  = 'black';
ctx.fillRect(600,400,100,100);

// ctx.beginPath();
// ctx.moveTo(250,200);
// ctx.lineTo(210,240);
// ctx.strokeStyle = 'red';
// ctx.stroke();
// ctx.close.Path();
let canvas1 = document.getElementById("Canvas");
let ctx1 = canvas1.getContext("2d");
// risujem zvezdu
function drawStar(centerX, centerY, arms, outerRadius, innerRadius) { //arms kolichestvo vetshin, outerRadius = rasstojanie ot centra k neshnim tochkam,innerradius = rasstojanie ot centra k vnutrennim tochkam)
   
    ctx.beginPath();
 
    for (let i = 1; i < 2 * Math.PI; i += Math.PI / arms) {
        let x = centerX + Math.cos(i) * outerRadius;
        let y = centerY + Math.sin(i) * outerRadius;
        ctx.lineTo(x, y);

        i += Math.PI / arms;
        x = centerX + Math.cos(i) * innerRadius;
        y = centerY + Math.sin(i) * innerRadius;
        ctx.lineTo(x, y);
    
    }
    ctx.fillStyle = 'yellow'; 
    ctx.fill();
    ctx.strokeStyle = 'blue';
    ctx.closePath();
    ctx.stroke();
}

// vizov funkcii
drawStar(canvas.width / 3.2, canvas.height / 4, 5, 50, 20);
drawStar(canvas.width / 2.3, canvas.height / 2.4, 6, 55, 20);
drawStar(canvas.width / 1.8, canvas.height / 1.7, 5, 45, 15);
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#0cffe3",
    "#0af4df",
    "#09eada",
    "#08dfd6",
    "#07d5d2",
    "#06cace",
    "#05c0c9",
    "#04b5c5",
    "#03abbf",
    "#029fb9",
    "#0194b3",
    "#008aae",
    "#007fa8",
    "#0074a2",
    "#006a9c",
    "#005f8b",
    "#004d72",
    "#003b59",
    "#003551",
    "#002f49",
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circles.length - index) / 13;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.35;
        y += (nextCircle.y - y) * 0.35;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();

// texto 3D

var text = document.getElementById('text')
var shadow = "";
for (var i = 0; i <30; i++){
    shadow+=(shadow? ',':'')+ -i*1+'px '+i*1+'px 0 #00a4aa';
}
text.style.textShadow = shadow;

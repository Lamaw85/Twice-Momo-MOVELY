var canvas = document.querySelector('canvas');

canvas.width = 600;
canvas.height = 600;


var c = canvas.getContext('2d');

// --- HEART DRAWING FUNCTION (For Ears) ---
        function drawHeart(ctx, x, y, width, height, color) {
            ctx.fillStyle = color;
            ctx.beginPath();
            
            // NOTE: The coordinates used inside this function (x, y, width, height) 
            // are relative to the current canvas origin. When we call translate 
            // later, we will draw at the origin (0, 0).

            // Start the path
            ctx.moveTo(x, y + height / 4);

            // Left side (defines left lobe and bottom point)
            ctx.bezierCurveTo(
                x - width / 2,      // Control Point 1 X
                y - height / 2,     // Control Point 1 Y
                x - width,          // Control Point 2 X
                y + height / 4,     // Control Point 2 Y
                x,                  // End X (Bottom point of the heart)
                y + height          // End Y
            );

            // Right side (defines right lobe and connects back to start)
            ctx.bezierCurveTo(
                x + width,          // Control Point 1 X
                y + height / 4,     // Control Point 1 Y
                x + width / 2,      // Control Point 2 X
                y - height / 2,     // Control Point 2 Y
                x,                  // End X (Connects back to the start X)
                y + height / 4      // End Y
            );
            
            ctx.closePath();
            ctx.fill();
            ctx.stroke(); // Outline the heart
        }


        // --- EARS (HEARTS) ---
        const earWidth = 100;
        const earHeight = 110;
        const earY = 190;
        const earXOffset = 180;
        const earCenterX_L = 300 - earXOffset;
        const earCenterX_R = 300 + earXOffset;
        const rotationAngle = Math.PI / 5; // 20 degrees in radians

        
        // Left Ear
        c.save(); 
        // 1. Move the origin to the center of the left ear
        c.translate(earCenterX_L, earY); 
        // 2. Rotate counter-clockwise (Negative angle)
        c.rotate(-rotationAngle); 
        // 3. Draw the heart at the new origin (0, 0)
        drawHeart(c, 0, 0, earWidth, earHeight, "#FFCDD2");
        c.restore(); 

        // Right Ear
        c.save(); 
        // 1. Move the origin to the center of the right ear
        c.translate(earCenterX_R, earY); 
        // 2. Rotate clockwise (Positive angle)
        c.rotate(rotationAngle); 
        // 3. Draw the heart at the new origin (0, 0)
        drawHeart(c, 0, 0, earWidth, earHeight, "#FFCDD2");
        c.restore();

//============================================//
//============================================//
c.beginPath();
//c.arc(300, 300, 180, 0, Math.PI *2, false);
c.ellipse(
    300,        // Center X coordinate
    330,        // Center Y coordinate
    165,         // Horizontal radius (radiusX - making it wide)
    155,         // Vertical radius (radiusY - making it short)
    0,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2 * Math.PI // End angle (full circle)
);
c.fillStyle = "#FFCDD2";
c.fill();
c.stroke();
//============================================//

//face
c.beginPath();
c.ellipse(
    300,        // Center X coordinate
    330,        // Center Y coordinate
    160,         // Horizontal radius (radiusX - making it wide)
    150,         // Vertical radius (radiusY - making it short)
    0,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2 * Math.PI // End angle (full circle)
);
c.fillStyle = "#FFCDD2";
c.setLineDash([5, 5]);
c.fill();
c.stroke();
c.setLineDash([]);
//============================================//

c.beginPath();
c.ellipse(
    295,        // Center X coordinate
    320,        // Center Y coordinate
    130 ,         // Horizontal radius (radiusX - making it wide)
    110,         // Vertical radius (radiusY - making it short)
    0,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2 * Math.PI // End angle (full circle)
);
c.fillStyle = "#ffffffff";
c.fill();

c.beginPath();
c.moveTo(182,373);
c.quadraticCurveTo(300, 550, 409,373);
c.fillStyle = "white";
c.fill();

//============================================//
//head bangs
c.beginPath();
c.fillStyle = "#FFCDD2"; 
c.arc(220,250,40,0,Math.PI,false);
c.arc(295,250,40,0,Math.PI,false);
c.arc(370,250,40,0,Math.PI,false);
c.fill()
//============================================//


//============================================//
//head bangs
c.beginPath();
c.fillStyle = "#FFCDD2"; 
c.ellipse(
    300,        // Center X coordinate
    250,        // Center Y coordinate
    120,         // Horizontal radius (radiusX - making it wide)
    45,         // Vertical radius (radiusY - making it short)
    0,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    Math.PI, // End angle (full circle)
    Math.PI * 2, // NEW End angle (2*PI radians
    false
);
c.fill();
//============================================//


//============================================//
//eyes
c.beginPath();
c.ellipse(
    230,        // Center X coordinate
    350,        // Center Y coordinate
    30,         // Horizontal radius (radiusX - making it wide)
    40,         // Vertical radius (radiusY - making it short)
    0,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2*Math.PI, // End angle (full circle)
    false
);
c.strokeStyle = "10px";
c.fillStyle = "white";
c.fill();
c.stroke();

c.beginPath();
c.ellipse(
    360,        // Center X coordinate
    350,        // Center Y coordinate
    30,         // Horizontal radius (radiusX - making it wide)
    40,         // Vertical radius (radiusY - making it short)
    0,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2*Math.PI, // End angle (full circle)
    false
);
c.strokeStyle = "10px";
c.fillStyle = "white";
c.fill();
c.stroke();
//============================================//

//============================================//
//pupils
c.beginPath();
c.ellipse(
    232,        // Center X coordinate
    348,        // Center Y coordinate
    28,         // Horizontal radius (radiusX - making it wide)
    38,         // Vertical radius (radiusY - making it short)
    0,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2*Math.PI, // End angle (full circle)
    false
);
c.strokeStyle = "10px";
c.fillStyle = "#2db7fa";
c.fill();
c.stroke();

c.beginPath();
c.ellipse(
    358,        // Center X coordinate
    348,        // Center Y coordinate
    28,         // Horizontal radius (radiusX - making it wide)
    38,         // Vertical radius (radiusY - making it short)
    0,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2*Math.PI, // End angle (full circle)
    false
);
c.strokeStyle = "10px";
c.fillStyle = "#2db7fa";
c.fill();
c.stroke();
//============================================//

//============================================//
//innerpupils
c.beginPath();
c.ellipse(
    232,        // Center X coordinate
    348,        // Center Y coordinate
    24,         // Horizontal radius (radiusX - making it wide)
    34,         // Vertical radius (radiusY - making it short)
    0,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2*Math.PI, // End angle (full circle)
    false
);
c.strokeStyle = "10px";
c.fillStyle = "black";
c.fill();
c.stroke();

c.beginPath();
c.ellipse(
    358,        // Center X coordinate
    348,        // Center Y coordinate
    24,         // Horizontal radius (radiusX - making it wide)
    34,         // Vertical radius (radiusY - making it short)
    0,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2*Math.PI, // End angle (full circle)
    false
);
c.strokeStyle = "10px";
c.fillStyle = "black";
c.fill();
c.stroke();
//============================================//


//============================================//
//highlights
c.beginPath();
c.ellipse(
    240,        // Center X coordinate
    330,        // Center Y coordinate
    8,         // Horizontal radius (radiusX - making it wide)
    4,         // Vertical radius (radiusY - making it short)
    0,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2*Math.PI, // End angle (full circle)
    false
);
c.strokeStyle = "10px";
c.fillStyle = "white";
c.fill();


c.beginPath();
c.ellipse(
    350,        // Center X coordinate
    330,        // Center Y coordinate
    8,         // Horizontal radius (radiusX - making it wide)
    4,         // Vertical radius (radiusY - making it short)
    0,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2*Math.PI, // End angle (full circle)
    false
);
c.strokeStyle = "10px";
c.fillStyle = "white";
c.fill();
//============================================//


//c.arc(300, 300, 180, 0, Math.PI *2, false);


//============================================//
//lips
c.beginPath();
c.moveTo(270,390);
c.quadraticCurveTo(295, 420, 320,390);
c.strokeStyle = "red"
c.lineWidth = 2;
c.stroke();
//============================================//

 

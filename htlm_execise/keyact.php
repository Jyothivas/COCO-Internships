<!DOCTYPE html>
<html>
<body>
<canvas id="myCanvas" width="200" heigth="100" style="border:2px solid #d3d3d3;">
</canvas>
<script>
var c =document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2 * Math.PI);
ctx.stroke();
</script>
        <div>
	<svg width="100" height="100">
 	<circle cx="50" cy="50" r="40"
  	stroke="green" stroke-width="4" fill="yellow" />
	</svg>
	</div>
<video width="320px" height="240" controls>
<source src="happycat.mp4" type="video/mp4">
</video>
<br>
<audio controls autoplay>
  <source src="catmeowing.mp3" type="audio/mpeg">
</audio>
</body>
</html>
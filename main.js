canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouse_event = "empty";
canvas.addEventListener("mousedown",my_mousedown);
var current_x,current_y;
function my_mousedown(e){
  mouse_event = "mousedown";
  radius = document.getElementById("inputRadius");
  color = document.getElementById("inputColour");
  width_of_line = document.getElementById("inputColour");
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
  mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
  mouse_event = "mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
  mouse_event = "mousemove";
  current_x = e.clientX - canvas.offsetLeft;
  current_y = e.clientY - canvas.offsetBottom;
  if(mouse_event = "mousedown"){
      console.log("Current position of X and Y coordinates = ");
      console.log("X =" + current_x + "Y =" + current_y);
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width_of_line;
      ctx.arc(current_x,current_y,radius,0,2*Math.PI);
  }
  function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
  }
}
function calculate(){
    var p=document.getElementById("p").value;
    var n=document.getElementById("n").value;
    var r=document.getElementById("r").value;
    var result=(p*n*r)/100;
    document.getElementById("result").innerHTML="THE SI FOR P=" + p + " N=" + n + "    R=" + r + " IS="+ result;
   // document.getElementById("submit").style.backgroundColor="#fff";
    
}
function bg_color(){
    var x=parseInt(Math.random()*256);
    var y=parseInt(Math.random()*256);
    var z=parseInt(Math.random()*256);
    var bgcolor="rgb("+x+","+y+","+z+")";
    document.body.style.backgroundColor=bgcolor;
}

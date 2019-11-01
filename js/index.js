var oBox=document.querySelector('.box')
oBox.onclick=function(){
	oBox.style.background='yellow'
}
setInterval(function(){
	oBox.style.background=randomColor()
},500)

function randomColor(){
    var str = '0123456789abcdef';//0-15
    var col = '#';
    for(var i = 0; i < 6; i++){
        var num = Math.floor(Math.random()*16);
        col += str[num];
    }
    return col;
}
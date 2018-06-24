//slideShow functional
var index = 1; 
showDiv(index);
function plusDiv(n){
	showDiv(index+=n);
}

function showDiv(n){
	var i, x = document.getElementsByClassName('mySlide');
	if(n > x.length){index = 1;}
	if(n < 1){index = x.length;}
	for( i = 0; i < x.length; i++){
		x[i].style.display = 'none';
	}
	x[index-1].style.display = 'block';
}


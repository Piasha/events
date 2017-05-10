var klik = document.getElementById('One');
var gallery = document.getElementById('gallery');
var show = document.getElementById('show');

klik.addEventListener("click", function(x){
	alert("hello");
	console.dir(x);
},false);

gallery.addEventListener("click", function(e){
	alert("Soto");
	console.dir(e);
},false);
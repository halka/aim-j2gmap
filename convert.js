function splitns(){
	var cord = document.forms.pos_form.cord.value;
// 	console.log(cord);
	var tmp_string = cord.replace(/([NS])/g, "$1A");
	var cord_splited = tmp_string.split("A")
	var ns = cord_splited[0].slice(-1);
	var ew = cord_splited[1].slice(-1);
	var lat60 = cord_splited[0].slice(0,-1).toString();
	var long60 = cord_splited[1].slice(0,-1).toString();
	var lat_h = lat60.slice(0,2);
	var lat_m = lat60.slice(2,4);
	var lat_s = lat60.slice(4);
	var long_h = long60.slice(0,3)
	var long_m = long60.slice(3,5);
	var long_s = long60.slice(5);
	var lat = parseInt(lat_h, 10) + ((lat_m / 60) + (lat_s / 3600));
	var long = parseInt(long_h,10) + ((long_m / 60) + (long_s / 3600));
	
	if(ns=="S"){
		lat = lat * -1;
	}
	if(ew=="W"){
		long = long * -1;
	}
	
	document.getElementById("converted").innerHTML="result: "+lat+","+long;
	window.open("http://maps.google.com/maps?q="+lat+","+long+"+");
}

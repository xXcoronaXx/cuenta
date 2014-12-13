var numero=0;
$(document).ready(function() {
	var incremento=1;
	$("#numero").html(0);
	$("#historial").html("");
	//gestos
	//txt = "jhjh008767n870";
	//txt = txt.replace(/\D/g,'');
	$$("#mas").swipeRight(function() {
		var num=$("#mas").html();
		num=num.replace(/\D/g,'');
		console.log(num);
		num=parseInt(num)+1;
		incremento=num;
    	$("#mas").html("+"+num);
  	});
	$$("#mas").swipeLeft(function() {
    	var num=$("#mas").html();
    	if(num!=1){
		num=num.replace(/\D/g,'');
		num=num-1;
		incremento=num;
    	$("#mas").html("+"+num);
    	}
  	});
	$("#mas").click(function(){
		numero=suma(incremento);
	});
	$("#menos").click(function(){
		numero=resta(incremento);
	});
	$("#reset").click(function(){
		numero=resetea();
	});
	$("#clear").click(function(){
		clear();
	});
});
function suma(inc){
	console.log("suma");
	var nuevoNumero=0;
	nuevoNumero=numero+inc;
	$("#numero").html(nuevoNumero);

	return nuevoNumero;
}

function resta(){
	console.log("resta");
	var nuevoNumero=0;
	if(numero!=0){
	nuevoNumero=numero-1;
	$("#numero").html(nuevoNumero);

	return nuevoNumero;
	}
	return 0;
}

function resetea(){
	$("#numero").html(0);
	$("#historial").slideDown("slow");
	$("#historial").prepend('<div><p class="fecha">'+fecha()+'</p>  <b>'+numero+'</b></div>');
	return 0;
}
function clear(){
	$("#numero").html(0);
	$("#historial").slideUp("slow");
	$("#historial").html("");
}
function fecha(){//problema con la segunda ejecucion de fecha
	var fecha = new Date();
	mes = fecha.getMonth();
	mes=mes+1;
	diaMes = fecha.getDate();
	diaSemana = fecha.getDay();
	anio = fecha.getFullYear();
	hora = fecha.getHours();
	min = fecha.getMinutes();
	seg = fecha.getSeconds();
	return diaMes + "/" + mes + "/" + anio + " - " + hora + ":" + min + ":" + seg
}
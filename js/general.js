var numero=0;
$(document).ready(function() {
	$("#numero").html(0);
	$("#mas").click(function(){
		numero=suma();
	});
	$("#menos").click(function(){
		numero=resta();
	});
	$("#reset").click(function(){
		numero=resetea();
	});
});
function suma(){
	console.log("suma");
	var nuevoNumero=0;
	nuevoNumero=numero+1;
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
	//añadir al historial
	return 0;
}
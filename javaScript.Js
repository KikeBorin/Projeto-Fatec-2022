function clicarAd(){
	
	var ad1 = document.querySelector(".ad1").value;
	var ad2 = document.querySelector(".ad2").value;
	var calcular = parseFloat(ad1.toString().replace("," , ".")) + parseFloat(ad2.toString().replace(",","."));
	document.querySelector(".resultadoAd").innerHTML = calcular.toFixed(2).toString().replace(".",",");
	}

function limparAd(){
	location.reload();
}

function clicarSub(){
	
	var sub1 = document.querySelector(".sub1").value;
	var sub2 = document.querySelector(".sub2").value;
	var calcular = parseFloat(sub1.toString().replace("," , ".")) - parseFloat(sub2.toString().replace(",","."));
	document.querySelector(".resultadoSub").innerHTML = calcular.toFixed(2).toString().replace(".",",");
	}

function limparSub(){
	location.reload();
}

function clicarMult(){
	
	var mult1 = document.querySelector(".mult1").value;
	var mult2 = document.querySelector(".mult2").value;
	var calcular = parseFloat(mult1.toString().replace("," , ".")) * parseFloat(mult2.toString().replace(",","."));
	document.querySelector(".resultadoMult").innerHTML = calcular.toFixed(2).toString().replace(".",",");
	}

function limparMult(){
	location.reload();
}

function clicarDiv(){
	
	var div1 = document.querySelector(".div1").value;
	var div2 = document.querySelector(".div2").value;
	var calcular = parseFloat(div1.toString().replace("," , ".")) / parseFloat(div2.toString().replace(",","."));
	document.querySelector(".resultadoDiv").innerHTML = calcular.toFixed(2).toString().replace(".",",");
	}

function limparDiv(){
	location.reload();
}

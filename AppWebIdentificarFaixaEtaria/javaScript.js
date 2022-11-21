

function mostrarIdade(){

	let entradaIdade = document.getElementById("inputIdade").value; //pegando o valor

	let saidaIdade = document.getElementById("inputFaixaEtaria") //Capturando o campo
	
	if(entradaIdade>= 0 && entradaIdade<15){
		saidaIdade.value = "Carregando...";
		setTimeout(()=>{
			saidaIdade.value = "Criança"; //setando o valor no campo inputFaixaEtaria
		}, 500)

	} 

	if(entradaIdade>= 15 && entradaIdade<30){
		saidaIdade.value = "Carregando...";
		setTimeout(()=>{
			saidaIdade.value = "Jovem"; //setando o valor no campo inputFaixaEtaria
		}, 500)
	} 

	if(entradaIdade>= 30 && entradaIdade<60){
		saidaIdade.value = "Carregando...";
		setTimeout(()=>{
			saidaIdade.value = "Adulto"; //setando o valor no campo inputFaixaEtaria
		}, 500)
	} 

	if(entradaIdade>= 60){
		saidaIdade.value = "Carregando..."; //setando o valor no campo inputFaixaEtaria
		setTimeout(()=>{
			saidaIdade.value = "Sábio";
		}, 500)
	} 
	

}





const setup = () => { 
	let btnOptellen=document.getElementById("btnOptellen");
	let btnAftrekken=document.getElementById("btnAftrekken");
	let btnVermenigvuldigen=document.getElementById("btnVermenigvuldigen");
	let btnDelen=document.getElementById("btnDelen");
	
	btnOptellen.addEventListener("click", optellen);
	btnAftrekken.addEventListener("click", aftrekken);
	btnVermenigvuldigen.addEventListener("click", vermenigvuldigen);
	btnDelen.addEventListener("click", delen);
} 

const optellen = () => {
	let txtOutput=document.getElementById("txtOutput");
	let txtLinks=document.getElementById("txtLinks");
	let txtRechts=document.getElementById("txtRechts");

	let o1=parseInt(txtLinks.value, 10);
	let o2=parseInt(txtRechts.value, 10);
	let resultaat = o1+o2;

	let resultaatTekst=o1+" + "+o2+" = "+resultaat;
	txtOutput.innerHTML=resultaatTekst;
}

const aftrekken = () => {

	let a1 = parseInt(txtLinks.value, 10);
	let a2 = parseInt(txtRechts.value, 10);
	let resultaat1 = a1-a2;

	let resultaatTekst1 = a1 + " - " + a2 + " = " + resultaat1;
	txtOutput.innerHTML=resultaatTekst1;
}

const vermenigvuldigen = () => {

	let v1 = parseInt(txtLinks.value, 10);
	let v2 = parseInt(txtRechts.value, 10);
	let resultaatVermenigvuldigen = v1 * v2;

	let resultaatTekst2 = v1 + " * " + v2 + " = " + resultaatVermenigvuldigen;
	txtOutput.innerHTML=resultaatTekst2;
}

const delen = () => {

	let d1 = parseInt(txtLinks.value, 10);
	let d2 = parseInt(txtRechts.value, 10);
	let resultaatDelen = d1 / d2;

	let resultaat3 = d1 + " / " + d2 + " = " + resultaatDelen;
	txtOutput.innerHTML=resultaat3;
}
 
window.addEventListener('load',setup); 


















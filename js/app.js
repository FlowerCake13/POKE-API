var xhr = new XMLHttpRequest();
xhr.open('GET', "https://pokeapi.co/api/v2/pokemon/13/", true);
xhr.send();
xhr.addEventListener("readystatechange", processReq, false);

function processReq(e){
	if (xhr.readyState == 4 && xhr.status == 200){
		//console.log(xhr)
		var response = JSON.parse(xhr.responseText);
		console.log(response.name);
	}
}
	var	statement = document.querySelector("#statement");
	var	title = document.querySelector("#title");
	var	button_agree = document.querySelector("#button-eens");
	var	button_disagree = document.querySelector("#button-oneens");
	var	button_unknown = document.querySelector("#button-geen");
	var back = document.querySelector("#backbutton");
	var all_buttons = document.querySelector(".vragenbuttons");
	var result = [];

	button_agree.onclick = function(){
		next("pro");
	}
	// button_agree.onclick = function(){
	// 	next("pro");
	// }
	// button_agree.onclick = function(){
	// 	next("pro");
	// }


	var score;
	var subjectsNR = 0;
	var partiesNR = 0;
	var vraag = 0;

window.onload = start();	

function start(){
	// showPartyOpinion();	
	displayQuestion();
	
}

// function load(){
// 	subjectsNR++;	
// 	var element = document.querySelectorAll(".partijstatement");
// 	for(var i = 0; i < element.length; i++){
// 		element[i].parentNode.removeChild(element[i]);
// 	}
// 	showPartyOpinion();
// }

// function showPartyOpinion(){
// 	for (subjectsNR; subjectsNR < subjects.length; subjectsNR++){ 
// 		for (partiesNR; partiesNR < parties.length; partiesNR++){

// 			var statement = subjects[subjectsNR].statement;	
// 			var title = subjects[subjectsNR].title;
// 			document.getElementById("title").innerHTML = title;
// 			document.getElementById("statement").innerHTML = statement; //loopt over de code heen om zo de titel en de statement
// 			// van de vraag zo te weergeven
			
// 			if(parties.length < partiesNR)
// 			var partyposition = subjects[subjectsNR].parties[partiesNR];
// 			console.log(partyposition);
// 			console.log(partiesNR);
// 			debugger;
// 			var partyname = subjects[subjectsNR].parties[partiesNR].name;
// 			var partyopinion = subjects[subjectsNR].parties[partiesNR].opinion;	//variabelen voor de data, door de loop
// 			//verandert deze steeds opnieuw
// 			console.log(partyposition);

// 			displayParties();
// 			//hier worden de details en de bijbehorende nodes gegenereerd die de partij en hun mening weergeven over bepaalde
// 			//statements.

			
// 			//append deze statement bij de eens, oneens of geen mening, gebasseerd op de statement.
// 		}
// 	}

// }





function showParties(){
	for (var subjectsNR; subjectsNR < subjects.length; subjectsNR++){ 
		for (var partiesNR; partiesNR < parties.length; partiesNR++){

			var statement = subjects[subjectsNR].statement;	
			var title = subjects[subjectsNR].title;
			document.getElementById("title").innerHTML = title;
			document.getElementById("statement").innerHTML = statement; //loopt over de code heen om zo de titel en de statement
			// van de vraag zo te weergeven
			
			if(parties.length < partiesNR)
			var partyposition = subjects[subjectsNR].parties[partiesNR];
			console.log(partyposition);
			console.log(subjectsNR);
			
			var partyname = subjects[subjectsNR].parties[partiesNR].name;
			var partyopinion = subjects[subjectsNR].parties[partiesNR].opinion;	//variabelen voor de data, door de loop
			//verandert deze steeds opnieuw
			console.log(partyposition);

			displayQuestion(subjectsNR);
			//hier worden de details en de bijbehorende nodes gegenereerd die de partij en hun mening weergeven over bepaalde
			//statements.

			
			//append deze statement bij de eens, oneens of geen mening, gebasseerd op de statement.
		}
	}
}

function back(){
	result.pop();
}

function next(event){
	if(event == "pro"){
		console.log(event);
	}
	vraag++;
	displayQuestion(vraag);
	result.push(data = {
		Vraag: vraag,
		antwoord: event
	});
	console.log(result);
}

function displayQuestion(subjectsNR){
	var statement = subjects[vraag].statement;	
	var title = subjects[vraag].title;
	document.getElementById("title").innerHTML = title;
	document.getElementById("statement").innerHTML = statement; //loopt over de code heen om zo de titel en de statement
}



function displayParties(){
	var party = document.createElement("DETAILS");
	party.className = "partijstatement";
	var partysummary = document.createElement("SUMMARY");
	var partysummarytext = document.createTextNode(partyname);
	partysummary.appendChild(partysummarytext);
	var partylong = document.createElement("P");
	var partylongtext = document.createTextNode(partyopinion);
	partylong.appendChild(partylongtext);
	party.appendChild(partysummary);
	party.appendChild(partylong);

	if (partyposition == 'pro') {
		document.getElementById('meningeens').appendChild(party);
	} else if (partyposition == 'contra') {
		document.getElementById('meningoneens').appendChild(party);
	} else {
		document.getElementById('meninggeen').appendChild(party);
	}
}
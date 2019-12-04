//Dit maakt de Canvas

	// Box width
	var bw = 800;
	// Box height
	var bh = 800;
	// Padding
	var p = 0;
	// 1 stap is 31 px
	var stap = 31;
	// X Punt
	var XP = 0;
	// Y Punt
	var YP = 0;
	// Links Punt
	var LP = 1;
	// RechtsPunt
	var RP = 1;


	//Defineerd de canvas
	var canvas = document.getElementById("Canvas");
	var context = canvas.getContext("2d");

	//Maakt de hokjes, en 40 is de afstand tussen de hokjes zegmaar. Groter is grotere blokjes.
	function drawBoard(){
		for (var x = 0; x <= bw; x += 31) {
		context.moveTo(0.5 + x + p, p);
		context.lineTo(0.5 + x + p, bh + p);
	}

		for (var x = 0; x <= bh; x += 31) {
		context.moveTo(p, 0.5 + x + p);
		context.lineTo(bw + p, 0.5 + x + p);
	}                                    
	//lijnen en vakjes
	context.strokeStyle = "black";
	context.stroke();
	context.fillStyle = "gray";
	context.fillRect(stap * XP,stap * YP,stap * RP,stap * LP); // Maak een lijn101
	}
	drawBoard();

//Hier eindigt Canvas code
//Hier begint Algoritme code

	var StartP = 5;
	var andereP = new Array;

	andereP.push(XP * 2);
	andereP.push(YP * 2);
	//andereP.push(var3);
	//andereP.push(var4);

	//Tester voor punten met rooie lijn trekken
	function drawRedline(){
		for (var x = 0; x <= bw; x += 31) {
		context.moveTo(StartP,StartP);
		context.lineTo(31,5);
	}                  
	
	context.strokeStyle = "black";
	context.stroke();
	
	}
	drawRedline();
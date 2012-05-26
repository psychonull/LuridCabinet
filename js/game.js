
(function(){
	
	Pac.repository	
		.addResources({
			'school_hallway':'images/school_hallway.jpg',
			'school_front':'images/school_front.png',
			'hammock':'images/hammock.png'
		});

	var school = new Pac.Scene('schoolFront', 'Outside of my school', 'school_front');
	
	var leftHammock = new Pac.Obj('left hammock', 'hammock', {
			x: 90,
			y: 230,
			width: 40,
			height: 100
	});
	
	var rightHammock = new Pac.Obj('right hammock', 'hammock', {
			x: 135,
			y: 233,
			width: 40,
			height: 100
	});
	
	var hammockFrames = [];
	for(var i=0; i<160; i+=40){
		hammockFrames.push({
			x: i,
			y: 0,
			width: 40,
			height: 100
		});	
	}
	
	leftHammock.addAnimation('idle', {
		frames: hammockFrames,
		framesPerStep: 10,
		framesPerRound: 10
	});
	
	rightHammock.addAnimation('idle', {
		frames: hammockFrames,
		framesPerStep: 15,
		framesPerRound: 15
	});
	
	school.addObj(leftHammock).addObj(rightHammock);
	
	Pac.config({
		commandBar: {
			enabled: true,
			color: 'rgba(0,0,0,0.7)',
			height: 30
		},
		text: {
			font: '20px saint', 
			x: 20,
			fontColor: 'white'
		},
		textCmd: {
			font: '20px saint-serif',
			color: 'yellow',
			colorSelect: 'white'
		}
	});
	
	var intro = new Pac.Scene('intro', 'a sweet introduction', null, {
		drawHook: function(){
 			var ctx = Pac.getContext();  
   			ctx.fillStyle = "rgb(0,0,0)";  
 			ctx.fillRect (0, 0, attrs.width(), attrs.height()); 
		}
	});


	Pac.init('canvas').addScene(intro).addScene(school);
	//Pac.toggleCommandBar();

	Pac.changeToScene('intro');
	//txtIntro = new Pac.TextManager({fontColor: 'white'});
	txtIntro = Pac.getMainTextManager();
	
	//Pac.changeToScene('schoolFront');
	
	Pac.repository.on('complete', function(){
		Pac.start();	
		txtIntro.writeMany(['Un dia común', 'En un país extraño', 'el enano puto estaba en la escuela'], 70)
			.setOnClear(function(){Pac.changeToScene('schoolFront');});	

	}).on('report', function(prg){
		
	}).on('error', function(err){
		console.log(err);
	}).load();	
	
})();

// FULLSCREEN 
document.documentElement.addEventListener('keypress', function(ev){
	var keycd = ev.which || ev.keyCode;
	if(ev.ctrlKey && [10, 13].indexOf(keycd) !== -1 ){
			var canvas = document.getElementById('canvas'),
	    requestFullscreen = canvas.requestFullscreen || canvas.mozRequestFullScreen || canvas.webkitRequestFullScreen;
	if(requestFullscreen){
	    requestFullscreen.call(canvas);
	}
	}
	
}, false);

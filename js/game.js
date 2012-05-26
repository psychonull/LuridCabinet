
(function(){
	
	Pac.repository	
		.addResources({
			'school_hallway':'images/school_hallway.jpg',
			'school_front':'images/school_front.png'
		});

	var school = new Pac.Scene('schoolFront', 'Outside of my school', 'school_front');
	
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
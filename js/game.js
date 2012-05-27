
(function(){
	
	Pac.repository	
		.addResources({
			'school_front':'images/school_front.png',
			'hammock':'images/hammock.png',
			'kid': 'images/kid_sprites.png'
		});

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
	
	
	var kid = new Pac.Character('A kid', 'kid', {
			x: 185,
			y: 200,
			width: 70,
			height: 116,
			hasDiagonals: true
	});
	
	var kidUpRightFrames = [];
	for(var i=70; i<350; i+=70){
		kidUpRightFrames.push({
			x: i,
			y: 116,
			width: 70,
			height: 116
		});	
	};
	
	var kidUpLeftFrames = [];
	for(var i=350; i<630; i+=70){
		kidUpLeftFrames.push({
			x: i,
			y: 116,
			width: 70,
			height: 116
		});	
	};
	
	var kidDownRightFrames = [];
	for(var i=70; i<350; i+=70){
		kidDownRightFrames.push({
			x: i,
			y: 0,
			width: 70,
			height: 116
		});	
	};
	
	var kidDownLeftFrames = [];
	for(var i=350; i<630; i+=70){
		kidDownLeftFrames.push({
			x: i,
			y: 0,
			width: 70,
			height: 116
		});	
	};
	
	var idleFrames = [];
	idleFrames.push({
			x: 0,
			y: 0,
			width: 70,
			height: 116
	});
	idleFrames.push({
			x: 630,
			y: 0,
			width: 70,
			height: 116
	});
	idleFrames.push({
			x: 0,
			y: 116,
			width: 70,
			height: 116
	});
	idleFrames.push({
			x: 630,
			y: 116,
			width: 70,
			height: 116
	});
	
	kid.addAnimation('idle', {
		frames: [idleFrames[0]],
		framesPerStep: 5,
		framesPerRound: 300
	}).addAnimation('idle-down-right', {
		frames: [idleFrames[0]],
		framesPerStep: 5,
		framesPerRound: 300
	}).addAnimation('idle-down-left', {
		frames: [idleFrames[1]],
		framesPerStep: 5,
		framesPerRound: 300
	}).addAnimation('idle-up-right', {
		frames: [idleFrames[2]],
		framesPerStep: 5,
		framesPerRound: 300
	}).addAnimation('idle-up-left', {
		frames: [idleFrames[3]],
		framesPerStep: 5,
		framesPerRound: 300
	}).addAnimation('up-right', {
		frames: kidUpRightFrames,
		framesPerStep: 5,
		framesPerRound: 0
	}).addAnimation('up-left', {
		frames: kidUpLeftFrames,
		framesPerStep: 5,
		framesPerRound: 0
	}).addAnimation('down-right', {
		frames: kidDownRightFrames,
		framesPerStep: 5,
		framesPerRound: 0
	}).addAnimation('down-left', {
		frames: kidDownLeftFrames,
		framesPerStep: 5,
		framesPerRound: 0
	});
	
	var area = {};
	area.polygons = [[
				{x: 0, y: 0},
				{x: 800, y: 0},
				{x: 800, y: 450},
				{x: 0, y: 450}
			]
	];
	
	var walkableArea = new Pac.Path(area, kid);
	
	var school = new Pac.Scene('schoolFront', 'Outside of my school', 'school_front', {startingPosition: {x:120, y:425}});
	
	school.addObj(leftHammock)
		.addObj(rightHammock)
		.setPath(walkableArea);
	
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
	
	/*
	var intro = new Pac.Scene('intro', 'a sweet introduction', null, {
		drawHook: function(){
 			var ctx = Pac.getContext();  
   			ctx.fillStyle = "rgb(0,0,0)";  
 			ctx.fillRect (0, 0, attrs.width(), attrs.height()); 
		}
	});
	
	Pac.init('canvas').createCharacter(kid).addScene(intro).addScene(school);
	*/

	Pac.init('canvas').createCharacter(kid).addScene(school);
	Pac.changeToScene('schoolFront');
	
/*
	Pac.changeToScene('intro');
	txtIntro = Pac.getMainTextManager();
*/
	
	Pac.repository.on('complete', function(){
		Pac.start();	
		/*
		txtIntro.writeMany(['Un dia común', 'En un país extraño', 'el enano puto estaba en la escuela'], 70)
			.setOnClear(function() {
				Pac.changeToScene('schoolFront');
		});	
		*/
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

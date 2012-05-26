
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
			font: '50px saint', 
			x: 20
		},
		textCmd: {
			font: '20px saint-serif',
			color: 'yellow',
			colorSelect: 'white'
		}
	});
	
	Pac.init('canvas').addScene(school);
	
	Pac.changeToScene('schoolFront');
	
	Pac.repository.on('complete', function(){
		Pac.start();		
	}).on('report', function(prg){
		
	}).on('error', function(err){
		console.log(err);
	}).load();	
	
})();

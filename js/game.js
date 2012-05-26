
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

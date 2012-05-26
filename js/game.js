
(function(){
	
	Pac.repository	
		.addResources({
			'school':'images/school_hallway.jpg'
		});

	var school = new Pac.Scene('schoolHallway', 'The hallway of my school', 'school');
	
	Pac.config({
		commandBarEnabled: true,
		text: {font: '50px saint', x: 20},
		textCmd: {font: '20px saint-serif'}
	});
	
	Pac.init('canvas').addScene(school);
	
	Pac.changeToScene('schoolHallway');
	
	Pac.repository.on('complete', function(){
		Pac.start();		
	}).on('report', function(prg){
		
	}).on('error', function(err){
		console.log(err);
	}).load();	
	
})();

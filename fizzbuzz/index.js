const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('fizzBuzz', function(args){
	var chaine = "";
	if(args % 3 == 0){
                chaine = chaine + "Fizz";
        }
	if(args % 5 == 0){
                chaine = chaine + "Buzz";
        }
	if(chaine == ""){
		console.log(args);
	}
	else{
		console.log(chaine);
	}
});

emitter.emit("fizzBuzz", 15);
emitter.emit("fizzBuzz", 8);
emitter.emit("fizzBuzz",9);
emitter.emit("fizzBuzz",20);

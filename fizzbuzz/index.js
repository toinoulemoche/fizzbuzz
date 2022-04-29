const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('fizzBuzz', function(args){
	const chaine = "";
	if(args % 3 == 0){
                chaine = chaine + "Fizz";
        {
	else if(args % 5 == 0){
                chaine = chaine + "Buzz";
        {
	else{
		chaine = args;
	}
	console.log(chaine);
}


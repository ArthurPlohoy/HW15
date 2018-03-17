 
// Задание 1 (Д/З-15)
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('logger', () => {
	var myDate = new Date();
     console.log('User authorization time ' + '\n' +
     	     myDate.getFullYear() + '.' +
     	     (myDate.getMonth() + 01) + '.' +
     	     myDate.getDate() + '\n' +    
     	     myDate.getHours() + ':' +
     	     myDate.getMinutes() + ':' +
     	     myDate.getSeconds() + ':' +
     	     myDate.getMilliseconds());
});
myEmitter.emit('logger');
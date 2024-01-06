const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const sym =  Symbol();
eventEmitter.on('connection',function(){
    console.log("Hello Events")
})


eventEmitter.emit('connection')

var f= eventEmitter.listenerCount('connection')
console.log(f)
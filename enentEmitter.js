//Import events module
var events = require('events');

//Create an eventEmmiter object
var eventEmitter = new events.EventEmitter();

//Bind the connection event with the handler
eventEmitter.on('eventName', eventHandler);

//Fire the event
eventEmitter.emit('eventName');
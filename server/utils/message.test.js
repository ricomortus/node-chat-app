var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Rico';
    var text = 'Some message';
    var message = generateMessage(from,text);
    
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Rico';
    var latitude = 44.4880503;
    var longitude = 26.0841656;
    var url = 'https://www.google.com/maps?q=44.4880503,26.0841656';
    var message = generateLocationMessage(from, latitude, longitude);
    
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
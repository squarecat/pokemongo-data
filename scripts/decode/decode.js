var proto = require('pokemongo-protobuf');
var fs = require('fs');

// Read in the raw master file
var buffer = fs.readFileSync('./0000015638B96885_GAME_MASTER');

// parse it using the root messageType
var data = proto.parse(buffer, 'POGOProtos.Networking.Responses.DownloadItemTemplatesResponse');

// JSON stringify the output
console.log(JSON.stringify(data, null, 2))

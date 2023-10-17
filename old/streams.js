const fs = require('fs');

//read stream from a specific file, also the encoding display it in text format 
const readStream = fs.ReadStream('./docs/blog3.txt', {encoding: 'utf-8'} );
const writeStream = fs.WriteStream('./docs/blog4.txt');

/*
//adding event listener to the stream
readStream.on('data', (chunk)=>{
console.log('----NEW CHUNK-----');
//log the chunk to the terminal 
console.log(chunk);
//Split the chunk with a text
writeStream.write('\nNEW CHUNK\n');
// write the chunk  gotten to the new file
writeStream.write(chunk);

});  
*/

//Piping : Does same thing above but little line of code

readStream.pipe(writeStream);
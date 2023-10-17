const fs = require('fs');

//NOTE: Reading Files

/*fs.readFile('./docs/blog.txt',  (err, data)=>{
if (err) {
    console.log(err);
}
console.log(data.toString());
});
console.log('reading!!') */



//NOTE: Writing Files 

/*fs.writeFile('./docs/blog.txt', 'hello, Chambo', ()=>{
    console.log('File written successfully');
});

fs.writeFile('./docs/blog2.txt', 'Pluto no dey show for map again', ()=>{
    console.log('File written successfully');
}); */



//NOTE: create directories

/*fs.mkdir('./assets', (err)=>{
    if (err) {
        console.log(err);
    }
    console.log('folder created');
}); */


//create directory/folder if it doesn't exist else remove directory

/*if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err)=>{
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else (fs.rmdir('./assets', (err)=>{
    if (err){
    console.log(err);
      }
console.log('folder deleted');
})); */


//NOTE: Deleting Files

if (fs.existsSync('./docs/createme.txt')) {
    fs.unlink('./docs/createme.txt', (err)=>{
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
} else {
    console.log('file not found');
}
var express = require('express');
var app = express();
const path = require('path');
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/NODE_MYSQL/index.html'));
});

app.listen(8000,function(){
    console.log('Servidor corriendo en el puerto 8000');
});

var mysql = requier('mysql');
var connection = mysql.createConnection({//Crear conexión del archivo con la base de datos
    host: 'localhost', //local
    user: 'root', //usuario
    password: '', //contraseña
    database: 'usuario'//Nombre de la Base de Datos
});

connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('COnexion exitosa.');
    }
});
conexion.query('SELECT * FROM usuario', function(error,results, fields){
    ir (error)
    throw error;
    results.forEach(result =>{
        console.log(result);
    });
})
connection.end();
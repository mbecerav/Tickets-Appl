
// Comando para establecr conexion Activo-Activo
var socket = io();
var label = document.getElementById('lblNuevoTicket');

socket.on('connect', function(){
    console.log('Conectado al servidor');
})

socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
})

socket.on('estadoActual', function(resp){
    console.log (resp.actual);
    label.textContent = resp.actual;
})

$('button').on('click', function(){
    socket.emit('siguienteTicket', null, function(siguienteTicket){
        label.textContent = siguienteTicket;
    });
})
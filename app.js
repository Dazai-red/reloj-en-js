const containerDate = document.getElementById('date');
const containerClock = document.getElementById('clock');

let date = new Date();

const dayWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const monthYear = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

containerDate.innerHTML = `${dayWeek[date.getDay()]}, ${date.getDate()} de ${monthYear[date.getMonth()]} de ${date.getFullYear()}`;

setInterval(()=>{
    let hour = new Date();
    containerClock.innerHTML = hour.toLocaleTimeString();
}, 1000)
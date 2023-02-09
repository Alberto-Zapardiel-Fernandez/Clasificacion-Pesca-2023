/* Función para obtener todos los nombres de los pescadores */
const getNombres = () => {
  const nombresTH = document.querySelectorAll('thead tr th');
  for (const nombre of nombresTH) {
    /* En cada nombre, que no sea ⬇️ calculamos su peso total */
    if (nombre.textContent !== 'Salidas⬇️') {
      calcular(nombre.textContent.trim().toLowerCase().replace(' ', '-'));
    }
  }
};

//Función que calcula el peso total
const calcular = (nombre) => {
  /* Según el nombre obtenemos todos sus casillas */
  const pesoTotal = document.getElementsByClassName(nombre);
  let total = 0;
  /* Obtenemos cada valor parseado a número y lo sumamos al total */
  for (const peso of pesoTotal) {
    total += Number(peso.textContent);
  }
  /* Lo ponemos en la zona de los totales de cada pescador */
  document.getElementById(nombre).textContent = `${redondea(total)} Kg`;
};

//Función para redondear con 2 decimales
const redondea = (total) => Math.round(total * 100.0) / 100.0;

document.addEventListener('DOMContentLoaded', getNombres);

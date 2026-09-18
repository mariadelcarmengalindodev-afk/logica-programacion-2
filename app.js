const inputTemperatura = document.querySelector('#temp');
const convertirFahrenheit = document.querySelector('#fahrenheit');
const convertirKelvin = document.querySelector('#kelvin');
const formulario = document.querySelector('#temp-form');

formulario.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const valorIngresado = inputTemperatura.value.trim();
  const valorNumerico = Number(valorIngresado);

  // Validacion 
  if (valorIngresado === '' || isNaN(valorNumerico)) {
    alert('Error: ¡No ingresaste un número válido!');
    convertirFahrenheit.textContent = '';
    convertirKelvin.textContent = '';
    inputTemperatura.value = '';
    return;
  }

  // Conversión
  const fahrenheit = (valorNumerico * 1.8) + 32;
  const kelvin = valorNumerico + 273.15;

  // Imprime
  convertirFahrenheit.textContent = `${fahrenheit}`;
  convertirKelvin.textContent = `${kelvin}`;
});
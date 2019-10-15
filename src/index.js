document.getElementById('root').style.display = 'none';
document.getElementById('vcifrar').style.display = 'none';
document.getElementById('vdescifrar').style.display = 'none';
const bienvenido = document.getElementById('bienvenido');
bienvenido.addEventListener('click', () => {
  document.getElementById('root').style.display = 'block';
  document.getElementById('bienvenido').style.display = 'none';
});
const pagcifrar = document.getElementById('pagcifrar');
pagcifrar.addEventListener('click', () => {
  document.getElementById('vcifrar').style.display = 'block';
  document.getElementById('root').style.display = 'none';
});
const pagdescifrar = document.getElementById('pagdescifrar');
pagdescifrar.addEventListener('click', () => {
  document.getElementById('vdescifrar').style.display = 'block';
  document.getElementById('root').style.display = 'none';
});
const limpiar = document.getElementById('limpiar');
limpiar.addEventListener('click', () => {
  document.getElementById('textci1').value = '';
  document.getElementById('textci2').value = '';
  document.getElementById('textci3').value = '';
  document.getElementById('textdes1').value = '';
  document.getElementById('textdes2').value = '';
  document.getElementById('textdes3').value = '';
});
const limpiar1 = document.getElementById('limpiar1');
limpiar1.addEventListener('click', () => {
  document.getElementById('textci1').value = '';
  document.getElementById('textci2').value = '';
  document.getElementById('textci3').value = '';
  document.getElementById('textdes1').value = '';
  document.getElementById('textdes2').value = '';
  document.getElementById('textdes3').value = '';
});
const regresar = document.getElementById('regresar');
regresar.addEventListener('click', () => {
  document.getElementById('root').style.display = 'block';
  document.getElementById('vcifrar').style.display = 'none';
  document.getElementById('vdescifrar').style.display = 'none';
});
const regresar1 = document.getElementById('regresar1');
regresar1.addEventListener('click', () => {
  document.getElementById('root').style.display = 'block';
  document.getElementById('vcifrar').style.display = 'none';
  document.getElementById('vdescifrar').style.display = 'none';
});
const cifrar = document.getElementById('cifrar');
cifrar.addEventListener('click', () => {
  const nombre = document.getElementById('textci1').value;
  const posiciones = document.getElementById('textci2').value;
  document.getElementById('textci3').value = window.cipher.encode(posiciones, nombre);
});
const descifrar = document.getElementById('descifrar');
descifrar.addEventListener('click', () => {
  const clave = document.getElementById('textdes1').value;
  const espacio = document.getElementById('textdes2').value;
  document.getElementById('textdes3').value = window.cipher.decode(espacio, clave);
});

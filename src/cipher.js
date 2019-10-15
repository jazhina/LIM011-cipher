window.cipher = {
  encode: (posiciones, nombre) => {
    let palabracifrada = '';
    for (let i = 0; i < nombre.length; i += 1) {
      const codigo = nombre.charCodeAt(i);
      if (codigo >= 65 && codigo <= 90) {
        const posicion = ((codigo - 65 + parseInt(posiciones, 0)) % 26) + 65;
        const letra = String.fromCharCode(posicion);
        palabracifrada += letra;
      } else if (codigo >= 97 && codigo <= 122) {
        const posicion = ((codigo - 97 + parseInt(posiciones, 0)) % 26) + 97;
        const letra = String.fromCharCode(posicion);
        palabracifrada += letra;
      } else if (codigo === 32) {
        palabracifrada += '*';
      }
    }
    return palabracifrada;
  },
  decode: (espacio, clave) => {
    let resultado = '';
    for (let i = 0; i < clave.length; i += 1) {
      const caracter = clave.charCodeAt(i);
      if (caracter >= 65 && caracter <= 90) {
        const decifra = String.fromCharCode(((caracter - 90 - parseInt(espacio, 0)) % 26) + 90);
        resultado += decifra;
      } else if (caracter >= 97 && caracter <= 122) {
        const decifra = String.fromCharCode(((caracter - 122 - parseInt(espacio, 0)) % 26) + 122);
        resultado += decifra;
      } else if (caracter === 42) {
        resultado += ' ';
      }
    }
    return resultado;
  },
};

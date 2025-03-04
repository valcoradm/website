const Validator = {
  rut: (rut) => {
    // Eliminar puntos y guiones del RUT
    rut = rut.replace(/[\.-]/g, "");

    // Verificar longitud mínima
    if (rut.length < 2) return false;

    // Separar cuerpo y dígito verificador
    const rutBody = rut.slice(0, -1);
    const dv = rut.slice(-1).toUpperCase();

    // Validar que el cuerpo solo contenga números
    if (!rutBody.match(/^\d+$/)) return false;

    // Calcular dígito verificador
    let suma = 0;
    let multiplicador = 2;

    // Recorrer cada dígito de derecha a izquierda
    for (let i = rutBody.length - 1; i >= 0; i--) {
      suma += parseInt(rutBody.charAt(i)) * multiplicador;
      multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const dvEsperado = 11 - (suma % 11);
    let dvCalculado;

    if (dvEsperado === 11) dvCalculado = '0';
    else if (dvEsperado === 10) dvCalculado = 'K';
    else dvCalculado = dvEsperado.toString();

    // Comparar dígito verificador calculado con el proporcionado
    return dv === dvCalculado;
  },
};

export default Validator;

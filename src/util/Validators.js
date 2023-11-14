const Validator = {
  rut: (rut) => {
    // Eliminar puntos y guiones del RUT
    rut = rut.replace(/[\.-]/g, "");

    // Separar el RUT en número y dígito verificador
    let rutNumero = rut.slice(0, -1);
    let rutVerificador = rut.slice(-1).toUpperCase(); // Convertir a mayúscula

    // Calcular el dígito verificador esperado
    let suma = 0;
    let multiplicador = 2;

    for (let i = rutNumero.length - 1; i >= 0; i--) {
      suma += parseInt(rutNumero.charAt(i)) * multiplicador;

      multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }

    const digitoVerificadorEsperado = 11 - (suma % 11);
    const digitoVerificador =
      digitoVerificadorEsperado === 10
        ? "K"
        : digitoVerificadorEsperado.toString();

    // Verificar si el dígito verificador ingresado coincide con el esperado
    return rutVerificador === digitoVerificador;
  },
};

export default Validator;

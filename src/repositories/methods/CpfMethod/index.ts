export const CpfMethod = (value: string | number) => {
  try {
    let cpf = value.toString();
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf.length !== 11) {
      return false;
    }

    for (var i = 0; i < 10; i++) {
      if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
        break;
      }
      if (i === 9) {
        return false;
      }
    }

    var soma = 0;
    for (var j = 0; j < 9; j++) {
      soma += parseInt(cpf.charAt(j)) * (10 - j);
    }
    var resto = soma % 11;
    var digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
      return false;
    }

    soma = 0;
    for (var k = 0; k < 10; k++) {
      soma += parseInt(cpf.charAt(k)) * (11 - k);
    }
    resto = soma % 11;
    var digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

    if (parseInt(cpf.charAt(10)) !== digitoVerificador2) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
};

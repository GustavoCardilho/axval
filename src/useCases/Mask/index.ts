import { MaskInputDTO, ResponseMaskDTO } from "./mask.dto";

export const MaskMethod = (input: MaskInputDTO): ResponseMaskDTO => {
  try {
    const { value, mask } = input;

    let masked = "";
    let valueIndex = 0;

    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === "0") {
        masked += value[valueIndex] || ""; // Adiciona o valor de value[valueIndex] se existir, caso contrário adiciona uma string vazia
        valueIndex++;
      } else {
        masked += mask[i];
      }
    }

    let result = masked;
    const regex = /[!@#$%^&*(),.?":{}|<>;]/;
    let maskedlength = masked.length;
    if (regex.test(masked.charAt(maskedlength - 1))) {
      for (let i = 0; i < value.length; i++) {
        result = masked.substring(0, masked.length - 1);
      }
    }

    const response = {
      success: true,
      message: "Máscara aplicada com sucesso",
      data: result,
    };

    if (input.onAfterMask) {
      input.onAfterMask(response);
    }

    return response;
  } catch {
    return {
      success: false,
      message: "Falha ao aplicar a máscara",
      data: input.value,
    };
  }
};

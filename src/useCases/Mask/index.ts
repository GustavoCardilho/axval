import { MaskInputDTO, ResponseMaskDTO } from "./mask.dto";

export const MaskMethod = (input: MaskInputDTO): ResponseMaskDTO => {
  try {
    let { value, mask } = input;

    let masked = "";
    let valueIndex = 0;

    const regexValue = /[^a-zA-Z]/g;

    const removeCharacters = input.isRemoveCharacters == false ? input.isRemoveCharacters : true;
    const representativeCharacter = input.representativeCharacter || "0";

    if (regexValue.test(value) && removeCharacters) {
      const regex = /[^0-9]/g;
      value = value.replace(regex, "");
    }

    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === representativeCharacter) {
        masked += value[valueIndex] || "";
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

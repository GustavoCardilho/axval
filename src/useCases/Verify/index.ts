import MethodsRepository from "../../repositories/MethodsRepository";
import { VerifyAmout } from "./components/VerifyAmount";
import { VerifyType } from "./components/verifyType";
import { ResponseVerifyDTO, VerifyInputDTO } from "./verify.dto";

export const VerifyMethod = (input: VerifyInputDTO): ResponseVerifyDTO => {
  try {
    let verify = VerifyType(input.type, input.value);
    let amount = VerifyAmout(input.value, input.type, input.min, input.max);

    if (amount) {
      return amount;
    }

    if (verify) {
      return { success: true, message: "O valor é válido", type: input.type };
    }

    return { success: false, message: "O valor é inválido", type: input.type };
  } catch {
    return { success: false, message: "Error", type: input.type };
  }
};

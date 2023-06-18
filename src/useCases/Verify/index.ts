import MethodsRepository from "../../repositories/MethodsRepository";
import { ResponseVerifyDTO, VerifyInputDTO } from "./verify.dto";

export const VerifyMethod = (input: VerifyInputDTO): ResponseVerifyDTO => {
  try {
    let verify;
    if (input.type == "email" && typeof input.value == "string") {
      verify = MethodsRepository.email(input.value);
    }
    if (input.type == "phone" && typeof input.value == "string") {
      verify = MethodsRepository.phone(input.value);
    }
    if (input.type == "cpf" && typeof input.value == "string") {
      verify = MethodsRepository.cpf(input.value);
    }
    if (input.type == "uuid" && typeof input.value == "string") {
      verify = MethodsRepository.uuid(input.value);
    }

    if (input.min) {
      if (typeof input.value == "string") {
        if (input.value.length < input.min) {
          return {
            success: false,
            message: "O valor é menor que o mínimo permitido",
            type: input.type,
          };
        }
      }
      if (typeof input.value == "number") {
        if (input.value < input.min) {
          return {
            success: false,
            message: "O valor é menor que o mínimo permitido",
            type: input.type,
          };
        }
      }
    }

    if (input.max) {
      if (typeof input.value == "string") {
        if (input.value.length > input.max) {
          return {
            success: false,
            message: "O valor é maior que o máximo permitido",
            type: input.type,
          };
        }
      }
      if (typeof input.value == "number") {
        if (input.value > input.max) {
          return {
            success: false,
            message: "O valor é maior que o máximo permitido",
            type: input.type,
          };
        }
      }
    }

    if (verify) {
      return { success: true, message: "O valor é válido", type: input.type };
    }

    return { success: false, message: "O valor é inválido", type: input.type };
  } catch {
    return { success: false, message: "Error", type: input.type };
  }
};

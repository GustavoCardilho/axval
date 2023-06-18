import { TypeVerifyInputDTO } from "../verify.dto";

export const VerifyAmout = (
  value: string,
  type: TypeVerifyInputDTO,
  min?: number,
  max?: number
) => {
  if (min) {
    if (typeof value == "string") {
      if (value.length < min) {
        return {
          success: false,
          message: "O valor é menor que o mínimo permitido",
          type: type,
        };
      }
    }
    if (typeof value == "number") {
      if (value < min) {
        return {
          success: false,
          message: "O valor é menor que o mínimo permitido",
          type: type,
        };
      }
    }
  }

  if (max) {
    if (typeof value == "string") {
      if (value.length > max) {
        return {
          success: false,
          message: "O valor é maior que o máximo permitido",
          type: type,
        };
      }
    }
    if (typeof value == "number") {
      if (value > max) {
        return {
          success: false,
          message: "O valor é maior que o máximo permitido",
          type: type,
        };
      }
    }
  }
};

import MethodsRepository from "../../../repositories/MethodsRepository";
import { TypeVerifyInputDTO } from "../verify.dto";

export const VerifyType = (
  type: TypeVerifyInputDTO,
  value: string | number
) => {
  let verify;
  let count = 0;

  if (
    typeof value === "string" &&
    (type == "email" || (typeof type === "object" && type.field === "email"))
  ) {
    verify = MethodsRepository.email(value);
    count = verify ? count + 1 : count;
  }

  if (
    typeof value === "string" &&
    (type == "phone" || (typeof type === "object" && type.field === "phone"))
  ) {
    verify = MethodsRepository.phone(value);
    count = verify ? count + 1 : count;
  }

  if (type == "cpf" || (typeof type === "object" && type.field === "cpf")) {
    verify = MethodsRepository.cpf(value);
    count = verify ? count + 1 : count;
  }

  if (
    typeof value === "string" &&
    (type == "uuid" || (typeof type === "object" && type.field === "uuid"))
  ) {
    verify = MethodsRepository.uuid(value);
    count = verify ? count + 1 : count;
  }

  if (
    typeof value === "number" &&
    (type == "number" ||
      (typeof type === "object" && type.format === 'number'))
  ) {
    verify = MethodsRepository.number(value);
    count = verify ? count + 1 : count;
  }

  if (
    typeof value === "string" &&
    (type == "string" ||
      (typeof type === "object" && type.format === "string"))
  ) {
    verify = MethodsRepository.string(value);
    count = verify ? count + 1 : count;
  }

  if (typeof type === "object") {
    if (Object.keys(type).length != count) {
      verify = false;
    }
  }

  return verify;
};

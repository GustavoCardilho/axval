import MethodsRepository from "../../../repositories/MethodsRepository";
import { TypeVerifyInputArray } from "../verify.dto";

export const VerifyType = (
  type: string | TypeVerifyInputArray,
  value: string
) => {
  let verify;
  if (type == "email" || Array.isArray(value) && value.indexOf("email") !== -1) {
    verify = MethodsRepository.email(value);
  }
  if (type == "phone" || Array.isArray(value) && value.indexOf("phone") !== -1) {
    verify = MethodsRepository.phone(value);
  }
  if (type == "cpf" || Array.isArray(value) && value.indexOf("cpf") !== -1) {
    verify = MethodsRepository.cpf(value);
  }
  if (type == "uuid" || Array.isArray(value)  && value.indexOf("uuid") !== -1) {
    verify = MethodsRepository.uuid(value);
  }

  return verify;
};

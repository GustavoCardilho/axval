import MethodsRepository from "../../../repositories/MethodsRepository";
import { TypeVerifyInputArray } from "../verify.dto";

export const VerifyType = (
  type: string | TypeVerifyInputArray,
  value: string | number
) => {
  let verify;
  let count = 0;

  if (
    typeof value === "string" &&
    (type == "email" || (Array.isArray(type) && type.indexOf("email") !== -1))
  ) {
    verify = MethodsRepository.email(value);
    count = verify ? count + 1 : count;
  }
  if (
    typeof value === "string" &&
    (type == "phone" || (Array.isArray(type) && type.indexOf("phone") !== -1))
  ) {
    verify = MethodsRepository.phone(value);
    count = verify ? count + 1 : count;
  }
  if (type == "cpf" || (Array.isArray(type) && type.indexOf("cpf") !== -1)) {
    verify = MethodsRepository.cpf(value);
    count = verify ? count + 1 : count;
  }
  if (
    typeof value === "string" &&
    (type == "uuid" || (Array.isArray(type) && type.indexOf("uuid") !== -1))
  ) {
    verify = MethodsRepository.uuid(value);
    count = verify ? count + 1 : count;
  }
  if (
    typeof value === "number" &&
    (type == "number" || (Array.isArray(type) && type.indexOf("number") !== -1))
  ) {
    verify = MethodsRepository.number(value);
    count = verify ? count + 1 : count;
  }
  if (
    typeof value === "string" &&
    (type == "string" || (Array.isArray(type) && type.indexOf("string") !== -1))
  ) {
    verify = MethodsRepository.string(value);
    count = verify ? count + 1 : count;
  }

  if (Array.isArray(type) && count !== type.length) {
    console.log(type.length, count);
    verify = false;
  }

  return verify;
};

import MethodsRepository from "../../../repositories/MethodsRepository";

export const VerifyType = (type: string, value: string | number) => {
  let verify;
  if (type == "email" && typeof value == "string") {
    verify = MethodsRepository.email(value);
  }
  if (type == "phone" && typeof value == "string") {
    verify = MethodsRepository.phone(value);
  }
  if (type == "cpf" && typeof value == "string") {
    verify = MethodsRepository.cpf(value);
  }
  if (type == "uuid" && typeof value == "string") {
    verify = MethodsRepository.uuid(value);
  }
  return verify;
};

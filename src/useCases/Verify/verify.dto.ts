export type TypeVerifyInputDTO = "email" | "phone" | "uuid" | "cpf" | TypeVerifyInputArray;
export type TypeVerifyInputArray = Array<TypeVerifyInput | TypeVerifyInputArray>;
export type TypeVerifyInput = "email" | "phone" | "uuid" | "cpf";

export interface VerifyInputDTO {
  value: string;
  type: TypeVerifyInputDTO;
  max?: number;
  min?: number;
}

export interface ResponseVerifyDTO {
  success: boolean;
  message: string;
  type: TypeVerifyInputDTO;
}

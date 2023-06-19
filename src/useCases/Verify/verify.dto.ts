export type TypeVerifyInputDTO =
  | "email"
  | "phone"
  | "uuid"
  | "cpf"
  | "string"
  | "number"
  | TypeVerifyInputArray;

export type TypeVerifyInputArray = Array<
  TypeVerifyInput | TypeVerifyInputArray
>;

export type TypeVerifyInput =
  | "email"
  | "phone"
  | "uuid"
  | "cpf"
  | "string"
  | "number";

export interface VerifyInputDTO {
  value: string | number;
  type: TypeVerifyInputDTO;
  max?: number;
  min?: number;
}

export interface ResponseVerifyDTO {
  success: boolean;
  message: string;
  type: TypeVerifyInputDTO;
}

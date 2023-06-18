type TypeVerifyInputDTO = "email" | "phone" | "uuid" | "cpf";

export interface VerifyInputDTO {
  value: string | number;
  type: TypeVerifyInputDTO;
  max?: number;
  min?: number;
}

export interface ResponseVerifyDTO {
  success: boolean;
  message: string;
  type: string;
}

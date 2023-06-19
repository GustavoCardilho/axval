type FieldType = {
  field: "email" | "phone" | "cpf" | "uuid";
  format?: "string" | "number";
};

export type TypeVerifyInputDTO =
  | "email"
  | "phone"
  | "uuid"
  | "cpf"
  | "string"
  | "number"
  | FieldType;

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

type FieldType = {
    field: "email" | "phone" | "cpf" | "uuid";
    format?: "string" | "number";
};
type TypeVerifyInputDTO = "email" | "phone" | "uuid" | "cpf" | "string" | "number" | FieldType;
interface VerifyInputDTO {
    value: string | number;
    type: TypeVerifyInputDTO;
    max?: number;
    min?: number;
}
interface ResponseVerifyDTO {
    success: boolean;
    message: string;
    type: TypeVerifyInputDTO;
}

interface MethodsInput {
    verify: (input: VerifyInputDTO) => ResponseVerifyDTO;
}

declare class Axval implements MethodsInput {
    verify: (input: VerifyInputDTO) => ResponseVerifyDTO;
}
declare const _default: Axval;

export { _default as default };

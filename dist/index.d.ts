interface MaskInputDTO {
    value: string;
    mask: string;
    onAfterMask?: (value: ResponseMaskDTO) => void;
}
interface ResponseMaskDTO {
    success: boolean;
    message: string;
    data: string;
}

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
    mask: (input: MaskInputDTO) => ResponseMaskDTO;
}

declare class Axval implements MethodsInput {
    verify: (input: VerifyInputDTO) => ResponseVerifyDTO;
    mask: (input: MaskInputDTO) => ResponseMaskDTO;
}
declare const _default: Axval;

export { _default as default };

type TypeVerifyInputDTO = "email" | "phone" | "uuid" | "cpf" | TypeVerifyInputArray;
type TypeVerifyInputArray = Array<TypeVerifyInput | TypeVerifyInputArray>;
type TypeVerifyInput = "email" | "phone" | "uuid" | "cpf";
interface VerifyInputDTO {
    value: string;
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

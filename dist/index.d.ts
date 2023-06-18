type TypeVerifyInputDTO = "email" | "phone" | "username";
interface VerifyInputDTO {
    type: TypeVerifyInputDTO;
}

interface MethodsInput {
    verify: (input: VerifyInputDTO) => Promise<boolean>;
}

declare class Axval implements MethodsInput {
    verify: (input: VerifyInputDTO) => Promise<boolean>;
}
declare const _default: Axval;

export { _default as default };

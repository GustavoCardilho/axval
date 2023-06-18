import { ResponseVerifyDTO, VerifyInputDTO } from "./Verify/verify.dto";

export interface MethodsInput {
  verify: (input: VerifyInputDTO) => ResponseVerifyDTO;
}

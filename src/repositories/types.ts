import { VerifyInputDTO } from "./methods/Verify/verify.dto";

export interface MethodsInput {
  verify: (input: VerifyInputDTO) => Promise<boolean>;
}

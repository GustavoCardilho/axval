import { VerifyInputDTO } from "./repositories/methods/Verify/verify.dto";
import { MethodsInput } from "./repositories/types";
import { VerifyMethod } from "./repositories/methods/Verify";

class Axval implements MethodsInput {
  verify = VerifyMethod;
}

export default new Axval();

import { MethodsInput } from "./useCases/types";
import { VerifyMethod } from "./useCases/Verify";

class Axval implements MethodsInput {
  verify = VerifyMethod;
}

export default new Axval();

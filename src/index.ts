import { MaskMethod } from "./useCases/Mask";
import { MethodsInput } from "./useCases/types";
import { VerifyMethod } from "./useCases/Verify";

class Axval implements MethodsInput {
  verify = VerifyMethod;
  mask = MaskMethod;
}

export default new Axval();

import { MaskInputDTO, ResponseMaskDTO } from "./Mask/mask.dto";
import { ResponseVerifyDTO, VerifyInputDTO } from "./Verify/verify.dto";

export interface MethodsInput {
  verify: (input: VerifyInputDTO) => ResponseVerifyDTO;
  mask: (input: MaskInputDTO) => ResponseMaskDTO;
}

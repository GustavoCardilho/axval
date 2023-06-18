import { IMethodsRepository } from "./IMethodsRepository";
import { EmailMethod } from "./methods/EmailMethod";
import { CpfMethod } from "./methods/CpfMethod";
import { PhoneMethod } from "./methods/PhoneMethod";
import { UuidMethod } from "./methods/UuidMethod";

class MethodsRepository implements IMethodsRepository {
  email = EmailMethod;
  phone = PhoneMethod;
  uuid = UuidMethod;
  cpf = CpfMethod;
}

export default new MethodsRepository();

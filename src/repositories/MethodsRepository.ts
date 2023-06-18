import { IMethodsRepository } from "./IMethodsRepository";
import { EmailMethod } from "./methods/EmailMethod";
import { CpfMethod } from "./methods/CpfMethod";
import { PhoneMethod } from "./methods/PhoneMethod";
import { UuidMethod } from "./methods/UuidMethod";
import { StringMethod } from "./methods/StringMethod";
import { NumberMethod } from "./methods/NumberMethod";

class MethodsRepository implements IMethodsRepository {
  email = EmailMethod;
  phone = PhoneMethod;
  uuid = UuidMethod;
  cpf = CpfMethod;
  string = StringMethod;
  number = NumberMethod;
}

export default new MethodsRepository();

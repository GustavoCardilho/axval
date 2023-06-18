export interface IMethodsRepository {
  email: (value: string) => boolean;
  phone: (value: string) => boolean;
  uuid: (value: string) => boolean;
  cpf: (value: string) => boolean;
  string: (value: string) => boolean;
  number: (value: number) => boolean;
}

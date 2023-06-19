export interface MaskInputDTO {
  value: string;
  mask: string;
  onAfterMask?: (value: ResponseMaskDTO) => void;
}

export interface ResponseMaskDTO {
  success: boolean;
  message: string;
  data: string;
}

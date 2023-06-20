export interface MaskInputDTO {
  value: string;
  mask: string;
  onAfterMask?: (value: ResponseMaskDTO) => void;
  isRemoveCharacters?: boolean;
  representativeCharacter?: string;
}

export interface ResponseMaskDTO {
  success: boolean;
  message: string;
  data: string;
}

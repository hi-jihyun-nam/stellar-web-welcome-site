
export interface Service {
  name: string;
  price: number;
}

export interface MultiLanguageContent {
  ko: string;
  en: string;
  ja: string;
  cn?: string;
}

export interface MultiLanguageService {
  name: MultiLanguageContent;
  price: number;
}

export interface Shop {
  id: string;
  name: MultiLanguageContent;
  address: string;
  operatingTime: string;
  designer: string;
  languages: string[];
  description: MultiLanguageContent;
  services: MultiLanguageService[];
  isActive: boolean;
}

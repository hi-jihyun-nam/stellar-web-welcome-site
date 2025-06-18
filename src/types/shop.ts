
export interface Service {
  name: string;
  price: number;
}

export interface Shop {
  id: string;
  name: string;
  address: string;
  operatingTime: string;
  designer: string;
  languages: string[];
  description: string;
  services: Service[];
  isActive: boolean;
}

export interface ItemsInstrumentsProps {
  serialNumber: string;
  yearOfProduction: string;
  price: number;
  characteristics: {
    brand: string;
    model: string;
    type: string;
    color: string;
    bodyMaterial: string;
    neckMaterial: string;
  }
  photo: string[];
  createAt: string;
  updatedAt: string;
  rewiews: {
    userId: string;
    rating: number;
    comment: string;
    createdAt: string;
  }[];
  rating: number;
  available: boolean;
  avability: {
    inStock: boolean;
    deliveryTime: string;
  };
  discription: string;
  discont: number;
  discontEndDate: string;
  discontStartDate: string;
}

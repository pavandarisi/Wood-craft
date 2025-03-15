export interface Design {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  details: {
    materials: string[];
    dimensions: string;
    finishType: string;
    price?: string;
    leadTime?: string;
    customizable: boolean;
  };
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}
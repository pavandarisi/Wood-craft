import { ServiceCategory } from '../types';

export const services: ServiceCategory[] = [
  {
    id: 'custom-furniture',
    title: 'Custom Furniture',
    description: 'Bespoke furniture pieces tailored to your specific needs and space',
    image: 'https://images.unsplash.com/photo-1565791380713-1756b9a05343?w=1200',
    features: [
      'Personalized design consultation',
      'Custom dimensions and specifications',
      'Premium material selection',
      'Expert craftsmanship'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Projects',
    description: 'High-quality woodwork solutions for businesses and commercial spaces',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200',
    features: [
      'Large-scale production capability',
      'Commercial-grade materials',
      'Project management',
      'Installation services'
    ]
  },
  {
    id: 'restoration',
    title: 'Restoration',
    description: 'Expert restoration of antique and vintage wooden furniture',
    image: 'https://images.unsplash.com/photo-1509664158680-07c5032b51e5?w=1200',
    features: [
      'Historical accuracy',
      'Period-appropriate techniques',
      'Conservation expertise',
      'Structural repairs'
    ]
  }
];
// Import generated product images
import cuttingBladeImg from '@/assets/cutting-blade.jpg';
import weldingTorchImg from '@/assets/welding-torch.jpg';
import safetyHelmetImg from '@/assets/safety-helmet.jpg';
import metalCutterImg from '@/assets/metal-cutter.jpg';
import diamondBladeImg from '@/assets/diamond-blade.jpg';
import wireBrushImg from '@/assets/wire-brush.jpg';
import weldingRodsImg from '@/assets/welding-rods.jpg';
import clearTapeImg from '@/assets/clear-tape.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export const categories = [
  {
    name: "Cutting & Refining",
    subcategories: ["Cutting Work", "Refining Work", "Sanding Work"]
  },
  {
    name: "Welding Work",
    subcategories: []
  },
  {
    name: "Safety Equipment",
    subcategories: []
  },
  {
    name: "Electrical Appliances",
    subcategories: []
  },
  {
    name: "Tools & Supplies",
    subcategories: []
  }
];

export const products: Product[] = [
  // Cutting & Refining
  {
    id: "1",
    name: "Professional Cutting Blade",
    price: 0,
    image: cuttingBladeImg,
    category: "Cutting & Refining",
    subcategory: "Cutting Work",
    description: "High-quality steel cutting blade for professional use"
  },
  {
    id: "2",
    name: "Precision Refining Blade",
    price: 0,
    image: cuttingBladeImg,
    category: "Cutting & Refining",
    subcategory: "Refining Work",
    description: "Precision blade for detailed refining work"
  },
  {
    id: "3",
    name: "Heavy-Duty Sanding Blade",
    price: 0,
    image: cuttingBladeImg,
    category: "Cutting & Refining",
    subcategory: "Sanding Work",
    description: "Durable sanding blade for heavy-duty applications"
  },
  {
    id: "4",
    name: "Diamond Cutting Blade",
    price: 0,
    image: diamondBladeImg,
    category: "Cutting & Refining",
    subcategory: "Cutting Work",
    description: "Premium diamond-tipped cutting blade"
  },
  {
    id: "5",
    name: "Wire Brush Set",
    price: 0,
    image: wireBrushImg,
    category: "Cutting & Refining",
    subcategory: "Sanding Work",
    description: "Complete wire brush set for surface preparation"
  },

  // Welding Work
  {
    id: "6",
    name: "Professional Welding Torch",
    price: 0,
    image: weldingTorchImg,
    category: "Welding Work",
    description: "High-performance welding torch for professional use"
  },
  {
    id: "7",
    name: "Welding Rod Pack",
    price: 0,
    image: weldingRodsImg,
    category: "Welding Work",
    description: "Quality welding rods for various applications"
  },

  // Safety Equipment
  {
    id: "8",
    name: "Industrial Safety Helmet",
    price: 0,
    image: safetyHelmetImg,
    category: "Safety Equipment",
    description: "ANSI-approved safety helmet with adjustable fit"
  },

  // Electrical Appliances
  {
    id: "9",
    name: "Heavy-Duty Metal Cutter",
    price: 0,
    image: metalCutterImg,
    category: "Electrical Appliances",
    description: "Powerful electric metal cutting tool"
  },

  // Tools & Supplies
  {
    id: "10",
    name: "Clear Tape Roll",
    price: 0,
    image: clearTapeImg,
    category: "Tools & Supplies",
    description: "High-strength clear adhesive tape"
  },
  {
    id: "11",
    name: "Stretch Film Roll",
    price: 0,
    image: clearTapeImg,
    category: "Tools & Supplies",
    description: "Industrial strength stretch wrap film"
  },
  {
    id: "12",
    name: "Rubber Glue",
    price: 0,
    image: clearTapeImg,
    category: "Tools & Supplies",
    description: "Multi-purpose rubber adhesive"
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
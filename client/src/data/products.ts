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
    name: "งานตัดและขัด",
    subcategories: ["งานตัด", "งานขัด", "งานขัดผิว"]
  },
  {
    name: "งานเชื่อม",
    subcategories: []
  },
  {
    name: "อุปกรณ์ความปลอดภัย",
    subcategories: []
  },
  {
    name: "เครื่องใช้ไฟฟ้า",
    subcategories: []
  },
  {
    name: "เครื่องมือและอุปกรณ์",
    subcategories: []
  }
];

export const products: Product[] = [
  // งานตัดและขัด
  {
    id: "1",
    name: "ใบตัดมืออาชีพ",
    price: 1250,
    image: cuttingBladeImg,
    category: "งานตัดและขัด",
    subcategory: "งานตัด",
    description: "ใบตัดเหล็กคุณภาพสูงสำหรับงานมืออาชีพ"
  },
  {
    id: "2",
    name: "ใบขัดความแม่นยำ",
    price: 950,
    image: cuttingBladeImg,
    category: "งานตัดและขัด",
    subcategory: "งานขัด",
    description: "ใบขัดแม่นยำสำหรับงานขัดละเอียด"
  },
  {
    id: "3",
    name: "ใบขัดผิวหนักหน่วง",
    price: 1100,
    image: cuttingBladeImg,
    category: "งานตัดและขัด",
    subcategory: "งานขัดผิว",
    description: "ใบขัดผิวทนทานสำหรับงานหนัก"
  },
  {
    id: "4",
    name: "ใบตัดเพชร",
    price: 2800,
    image: diamondBladeImg,
    category: "งานตัดและขัด",
    subcategory: "งานตัด",
    description: "ใบตัดเพชรพรีเมียมคุณภาพสูง"
  },
  {
    id: "5",
    name: "ชุดแปรงลวดเหล็ก",
    price: 450,
    image: wireBrushImg,
    category: "งานตัดและขัด",
    subcategory: "งานขัดผิว",
    description: "ชุดแปรงลวดเหล็กสำหรับเตรียมผิวงาน"
  },

  // งานเชื่อม
  {
    id: "6",
    name: "ปืนเชื่อมมืออาชีพ",
    price: 8500,
    image: weldingTorchImg,
    category: "งานเชื่อม",
    description: "ปืนเชื่อมประสิทธิภาพสูงสำหรับงานมืออาชีพ"
  },
  {
    id: "7",
    name: "ลวดเชื่อมแพ็ค",
    price: 680,
    image: weldingRodsImg,
    category: "งานเชื่อม",
    description: "ลวดเชื่อมคุณภาพสำหรับงานหลากหลาย"
  },

  // อุปกรณ์ความปลอดภัย
  {
    id: "8",
    name: "หมวกนิรภัยอุตสาหกรรม",
    price: 850,
    image: safetyHelmetImg,
    category: "อุปกรณ์ความปลอดภัย",
    description: "หมวกนิรภัยมาตรฐาน ANSI ปรับได้"
  },

  // เครื่องใช้ไฟฟ้า
  {
    id: "9",
    name: "เครื่องตัดโลหะหนักหน่วง",
    price: 12500,
    image: metalCutterImg,
    category: "เครื่องใช้ไฟฟ้า",
    description: "เครื่องมือตัดโลหะไฟฟ้าประสิทธิภาพสูง"
  },

  // เครื่องมือและอุปกรณ์
  {
    id: "10",
    name: "เทปใสม้วน",
    price: 120,
    image: clearTapeImg,
    category: "เครื่องมือและอุปกรณ์",
    description: "เทปกาวใสความแข็งแรงสูง"
  },
  {
    id: "11",
    name: "ฟิล์มยืดม้วน",
    price: 180,
    image: clearTapeImg,
    category: "เครื่องมือและอุปกรณ์",
    description: "ฟิล์มหุ้มความแข็งแรงระดับอุตสาหกรรม"
  },
  {
    id: "12",
    name: "กาวยาง",
    price: 95,
    image: clearTapeImg,
    category: "เครื่องมือและอุปกรณ์",
    description: "กาวยางอเนกประสงค์"
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
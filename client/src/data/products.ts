// Import generated product images
// ใบเจียรเหล็ก 4" (100x2mm) AWC60P สีแดง SUMO
import polishingBladeImg11 from '@/assets/polishBlade11.jpg';
import polishingBladeImg12 from '@/assets/polishBlade12.jpg';
import polishingBladeImg13 from '@/assets/polishBlade13.jpg';
import polishingBladeImg14 from '@/assets/polishBlade14.jpg';
import polishingBladeImg15 from '@/assets/polishBlade15.jpg';
import polishingBladeImg16 from '@/assets/polishBlade16.jpg';
import polishingBladeImg17 from '@/assets/polishBlade17.jpg';
import polishingBladeImg18 from '@/assets/polishBlade18.jpg';
import polishingBladeImg19 from '@/assets/polishBlade19.jpg';
import polishingBladeImg110 from '@/assets/polishBlade110.jpg';
import polishingBladeImg111 from '@/assets/polishBlade111.jpg';
import polishingBladeImg112 from '@/assets/polishBlade112.jpg';
import polishingBladeImg113 from '@/assets/polishBlade113.jpg';
import polishingBladeImg114 from '@/assets/polishBlade114.jpg';

// ใบเจียร 4” (100x2.0mm) Ceragrain60P SUMO สีเขียว
import polishingBladeImg21 from '@/assets/cutting-blade.jpg';
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
  images?: string[]; // Additional images for slideshow
  category: string;
  subcategory?: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export const categories = [
  {
    name: "งานตัดและเจียร",
    subcategories: ["งานตัด", "งานเจียร"]
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
    name: 'ใบเจียรเหล็ก 4" (100x2mm) AWC60P สีแดง SUMO',
    price: 15,
    image: polishingBladeImg11,
    images: [
      polishingBladeImg11,
      polishingBladeImg12,
      polishingBladeImg13,
      polishingBladeImg14,
      polishingBladeImg15,
      polishingBladeImg16,
      polishingBladeImg17,
      polishingBladeImg18,
      polishingBladeImg19,
      polishingBladeImg110,
      polishingBladeImg111,
      polishingBladeImg112,
      polishingBladeImg113
    ],
    category: "งานตัดและเจียร",
    subcategory: "งานเจียร",
    description: "ใบตัดเหล็กคุณภาพสูงสำหรับงานมืออาชีพ"
  },
  {
    id: "2",
    name: "ใบเจียร 4” (100x2.0mm) Ceragrain60P SUMO สีเขียว",
    price: 16,
    image: polishingBladeImg21,
    category: "งานตัดและเจียร",
    subcategory: "งานขัด",
    description: "ใบขัดแม่นยำสำหรับงานขัดละเอียด"
  },
  /* {
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
  } */
]; 

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
}; 
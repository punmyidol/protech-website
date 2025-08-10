// Import generated product images
// ใบเจียรเหล็ก 4" (100x2mm) AWC60P สีแดง SUMO
import polishingBlade11back from '@/assets/polishBlade11.jpg';
import polishingBlade12front from '@/assets/polishBlade12.jpg';
import polishingBlade13box from '@/assets/polishBlade13.jpg';
import polishingBlade14parcel from '@/assets/polishBlade14.jpg';

// ใบเจียร 4” (100x2.0mm) Ceragrain60P SUMO สีเขียว
import polishingBlade21front from '@/assets/polishBlade21.jpg';
import polishingBlade22back from '@/assets/polishBlade22.jpg';
import polishingBlade23box from '@/assets/polishBlade23.jpg';
import polishingBlade24parcel from '@/assets/polishBlade24.jpg';

// ใบเจียร 4” (100x4mm) หนา SUMO สีแดง
import polishingBlade31front from '@/assets/polishBlade31.jpg';
import polishingBlade32back from '@/assets/polishBlade32.jpg';
import polishingBlade33box from '@/assets/polishBlade33.jpg';
import polishingBlade34parcel from '@/assets/polishBlade34.jpg';

// ใบเจียร 4” (100x4mm) หนา SUMO สีเขียว
import polishingBlade41front from '@/assets/polishBlade41.jpg';
import polishingBlade42back from '@/assets/polishBlade42.jpg';
import polishingBlade43box from '@/assets/polishBlade43.jpg';
import polishingBlade44parcel from '@/assets/polishBlade44.jpg';

// ใบเจียร 4” (100x6mm) หนา SUMO สีแดง
import polishingBlade51front from '@/assets/polishBlade51.jpg';
import polishingBlade52back from '@/assets/polishBlade52.jpg';
import polishingBlade53box from '@/assets/polishBlade53.jpg';
import polishingBlade54parcel from '@/assets/polishBlade54.jpg';

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
    image: polishingBlade12front,
    images: [
      polishingBlade12front,
      polishingBlade11back,
      polishingBlade13box,
      polishingBlade14parcel,
    ],
    category: "งานตัดและเจียร",
    subcategory: "งานเจียร",
    description: "ใบตัดเหล็กคุณภาพสูงสำหรับงานมืออาชีพ"
  },
  {
    id: "2",
    name: "ใบเจียร 4” (100x2.0mm) Ceragrain60P SUMO สีเขียว",
    price: 16,
    image: polishingBlade21front,
    images: [
      polishingBlade21front,
      polishingBlade22back,
      polishingBlade23box,
      polishingBlade24parcel
    ],
    category: "งานตัดและเจียร",
    subcategory: "งานเจียร",
    description: "ใบขัดแม่นยำสำหรับงานขัดละเอียด"
  },
  {
    id: "3",
    name: "ใบเจียร 4” (100x4mm) หนา SUMO สีแดง",
    price: 14,
    image: polishingBlade31front,
    images: [
      polishingBlade31front,
      polishingBlade32back,
      polishingBlade33box,
      polishingBlade34parcel
    ],
    category: "งานตัดและเจียร",
    subcategory: "งานเจียร",
    description: "ใบขัดผิวทนทานสำหรับงานหนัก"
  },
  {
    id: "4",
    name: "ใบเจียร 4” (100x4mm) หนา SUMO สีเขียว",
    price: 14,
    image: polishingBlade41front,
    images: [
      polishingBlade41front,
      polishingBlade42back,
      polishingBlade43box,
      polishingBlade44parcel
    ],
    category: "งานตัดและเจียร",
    subcategory: "งานเจียร",
    description: "ใบตัดเพชรพรีเมียมคุณภาพสูง"
  },
  {
    id: "5",
    name: "ใบเจียร 4” (100x6mm) หนา SUMO สีแดง",
    price: 16,
    image: polishingBlade51front,
    images: [
      polishingBlade51front,
      polishingBlade52back,
      polishingBlade53box,
      polishingBlade54parcel
    ],
    category: "งานตัดและเจียร",
    subcategory: "งานเจียร",
    description: "ชุดแปรงลวดเหล็กสำหรับเตรียมผิวงาน"
  },

  // งานเชื่อม
  /* {
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
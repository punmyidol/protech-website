import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">PT</span>
              </div>
              <h3 className="text-xl font-bold">ProTech Hardware</h3>
            </div>
            <p className="text-muted-foreground">
              พันธมิตรที่เชื่อถือได้สำหรับเครื่องมือและอุปกรณ์มืออาชีพ
              เครื่องมือคุณภาพสำหรับงานคุณภาพ
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="outline" size="sm">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="sm">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">ข้อมูลติดต่อ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+66 (0) 2 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@protechhardware.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-sm">
                  123 ถนนอุตสาหกรรม<br />
                  เขตลาดพร้าว กรุงเทพฯ 10230<br />
                  ประเทศไทย
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">เวลาทำการ</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">จันทร์ - ศุกร์:</span>
                <span>08:00 - 18:00 น.</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">เสาร์:</span>
                <span>09:00 - 16:00 น.</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">อาทิตย์:</span>
                <span>ปิด</span>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-muted-foreground">
                บริการซ่อมฉุกเฉิน 24/7<br />
                โทรสำหรับความต้องการเครื่องมือเร่งด่วน
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 ProTech Hardware สงวนลิขสิทธิ์</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Button variant="link" size="sm" className="text-muted-foreground p-0">
              นโยบายความเป็นส่วนตัว
            </Button>
            <Button variant="link" size="sm" className="text-muted-foreground p-0">
              เงื่อนไขการใช้บริการ
            </Button>
            <Button variant="link" size="sm" className="text-muted-foreground p-0">
              นโยบายการคืนสินค้า
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
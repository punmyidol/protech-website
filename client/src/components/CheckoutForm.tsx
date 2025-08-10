import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';

interface CheckoutFormProps {
  onBack: () => void;
}

interface CustomerData {
  name: string;
  phone: string;
  address: string;
  notes?: string;
}

export const CheckoutForm = ({ onBack }: CheckoutFormProps) => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [customerData, setCustomerData] = useState<CustomerData>({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect back if cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-6 space-y-6 animate-fade-in">
        <div className="flex items-center space-x-4 mb-6">
          <Button variant="outline" onClick={onBack} size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            กลับไปตะกร้า
          </Button>
          <h1 className="text-2xl font-bold">ชำระเงิน</h1>
        </div>
        
        <Card className="text-center py-12">
          <CardContent>
            <p className="text-muted-foreground mb-4">ตะกร้าสินค้าของคุณว่างเปล่า</p>
            <Button onClick={onBack}>กลับไปเลือกสินค้า</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleInputChange = (field: keyof CustomerData, value: string) => {
    setCustomerData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    // Check if cart is empty
    if (cartItems.length === 0) {
      toast({
        title: "ตะกร้าสินค้าว่างเปล่า",
        description: "กรุณาเลือกสินค้าก่อนดำเนินการชำระเงิน",
        variant: "destructive"
      });
      return false;
    }

    if (!customerData.name.trim()) {
      toast({
        title: "ข้อมูลไม่ถูกต้อง",
        description: "กรุณากรอกชื่อ-นามสกุล",
        variant: "destructive"
      });
      return false;
    }
    
    if (!customerData.phone.trim()) {
      toast({
        title: "ข้อมูลไม่ถูกต้อง", 
        description: "กรุณากรอกเบอร์โทรศัพท์",
        variant: "destructive"
      });
      return false;
    }
    
    if (!customerData.address.trim()) {
      toast({
        title: "ข้อมูลไม่ถูกต้อง",
        description: "กรุณากรอกที่อยู่จัดส่ง",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const sendOrderNotification = async (orderData: any) => {
    // Placeholder function for sending order data to backend
    // This could call LINE Messaging API, email service, etc.
    console.log('Order data to be sent:', orderData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real implementation, you would send this data to your backend:
    // await fetch('/api/orders', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(orderData)
    // });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      const orderData = {
        customer: customerData,
        items: cartItems,
        total: getCartTotal(),
        orderDate: new Date().toISOString(),
        orderId: `ORDER-${Date.now()}`
      };

      await sendOrderNotification(orderData);

      toast({
        title: "สั่งซื้อสำเร็จ!",
        description: "ขอบคุณครับ! คำสั่งซื้อของคุณได้รับแล้ว เราจะติดต่อกลับเร็วๆ นี้",
      });

      clearCart();
      onBack();
    } catch (error) {
      toast({
        title: "สั่งซื้อไม่สำเร็จ",
        description: "เกิดข้อผิดพลาดในการสั่งซื้อ กรุณาลองใหม่อีกครั้ง",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 animate-fade-in">
      <div className="flex items-center space-x-4 mb-6">
        <Button variant="outline" onClick={onBack} size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          กลับไปตะกร้า
        </Button>
        <h1 className="text-2xl font-bold">ชำระเงิน</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Customer Information Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>ข้อมูลลูกค้า</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">ชื่อ-นามสกุล *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={customerData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="กรอกชื่อ-นามสกุล"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">เบอร์โทรศัพท์ *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="กรอกเบอร์โทรศัพท์"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="address">ที่อยู่จัดส่ง *</Label>
                  <Textarea
                    id="address"
                    value={customerData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="กรอกที่อยู่จัดส่งแบบเต็ม"
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="notes">หมายเหตุเพิ่มเติม (ไม่บังคับ)</Label>
                  <Textarea
                    id="notes"
                    value={customerData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="คำแนะนำการจัดส่งพิเศษหรือหมายเหตุ"
                    className="min-h-[80px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting || cartItems.length === 0}
                >
                  {isSubmitting ? 'กำลังสั่งซื้อ...' : `สั่งซื้อสินค้า (฿${getCartTotal().toLocaleString()})`}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>สรุปการสั่งซื้อ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>ไม่มีสินค้าในตะกร้า</p>
                </div>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start space-x-3 py-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-md bg-secondary flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm leading-tight mb-1">{item.name}</h4>
                        <div className="flex justify-between items-center text-sm">
                          <div className="text-muted-foreground">
                            <span>฿{item.price.toLocaleString()} × {item.quantity}</span>
                          </div>
                          <p className="font-semibold text-primary">
                            ฿{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>รวมทั้งหมด:</span>
                    <span className="text-primary">฿{getCartTotal().toLocaleString()}</span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
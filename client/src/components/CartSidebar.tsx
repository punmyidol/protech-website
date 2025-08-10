import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/useCart';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export const CartSidebar = ({ isOpen, onClose, onCheckout }: CartSidebarProps) => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, checkout } = useCart();

  if (!isOpen) return null;

  const handleCheckout = () => {
    const success = checkout();
    if (success) {
      onCheckout();
      onClose();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card z-50 shadow-xl animate-slide-in">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-xl font-semibold">ตะกร้าสินค้า</h2>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">ตะกร้าของคุณว่างเปล่า</p>
                <Button variant="outline" onClick={onClose} className="mt-4">
                  เลือกซื้อสินค้าต่อ
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4 p-4 bg-secondary/30 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md bg-secondary"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm leading-tight">{item.name}</h3>
                      <p className="text-primary font-semibold mt-1">
                        ฿{item.price.toLocaleString()}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <Badge variant="secondary" className="px-3 py-1">
                            {item.quantity}
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive h-8 w-8 p-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-border bg-card">
              <Separator className="mb-4" />
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">รวม:</span>
                <span className="text-xl font-bold text-primary">
                  ฿{getCartTotal().toLocaleString()}
                </span>
              </div>
              <Button onClick={handleCheckout} className="w-full" size="lg">
                ดำเนินการชำระเงิน
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
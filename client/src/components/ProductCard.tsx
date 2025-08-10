import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';
interface ProductCardProps {
  product: Product;
}
export const ProductCard = ({
  product
}: ProductCardProps) => {
  const {
    addToCart
  } = useCart();
  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "เพิ่มสินค้าแล้ว",
      description: `เพิ่ม ${product.name} ลงในตะกร้าแล้ว`
    });
  };
  return <Card className="group hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            {product.subcategory && <Badge variant="secondary" className="text-xs ml-2 shrink-0">
                {product.subcategory}
              </Badge>}
          </div>
          {product.description && <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {product.description}
            </p>}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              ฿{product.price.toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full font-medium" size="sm">
          เพิ่มลงตะกร้า
        </Button>
      </CardFooter>
    </Card>;
};
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { Product, products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the product by ID
  const product = products.find(p => p.id === productId);

  // Use the images array if available, otherwise fall back to the single image
  const productImages = product ? (product.images || [product.image]) : [];

  useEffect(() => {
    if (!product) {
      // If product not found, redirect to 404 or home
      navigate('/', { replace: true });
    }
  }, [product, navigate]);

  if (!product) {
    return null; // Will redirect via useEffect
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "เพิ่มสินค้าแล้ว",
      description: `เพิ่ม ${product.name} ลงในตะกร้าแล้ว`
    });
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleBackToProducts = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back button */}
      <div className="container mx-auto px-4 py-6">
        <Button 
          variant="ghost" 
          onClick={handleBackToProducts}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          กลับ
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Slideshow */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-secondary">
                  <img
                    src={productImages[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation arrows - only show if multiple images */}
                  {productImages.length > 1 && (
                    <>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 opacity-75 hover:opacity-100"
                        onClick={handlePreviousImage}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-75 hover:opacity-100"
                        onClick={handleNextImage}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </>
                  )}

                  {/* Image indicator dots - only show if multiple images */}
                  {productImages.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {productImages.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Thumbnail strip - only show if multiple images */}
            {productImages.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-primary' : 'border-transparent'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl font-bold text-foreground">
                  {product.name}
                </h1>
                {product.subcategory && (
                  <Badge variant="secondary" className="text-sm">
                    {product.subcategory}
                  </Badge>
                )}
              </div>
              
              <div className="mb-4">
                <Badge variant="outline" className="text-sm">
                  {product.category}
                </Badge>
              </div>

              <div className="text-4xl font-bold text-primary mb-6">
                ฿{product.price.toLocaleString()}
              </div>

              {product.description && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-2">รายละเอียดสินค้า</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              <Button 
                onClick={handleAddToCart} 
                className="w-full lg:w-auto px-8 py-3 text-lg font-medium"
                size="lg"
              >
                เพิ่มลงตะกร้า
              </Button>
            </div>

            {/* Additional product info could go here */}
            <div className="pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">ข้อมูลเพิ่มเติม</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">รหัสสินค้า:</span>
                  <span className="font-medium">{product.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">หมวดหมู่:</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                {product.subcategory && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">หมวดหมู่ย่อย:</span>
                    <span className="font-medium">{product.subcategory}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
import { useState } from 'react';
import { Header } from '@/components/Header';
import { ProductListing } from '@/components/ProductListing';
import { CartSidebar } from '@/components/CartSidebar';
import { CheckoutForm } from '@/components/CheckoutForm';
import { Footer } from '@/components/Footer';

type ViewState = 'products' | 'checkout';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('products');

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentView('products');
  };

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCheckout = () => {
    setCurrentView('checkout');
  };

  const handleBackToProducts = () => {
    setCurrentView('products');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onCategoryChange={handleCategoryChange}
        onCartToggle={handleCartToggle}
        currentCategory={selectedCategory}
      />
      
      <main className="min-h-[calc(100vh-200px)]">
        {currentView === 'products' ? (
          <ProductListing selectedCategory={selectedCategory} />
        ) : (
          <CheckoutForm onBack={handleBackToProducts} />
        )}
      </main>

      <Footer />

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Index;
import { useState } from 'react';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { categories } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
interface HeaderProps {
  onCategoryChange: (category: string | null) => void;
  onCartToggle: () => void;
  currentCategory: string | null;
}
export const Header = ({
  onCategoryChange,
  onCartToggle,
  currentCategory
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    getCartItemsCount
  } = useCart();
  const cartItemsCount = getCartItemsCount();
  const handleCategoryClick = (category: string | null) => {
    onCategoryChange(category);
    setMobileMenuOpen(false);
  };
  return <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">PT</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ProTech</h1>
              <p className="text-sm text-muted-foreground hidden sm:block">Hardware</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Button variant={currentCategory === null ? "default" : "ghost"} onClick={() => handleCategoryClick(null)} className="font-medium">หน้าหลัก</Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-medium">
                  สินค้า <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {categories.map(category => <DropdownMenuItem key={category.name} onClick={() => handleCategoryClick(category.name)} className="cursor-pointer">
                    {category.name}
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="font-medium">เกี่ยวกับ</Button>
            <Button variant="ghost" className="font-medium">ติดต่อเรา</Button>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Button variant="outline" size="sm" onClick={onCartToggle} className="relative">
              <ShoppingCart className="h-4 w-4" />
              {cartItemsCount > 0 && <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </Badge>}
              <span className="sr-only">Shopping cart</span>
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <Button variant={currentCategory === null ? "default" : "ghost"} onClick={() => handleCategoryClick(null)} className="justify-start">
                หน้าหลัก
              </Button>
              
              <div className="space-y-1">
                <p className="px-3 py-2 text-sm font-medium text-muted-foreground">สินค้า</p>
                {categories.map(category => <Button key={category.name} variant={currentCategory === category.name ? "default" : "ghost"} onClick={() => handleCategoryClick(category.name)} className="justify-start ml-4" size="sm">
                    {category.name}
                  </Button>)}
              </div>
              
              <Button variant="ghost" className="justify-start">เกี่ยวกับ</Button>
              <Button variant="ghost" className="justify-start">ติดต่อเรา</Button>
            </div>
          </nav>}
      </div>
    </header>;
};
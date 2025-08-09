import { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products, categories, getProductsByCategory } from '@/data/products';

interface ProductListingProps {
  selectedCategory: string | null;
}

export const ProductListing = ({ selectedCategory }: ProductListingProps) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory 
      ? getProductsByCategory(selectedCategory)
      : products;

    if (selectedSubcategory) {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory);
    }

    return filtered;
  }, [selectedCategory, selectedSubcategory]);

  const currentCategoryData = categories.find(cat => cat.name === selectedCategory);
  const subcategories = currentCategoryData?.subcategories || [];

  const handleSubcategoryFilter = (subcategory: string | null) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {selectedCategory || 'สินค้าทั้งหมด'}
        </h1>
        <p className="text-muted-foreground">
          {selectedCategory 
            ? `Browse our ${selectedCategory.toLowerCase()} collection`
            : 'Discover our complete range of professional power tools and equipment'
          }
        </p>
      </div>

      {/* Subcategory Filters */}
      {subcategories.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedSubcategory === null ? "default" : "outline"}
              onClick={() => handleSubcategoryFilter(null)}
              size="sm"
            >
              All {selectedCategory}
            </Button>
            {subcategories.map((subcategory) => (
              <Button
                key={subcategory}
                variant={selectedSubcategory === subcategory ? "default" : "outline"}
                onClick={() => handleSubcategoryFilter(subcategory)}
                size="sm"
              >
                {subcategory}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Products Count */}
      <div className="mb-6">
        <Badge variant="secondary" className="text-sm">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </Badge>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg mb-4">
            No products found in this category.
          </p>
          <Button 
            variant="outline"
            onClick={() => {
              setSelectedSubcategory(null);
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};
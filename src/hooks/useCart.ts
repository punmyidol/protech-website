import { useState, useEffect } from 'react';
import { CartItem, Product } from '@/data/products';

const CART_STORAGE_KEY = 'power-tools-cart';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, quantity: number = 1) => {
    console.log('useCart: Adding product:', product, 'quantity:', quantity);
    setCartItems(currentItems => {
      console.log('useCart: Current cart items:', currentItems);
      const existingItem = currentItems.find(item => item.id === product.id);
      
      if (existingItem) {
        console.log('useCart: Updating existing item');
        const updated = currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        console.log('useCart: Updated cart items:', updated);
        return updated;
      }
      
      console.log('useCart: Adding new item');
      const newItems = [...currentItems, { ...product, quantity }];
      console.log('useCart: New cart items:', newItems);
      return newItems;
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(currentItems =>
      currentItems.filter(item => item.id !== productId)
    );
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount
  };
};
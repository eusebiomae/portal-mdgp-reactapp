import React, {
  ReactNode,
  createContext,
  useState,
} from 'react';
import { Product } from '../../@types';

interface ProductContextData {
  product: Product | null;
  setProduct: (product: Product | null) => void;
}

export const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData,
);

export const ProductProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [product, setProduct] = useState<Product | null>(null);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

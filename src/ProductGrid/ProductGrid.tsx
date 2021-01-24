interface ProductGridItem {
  productId: string;
  price: string;
  title: string;
  image: string;
}

interface ProductGridProps {
  products: ProductGridItem[]
}

export const ProductGrid = (props: ProductGridProps) => <></>;

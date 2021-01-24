interface ProductFeature {
  name: string;
  value: string;
}

interface ProductPageProps {
  title: string;
  media: string;
  price: string;
  productInformationHTML: string;
  specialOffer?: string;
  guaranteeInformation: string;
  productCode: string;
  productFeatures: ProductFeature[];
}

export const ProductPage = (props: ProductPageProps) => <></>;

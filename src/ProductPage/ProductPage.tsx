interface ProductFeature {
  name: string;
  value: string;
}

interface ImageSources {
  altText: string;
  urls: string[];
}

interface ProductPageProps {
  title: string;
  images: ImageSources;
  price: string;
  productInformationHTML: string;
  specialOffer?: string;
  guaranteeInformation: string[];
  productCode: string;
  productFeatures: ProductFeature[];
}

export const ProductPage = (props: ProductPageProps) => <></>;

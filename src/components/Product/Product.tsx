import { useAppSelector } from "../../hooks/hooks";
import TagInput from "../../resusableComponents/Tag/TagInput";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  Subtitle
} from "./ProductStyles";
import { selectProductData } from "../../store/reducers/productSlice";

const Product = () => {
  const products = useAppSelector(selectProductData);
  if (!products.length) return <> Loading ...</>;
  const { title, image, subtitle, tags } = products[0];

  return (
    <ProductCard>
      <ProductImage src={image} alt="image" />
      <ProductTitle>{title}</ProductTitle>
      <Subtitle>{subtitle}</Subtitle>
      <TagInput tags={tags}></TagInput>
    </ProductCard>
  );
};

export default Product;

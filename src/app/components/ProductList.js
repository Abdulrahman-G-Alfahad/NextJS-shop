import products from "../products";
import ProductItem from "./ProductItem";

function ProductList() {
  return products.map((product) => {
    return <ProductItem product={product} />;
  });
}

export default ProductList;

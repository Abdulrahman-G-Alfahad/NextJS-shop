import products from "../products";
import ProductItem from "./ProductItem";

function ProductList() {
  return products.map((product) => {
    return <ProductItem />;
  });
}

export default ProductList;

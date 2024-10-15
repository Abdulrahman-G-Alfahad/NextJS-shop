import Image from "next/image";
import products from "../products";

function ProductItem() {
  return (
    <div
      key={products[0].name}
      className="flex flex-col items-center border border-gray-300 rounded-lg p-4 shadow-lg"
    >
      <Image
        src={products[0].imageSrc}
        alt={products[0].name}
        width={200}
        height={200}
      />
      <p>{products[0].name}</p>
      <p>{products[0].price}</p>
    </div>
  );
}

export default ProductItem;

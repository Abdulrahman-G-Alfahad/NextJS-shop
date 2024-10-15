import Image from "next/image";

function ProductItem({ product }) {
  return (
    <div
      key={product.name}
      className="flex flex-col items-center border border-gray-300 rounded-lg p-4 shadow-lg"
    >
      <Image
        src={product.imageSrc}
        alt={product.name}
        width={200}
        height={200}
      />
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductItem;

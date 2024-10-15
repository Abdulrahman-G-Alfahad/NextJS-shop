import Image from "next/image";
import bookShopImage from "../../src/images/bookshopimage.jpg";
import products from "./products.js";

export default function Home() {
  const product1 = (
    <div className="flex flex-col items-center">
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
  const product2 = (
    <div className="flex flex-col items-center">
      <Image
        src={products[1].imageSrc}
        alt={products[1].name}
        width={200}
        height={200}
      />
      <p>{products[1].name}</p>
      <p>{products[1].price}</p>
    </div>
  );
  const product3 = (
    <div className="flex flex-col items-center">
      <Image
        src={products[2].imageSrc}
        alt={products[2].name}
        width={200}
        height={200}
      />
      <p>{products[2].name}</p>
      <p>{products[2].price}</p>
    </div>
  );

  return (
    <div className="text-center">
      <h1 className="text-5xl"> Awesome Bookshop </h1>
      <h2 className="text-2xl"> Where you can find all of the awesome books</h2>
      <Image src={bookShopImage}></Image>
      <br></br>
      <div className="grid grid-cols-3 gap-4">
        <div>{product1}</div>
        <div>{product2}</div>
        <div>{product3}</div>
      </div>
    </div>
  );
}

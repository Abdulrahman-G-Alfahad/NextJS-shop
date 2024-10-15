import Image from "next/image";
import bookShopImage from "../../src/images/bookshopimage.jpg";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductList";

export default function Home() {
  //TASK 2

  // const product1 = (
  //   <div className="flex flex-col items-center">
  //     <Image
  //       src={products[0].imageSrc}
  //       alt={products[0].name}
  //       width={200}
  //       height={200}
  //     />
  //     <p>{products[0].name}</p>
  //     <p>{products[0].price}</p>
  //   </div>
  // );
  // const product2 = (
  //   <div className="flex flex-col items-center">
  //     <Image
  //       src={products[1].imageSrc}
  //       alt={products[1].name}
  //       width={200}
  //       height={200}
  //     />
  //     <p>{products[1].name}</p>
  //     <p>{products[1].price}</p>
  //   </div>
  // );
  // const product3 = (
  //   <div className="flex flex-col items-center">
  //     <Image
  //       src={products[2].imageSrc}
  //       alt={products[2].name}
  //       width={200}
  //       height={200}
  //     />
  //     <p>{products[2].name}</p>
  //     <p>{products[2].price}</p>
  //   </div>
  // );

  //Task 3

  // const productList = products.map((product) => {
  //   return (
  //     <div
  //       key={product.name}
  //       className="flex flex-col items-center border border-gray-300 rounded-lg p-4 shadow-lg"
  //     >
  //       <Image
  //         src={product.imageSrc}
  //         alt={product.name}
  //         width={200}
  //         height={200}
  //       />
  //       <p>{product.name}</p>
  //       <p>{product.price}</p>
  //     </div>
  //   );
  // });

  return (
    <div className="text-center">
      <br></br>
      <h1 className="text-5xl"> Awesome Bookshop </h1>
      <br></br>
      <h2 className="text-2xl"> Where you can find all of the awesome books</h2>
      <br></br>
      <Image src={bookShopImage}></Image>
      <br></br>
      <br></br>
      <div className="grid grid-cols-3 gap-4">
        <ProductList />
      </div>
      <br></br>
    </div>
  );
}
